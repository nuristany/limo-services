import React from "react";
import logo from "./images/Limo-Services.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="nav-title">
        <h1>limousine services</h1>
      </div>

      <div className="nav-items">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Fleet</li>
            <li>Contacts</li>
            <li>About Us</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
