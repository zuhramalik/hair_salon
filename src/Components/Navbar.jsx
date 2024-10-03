// Navbar.js
import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import img from "../assets/logo.png"
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={img} alt="Logo" />
        </div>
        <div>
        <h1>HAIR & HAIR </h1>
      </div>
      <ul className="navbar-links">
    <Link to="/"><li>HOME</li></Link>
      <Link to="/About"><li>ABOUT</li></Link>
      <Link to="/Services"><li>SERVICES</li></Link>
      <Link to="/pages"><li>PAGES</li></Link>
      <Link to="/blog"><li>BLOG</li></Link>
      <Link to="/contact"><li>Contact</li></Link>
      <button className="appointment-btn">MAKE APPOINTMENT</button>
      </ul>
    </nav>
  );
};

export default Navbar;
