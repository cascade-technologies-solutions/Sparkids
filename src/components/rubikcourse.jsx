import React from "react";
import { Link } from "react-router-dom";
import "../styles/rubikcourse.css";
import point from "../Assets/courses-img/checkpoint.png";
import cubeImage from "../Assets/courses-img/rubikcourse.png";

const CubeCourse = () => {
    return (
        <div className="cube-section">
            {/* Left Content Section */}
            <div className="cube-content">
                <h2 className="cube-heading">Rubik's Cube</h2>
                <p className="cube-description">
                    The Rubik's Cube course teaches students how to solve this 3D puzzle in record time, boosting spatial awareness, problem-solving skills, and hand-eye coordination.
                </p>
                <ul className="cube-points">
                    <li>
                        <img src={point} alt="point" />
                        <span>Enhances spatial awareness</span>
                    </li>
                    <li>
                        <img src={point} alt="point" />
                        <span>Strengthens cognitive function</span>
                    </li>
                    <li>
                        <img src={point} alt="point" />
                        <span>Demonstrates perseverance and practice</span>
                    </li>
                </ul>
                <Link to="/rubic" className="cube-button">
                    Know more &gt;
                </Link>
            </div>

            {/* Right Image Section */}
            <div className="cube-image">
                <img src={cubeImage} alt="Rubik's Cube Course" />
            </div>
        </div>
    );
};

export default CubeCourse;
