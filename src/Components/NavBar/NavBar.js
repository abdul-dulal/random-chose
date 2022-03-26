import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <div>
        <nav className="header">
          <h3>
            <a href=""> Luxary Shop</a>
          </h3>
          <div>
            <a href="/shop">Shop</a>
            <a href="/About">About</a>
            <a href="/Chaeck Out">Chaeck Out</a>
            <a href="/Contact">Contact</a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;