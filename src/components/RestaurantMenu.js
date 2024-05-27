import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [resMenu, setResMenu] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const menu = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5355161&lng=77.3910265&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await menu.json();
    console.log(json);
    setResMenu(json);
  };

  if (!resMenu) return <Shimmer />;

  const { text } = resMenu.data.cards[0].card.card;
  const { costForTwoMessage, cuisines, avgRatingString } =
    resMenu.data.cards[2].card.card.info;
  const items =
    resMenu.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
      .itemCards;

  return (
    <div>
      <h1>{text}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage} - {avgRatingString} Rating
      </p>

      <ul>
        {items.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - {item.card.info.price / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
