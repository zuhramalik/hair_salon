// Navbar.js
import React from 'react';
import './Navbar.css';
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
        <li><a href="#home">HOME</a></li>
        <li><a href="#about">ABOUT</a></li>
        <li><a href="#services">SERVICES</a></li>
        <li><a href="#pages">PAGES</a></li>
        <li><a href="#blog">BLOG</a></li>
        <li><a href="#contact">CONTACT</a></li>
      </ul>
      <button className="appointment-btn">MAKE APPOINTMENT</button>
    </nav>
  );
};

export default Navbar;
