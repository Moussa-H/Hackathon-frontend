import React from 'react';
import NavBar from '../component/Navbar/NavBar'; 
import './LandingPage.css';
import hero from '../Images/hero-logo.png';
import missionImage from '../Images/mission-image.png';  

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
                <div className="mission-text">
                    <h2>Our Mission</h2>  
                    <p>
                        Our goal is to empower startups and developers by providing them with the tools
                        and insights they need to bring innovative app ideas to life, ensuring success in a
                        competitive market.
                    </p>
                </div>
                <img src={missionImage} alt="Mission Visual" className="mission-image" />
            </section>
            <section className="features">
               
            </section>
        </div>
    );
}

export default LandingPage;
