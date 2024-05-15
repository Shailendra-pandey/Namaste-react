import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resData from "../utils/demoData.json";
// const resData = require("../utils/demoData.json");

const Body = () => {
  const [resList, setResList] = useState(resData);
  return (
    <div className="body">
      <button
        className="top-res"
        onClick={() => {
          setResList(resList.filter((res) => res.info.avgRating > 4.3));
        }}
      >
        Filter Top Restaurant
      </button>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
