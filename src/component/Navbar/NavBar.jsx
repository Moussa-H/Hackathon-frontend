// src/components/NavBar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logo from "../../Images/Logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="navbar-container">
      <nav>
        <div className="logo-and-name">
          <img src={logo} alt="App Ricot Logo" />
          <span>App Ricot</span>
        </div>
        <button className="menu-toggle" onClick={toggleMenu}>
          &#9776;
        </button>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li>
            <Link to="/features">Features</Link>
          </li>
          <li>
            <Link to="/pricing">Pricing</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/faqs">FAQs</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
        <div className={`auth-links ${menuOpen ? "open" : ""}`}>
          <Link to="/login">Login</Link>
          <Link to="/signup" className="signup-btn">
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
