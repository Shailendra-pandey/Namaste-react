import React from "react";
import ReactDOM from "react-dom/client";
import resList from "./resList.json";

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World from React!"
// );

// const parent = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "I am a H1 tag"),
//     React.createElement("h2", {}, "I am a H2 tag"),
//   ]),
//   React.createElement("div", { id: "child2" }, [
//     React.createElement("h1", {}, "I am a H1 tag"),
//     React.createElement("h2", {}, "I am a H2 tag"),
//   ]),
// ]);

// const jsxHeading = <h1 id="heading">Namaste React using JSX🚀</h1>;

// const Title = () => <h1 id="heading">Namaste React using JSX🚀</h1>;
// const name = "Shailendra";

// Component Composition
// const HeadingComponent = () => (
//   <div>
//     <Title />
//     <h1>Heading Component by {name}</h1>
//   </div>
// );

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/png;base64,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"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    resData.info;
  const time = resData.info.sla.slaString;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          cloudinaryImageId
        }
      ></img>
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{time}</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(jsxHeading);
root.render(<AppLayout />);
