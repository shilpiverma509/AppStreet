import React from "react";
import { Link } from "react-router-dom";

const HeaderComp = () => {
  const burgerToggle = () => {
    let links = document.querySelector(".narrowLinks");
    if (links.style.display === "block") {
      links.style.display = "none";
    } else {
      links.style.display = "block";
    }
  };

  return (
    <nav>
      <div className="navWide">
        <div className="wideDiv">
          <Link to="/">Home</Link>
          <Link to="#">About</Link>
          <Link to="#">Contact</Link>
          <Link to="#">Bag</Link>
        </div>
      </div>
      <div className="navNarrow">
        <i className="bars icon" onClick={burgerToggle} />
        <div className="narrowLinks">
          <Link to="/" onClick={burgerToggle}>
            Home
          </Link>
          <Link to="#" onClick={burgerToggle}>
            About
          </Link>
          <Link to="#" onClick={burgerToggle}>
            Contact
          </Link>
          <Link to="#" onClick={burgerToggle}>
            Bag
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default HeaderComp;
