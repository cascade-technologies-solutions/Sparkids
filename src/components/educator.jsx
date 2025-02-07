import React from 'react';
import { Link } from "react-router-dom";
import '../styles/educator.css';
import Educators from '../Assets/home-img/educators.png';
import Shape from '../Assets/home-img/edushape.png';

const Educator = () => {
  return (
    <div className="educator-section">
      <div className="educator-content">
        {/* Left Image Section */}
        <div className="educator-image-container">
          <img
            src={Educators} alt="Educators"
            className="educator-image"
          />
        </div>

        {/* Right Text Section */}
        <div className="educator-shape-container">
          <img
            src={Shape} alt="Educators"
            className="educator-shape" />
        <div className="educator-text-container">
          <h3 className="educator-label">Careers</h3>
          <h1 className="educator-heading">
            Sparking Aspiring <br/><span className="highlight-text">Womens to Empower</span>
          </h1>
          <p className="educator-description">
            <h3>Education to transform lives <br/>and create a brighter future.</h3>
          </p>
          <Link to='/careers' className="educator-button">Know more</Link>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Educator;
