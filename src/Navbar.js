import React from "react";
import { Link } from "react-router-dom";
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
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/services'>Services</Link></li>
            <li><Link to='/fleet'>Fleet</Link></li>
            <li><Link to='/contact'>Contacts</Link></li>
            <li><Link to='/about'>About Us</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
