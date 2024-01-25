import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src="https://wallpapercave.com/wp/wp7771255.png"
        />
      </Link>
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello guest</span>
          <span className="header_option2">Sign In</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option1"> Your</span>
          <span className="header_option2"> Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon />
            <span className="herder_option2 header_basketCount">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
