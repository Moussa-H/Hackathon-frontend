import React from 'react';
import './NavBar.css'; 
import logo from '../../Images/Logo.png'


function NavBar() {
    return (
      <div className="navbar-container"> 
        <nav>
          <div className="logo-and-name">
            <img src={logo} alt="App Ricot Logo" />
            <span>App Ricot</span>
          </div>
          <ul className="nav-links">
            <li><a href="#features">Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#dashboard">Dashboard</a></li>
            <li><a href="#faqs">FAQs</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
          <div className="auth-links">
            <a href="#login">Login</a>
            <a href="#signup" className="signup-btn">Sign Up</a>
          </div>
        </nav>
      </div>
    );
  }

export default NavBar;
