import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className=" container-fluid bg">
      <div>
        <nav className="header  container">
          <div className="col-md-6">
            <h3>
              <a href=""> Luxary Shop</a>
            </h3>
          </div>
          <div className="col-md-6  ">
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
