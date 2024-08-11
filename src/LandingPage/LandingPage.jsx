import React from 'react';
import NavBar from '../component/Navbar/NavBar'; 
import './LandingPage.css';
import hero from '../Images/hero-logo.png'

function LandingPage() {
    return (
      <div className="landing-page-container">
        <NavBar />
        <div className="hero-section">
          <div className="hero-logo">
            <img src={hero} alt="App Ricot Logo" />
          </div>
          <div className="app-ricot">
            App Ric<span className="special-o">o</span>t
          </div>
          <div className="hero-content">
            <p>
              At App Ricot, we help startups and developers turn their app ideas into 
              successful, market-ready products by offering AI-driven insights and 
              comprehensive tools for validation and competitive analysis.
            </p>
          </div>
        </div>
        <section className="mission">
          {/* Content for Mission section */}
        </section>
        <section className="features">
          {/* Content for Features section */}
        </section>
        {/* Add more sections as needed */}
      </div>
    );
  }
  

export default LandingPage;
