import React from 'react';
import NavBar from '../component/Navbar/NavBar'; 
import './LandingPage.css';
import hero from '../Images/hero-logo.png';
import missionImage from '../Images/mission-image.png';
import featureImage1 from '../Images/feature1.png';
import featureImage2 from '../Images/feature2.png';
import featureImage3 from '../Images/feature3.png';
import trustedLogo1 from '../Images/logo-item1.png'; 
import trustedLogo2 from '../Images/logo-item2.png';
import trustedLogo3 from '../Images/logo-item3.png';
import trustedLogo4 from '../Images/logo-item4.png';
import trustedLogo5 from '../Images/logo-item5.png';
import trustedLogo6 from '../Images/logo-item6.png';
import trustedLogo7 from '../Images/logo-item7.png';
import trustedLogo8 from '../Images/logo-item8.png';
import trustedLogo9 from '../Images/logo-item9.png';
import trustedLogo10 from '../Images/logo-item10.png';
import trustedLogo11 from '../Images/logo-item11.png';
import trustedLogo12 from '../Images/logo-item12.png';
import trustedLogo13 from '../Images/logo-item13.png';
import trustedLogo14 from '../Images/logo-item14.png';
import trustedLogo15 from '../Images/logo-item15.png';
import trustedLogo16 from '../Images/logo-item16.png';

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
            <section id="features" className="features">
                <h2>Features</h2>
                <div className="feature-item">
                    <div>
                        <h3>AI-Powered Website Idea Validation</h3>
                        <p>This feature allows users to receive instant, data-backed feedback on their ideas without needing to spend days or weeks on manual research.</p>
                    </div>
                    <img src={featureImage1} alt="AI-Powered Website Idea Validation" className="feature-image" />
                </div>
                <div className="feature-item">
                    <div>
                        <h3>Data Collection & Preprocessing</h3>
                        <p>This feature allows users gather updated data and analyze them relying on Natural Language Processing (NLP) by identifying common pain points, desired features, and areas of satisfaction.</p>
                    </div>
                    <img src={featureImage2} alt="Data Collection & Preprocessing" className="feature-image" />
                </div>
                <div className="feature-item">
                    <div>
                        <h3>Machine Learning Model</h3>
                        <p>This feature allows users to benefit from a developed and updated model that predicts the potential of success of the app based on features by analyzing competitors.</p>
                    </div>
                    <img src={featureImage3} alt="Machine Learning Model" className="feature-image" />
                </div>
            </section>
            <section className="trusted-by">
                <h2>Our Platform is Trusted By</h2>
                <div className="logo-slider">
                    <div className="logo-item"><img src={trustedLogo1} alt="Client 1" /></div>
                    <div className="logo-item"><img src={trustedLogo2} alt="Client 2" /></div>
                    <div className="logo-item"><img src={trustedLogo3} alt="Client 3" /></div>
                    <div className="logo-item"><img src={trustedLogo4} alt="Client 4" /></div>
                    <div className="logo-item"><img src={trustedLogo5} alt="Client 5" /></div>
                    <div className="logo-item"><img src={trustedLogo6} alt="Client 6" /></div>
                    <div className="logo-item"><img src={trustedLogo7} alt="Client 7" /></div>
                    <div className="logo-item"><img src={trustedLogo8} alt="Client 8" /></div>
                    <div className="logo-item"><img src={trustedLogo9} alt="Client 9" /></div>
                    <div className="logo-item"><img src={trustedLogo10} alt="Client 10" /></div>
                    <div className="logo-item"><img src={trustedLogo11} alt="Client 11" /></div>
                    <div className="logo-item"><img src={trustedLogo12} alt="Client 12" /></div>
                    <div className="logo-item"><img src={trustedLogo13} alt="Client 13" /></div>
                    <div className="logo-item"><img src={trustedLogo14} alt="Client 14" /></div>
                    <div className="logo-item"><img src={trustedLogo15} alt="Client 15" /></div>
                    <div className="logo-item"><img src={trustedLogo16} alt="Client 16" /></div>
                </div>
            </section>
        </div>
    );
}

export default LandingPage;
