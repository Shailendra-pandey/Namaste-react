import { useState } from "react";
import { Logo } from "../utils/constants";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={Logo}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button
            className="login"
            onClick={() =>
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login")
            }
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
