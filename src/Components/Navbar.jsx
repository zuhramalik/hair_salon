import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import img from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
       
        <Link to="/">
          <img src={img} alt="Logo" />
        </Link>
      </div>
      <div>
        <h1>HAIR & HAIR</h1>
      </div>
      <ul className="navbar-links">
        <Link to="/"><li>HOME</li></Link>
        <Link to="/About"><li>ABOUT</li></Link>
        <Link to="/Services"><li>Services</li></Link>
        <Link to="/blog"><li>BLOG</li></Link>
        <Link to="/contact"><li>Contact</li></Link>
        <button className="appointment-btn">Book an APPOINTMENT</button>
      </ul>
    </nav>
  );
};

export default Navbar;
