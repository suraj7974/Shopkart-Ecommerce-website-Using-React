import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();
  const handleAuthentication = () => {
     if (user) {
      auth.signOut();
     }
  }

  return (
    <div className="header">
      <Link to="/">
        <img className="header_logo" src="./images/logo.png" />
      </Link>
      <div className="header_search">
        <SearchIcon className="header_searchIcon" />
        <input className="header_searchInput" type="text"  placeholder="Explore more" />
      </div>
      <div className="header_nav">
        <Link to={!user && "/login"} style={{ textDecoration: 'none' }}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_option1">Hi { user ? user.email : 'Guest'   } </span>
            <span className="header_option2">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_option1">Returns</span>
          <span className="header_option2">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_option1"> Your</span>
          <span className="header_option2"> Prime</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header_optionBasket">
            <ShoppingBasketIcon id="basket-icon" />
            <span className="herder_option2 header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
