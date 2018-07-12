import React from "react";

const Header = () => (
  <nav>
    <div className="nav-wrapper">
      <div className="left">MY AWESOME SHOP</div>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {" "}
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Bag</li>
      </ul>
    </div>
  </nav>
);

export default Header;
