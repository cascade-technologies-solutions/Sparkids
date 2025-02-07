import React, { useState } from "react";
import "../styles/Header1.css";
import logoIcon from "../Assets/logo1.png";

const NewHeader = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prevState) => !prevState); // Toggle navigation state
  };

  return (
    <header className="new-header">
      {/* Hamburger menu */}
      <div className={`hamburger1 ${isNavOpen ? "open" : ""}`} onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Navigation menu */}
      <nav className={`new-nav ${isNavOpen ? "open" : ""}`}>
        <ul className="new-nav-list">
          <li className="new-nav-item">
            <a href="#home" className="new-nav-link">
              <img src={logoIcon} alt="Home Icon" className="new-nav-icon" />
              Home
            </a>
          </li>
          <li className="new-nav-item">
            <a href="#about" className="new-nav-link">
              <img src={logoIcon} alt="About Icon" className="new-nav-icon" />
              About us
            </a>
          </li>
          <li className="new-nav-item">
            <a href="#courses" className="new-nav-link">
              <img src={logoIcon} alt="Courses Icon" className="new-nav-icon" />
              Courses
            </a>
          </li>
          <li className="new-nav-item">
            <a href="#franchise" className="new-nav-link">
              <img src={logoIcon} alt="Franchise Icon" className="new-nav-icon" />
              Franchise
            </a>
          </li>
          <li className="new-nav-item">
            <a href="#careers" className="new-nav-link">
              <img src={logoIcon} alt="Careers Icon" className="new-nav-icon" />
              Careers
            </a>
          </li>
          <li className="new-nav-item">
            <a href="#insights" className="new-nav-link">
              <img src={logoIcon} alt="Insights Icon" className="new-nav-icon" />
              Insights
            </a>
          </li>
        </ul>
        <div className="header1-contact-container">
          <a href="#contact" className="header1-contact-button">
            <img src={logoIcon} alt="Contact Icon" className="new-nav-icon" />
            Contact us
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NewHeader;
