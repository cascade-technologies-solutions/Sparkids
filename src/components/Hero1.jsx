
import { Link } from "react-router-dom";
import React from 'react';
import person from '../Assets/home-img/person.png';
import person1 from '../Assets/home-img/person1.png';
import person2 from '../Assets/home-img/person2.png';
import person3 from '../Assets/home-img/person3.png';
import person4 from '../Assets/home-img/person4.png';
import brainleft from '../Assets/home-img/brain-img/brainleft.png';
import brainright from '../Assets/home-img/brain-img/brainright.png';
import bulb from '../Assets/home-img/brain-img/bulb.png';
import pencil from '../Assets/home-img/brain-img/pencil.png';
import puzzle from '../Assets/home-img/brain-img/puzzle.png';
import puzzle2 from '../Assets/home-img/brain-img/puzzle2.png';
import symbol from '../Assets/home-img/brain-img/symbol.png';
import gear from '../Assets/home-img/brain-img/gear.png';
import '../styles/Hero1.css';
import watermark from '../Assets/home-img/watermark.png';
import logo from "../Assets/home-img/logo.png";
import logoIcon from "../Assets/logo1.png";

const Hero1 = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
      <div className="header1-logo">
            <img src={logo} alt="Logo" className="header1-logo-icon" />
            </div>
        <h1 className="hero1-heading">Empower your <br />
        <span>Child's Mind</span>
        </h1>
        <p className="hero1-subtitle">With Brave Sparkids Academy</p>
        <p className="hero1-description">
          Unlock your child’s potential with programs designed <br /> to
          sharpen skills, foster creativity, and <br /> nurture lifelong success.
        </p>
        <div className="hero-buttons">
        <Link to="/courses" className="explore-btn1">Explore Courses</Link>
        <Link to="/franchise"  className="opportunity-btn1 glow">Get Franchise</Link>
        {/* <a href="#contact" className="opportunity-btn1 glow">
              <img src={logoIcon} alt="Contact Icon" className="new-nav-icon" />
              Get Franchise
            </a> */}
        </div>
        <div className="hero-stats">
          <div className="stats-images">
            <img src={person} alt="Student 1" />
            <img src={person1} alt="Student 2" />
            <img src={person2} alt="Student 3" />
            <img src={person3} alt="Student 4" />
            <img src={person4} alt="Student 5" />
          </div>
          <p className="stats-text">
            <h1 className="stats-testi">9000+ Students <br /><span className="highlight"> have started their studies </span> </h1>
          </p>
        </div>
        <div className="opportunity-note">
      <h1>
        More than <span className="note-highlight">50+</span> opportunities <br /> partner with us
      </h1>
    </div>

  </div>
      <div className="hero-image">
  {/* Brain Image and Icons */}
  <div className="brain-layout">
    <img src={gear} alt="gear Icon" className="brain-icon gear" />
    {/* Icons placed around the brain */}
    <img src={puzzle} alt="Puzzle Icon" className="brain-icon puzzle1" />
    <img src={bulb} alt="Bulb Icon" className="brain-icon bulb" />
    <img src={symbol} alt="Pencil Icon" className="brain-icon symbol" />
    <img src={puzzle2} alt="Puzzle Icon 2" className="brain-icon puzzle2" />
    <img src={pencil} alt="Pencil Icon 2" className="brain-icon pencil" />
    <img src={brainleft} alt="Left Brain" className="brain-left" />
    <img src={brainright} alt="Right Brain" className="brain-right" />
  </div>
      {/* Image Section */}
      <div className="image-partner">
      <img src={watermark} alt="Partner Image" className="partner-image" />
    </div>
</div>

    </section>
  );
};

export default Hero1;
