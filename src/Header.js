import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <img className="header_logo" src="/images/goku.jpg" />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_option1">Hello guest1</span>
          <span className="header_option2">Hello guest2</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Hello guest3</span>
          <span className="header_option2">Hello guest4</span>
        </div>

        <div className="header_option">
          <span className="header_option1">Hello guest5</span>
          <span className="header_option2">Hello guest6</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
