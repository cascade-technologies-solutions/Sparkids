import React from 'react';
import '../styles/sight.css';
import { Link } from "react-router-dom";
import sight1 from '../Assets/home-img/image1.png';
import sight2 from '../Assets/home-img/image2.png';
import sight3 from '../Assets/home-img/image3.png';
import sight4 from '../Assets/home-img/image4.png';
import sight5 from '../Assets/home-img/image5.png';
import sight6 from '../Assets/home-img/image6.png';
import sight7 from '../Assets/home-img/image7.png';
import sight8 from '../Assets/home-img/image8.png';
import sight9 from '../Assets/home-img/image9.png';
import sight10 from '../Assets/home-img/image10.png';

const sights = () => {
  return (
    <div className="insights-section">
      {/* Left Content Section */}
      <div className="insights-content">
        <h3 className="insights-heading">Insights</h3>
        <h1 className="insights-title">Why <br/>Brave Sparkids Academy?</h1>
        <p className="insights-description">
          At Brave Sparkkids Academy, we believe<br/> every child deserves the opportunity to<br/> shine.
        </p>
        <ul className="insights-list">
          <li>Engaging and innovative learning methods.</li>
          <li>Certified trainers with years of experience.</li>
          <li>Supportive and nurturing environment.</li>
        </ul>
        <Link to ="/insight" className="insights-button">Explore Gallery</Link>
      </div>

      {/* Right Images Section */}
      <div className="images-grid">
        <img src={sight1} alt="Gallery Image 1" />
        <img src={sight2} alt="Gallery Image 2" />
        <img src={sight3} alt="Gallery Image 3" />
        <img src={sight4} alt="Gallery Image 4" />
        <img src={sight5} alt="Gallery Image 5" />
        <img src={sight6} alt="Gallery Image 6" />
        <img src={sight7} alt="Gallery Image 7" />
        <img src={sight8} alt="Gallery Image 8" />
        <img src={sight9} alt="Gallery Image 9" />
        <img src={sight10} alt="Gallery Image 10" />
      </div>
    </div>
  );
};

export default sights;
