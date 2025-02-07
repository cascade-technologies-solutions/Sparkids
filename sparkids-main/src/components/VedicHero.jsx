import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/commoncourse.css"; 
import coursevedic from "../Assets/courses-img/coursevedic.png";
import courseage from "../Assets/home-img/course-age.png";
import coursetime from "../Assets/home-img/course-time.png";
import courselevel from "../Assets/home-img/course-level.png";

const VedicHero = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Determine styles based on screen width
  const getImageStyles = () => {
    if (screenWidth === 768) {
      return { width: "211px", height: "277px" };
    } else if (screenWidth === 425) {
      return { width: "313px", height: "387px" };
    } else if (screenWidth === 375) {
      return { width: "325px", height: "453px" };
    } else if (screenWidth === 320) {
      return { width: "299px", height: "392px" };
    } else {
      return { width: "400px", height: "526px" }; // Default styles
    }
  };

  return (
    <div className="maincourse-container">
      <div className="maincourse-content">
        <p className="pagename">
          <a href="/">Home</a> | <Link to="/courses"> Course </Link> | 
          <span><Link to="/vedic"> Vedic Maths</Link></span>
        </p>
        <div className="maincourse-section">
          {/* Left Content Section */}
          <div className="maincourse-content">
            <h2 className="maincourse-heading">Vedic Maths</h2>
            <ul className="maincourse-points">
              <p className="maincourse-points-wholelist">
                <div className="maincourse-points-list">
                  <img src={courselevel} alt="point" />
                  <span>Level :</span> 2 Levels
                </div>
                <br />
                <div className="maincourse-points-list">
                  <img src={courseage} alt="point" />
                  <span> Age : </span> 12 years +
                </div>
                <br />
                <div className="maincourse-points-list">
                  <img src={coursetime} alt="point" />
                  <span>Duration</span> 6 Months
                </div>
                <br /><br />
                <div className="maincourse-subcontent">
                  <li>Review : ⭐⭐⭐⭐⭐ 4.9</li>
                  <li>Held Across <span>20+</span> Franchises</li>
                  <li>Actively <span>3000+</span> students learning</li>
                </div>
              </p>
            </ul>
            <a href="#know-more" className="maincourse-button">
              Enroll Now
            </a>
          </div>

          {/* Right Image Section */}
          <div className="maincourse-image">
            <img
              src={coursevedic}
              alt="vedic Course"
              style={{
                ...getImageStyles(),
                marginTop: "0px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VedicHero;
