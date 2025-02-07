
import React, { useState } from "react";
import point from "../Assets/courses-img/checkpoint.png";
import "../styles/AbacusOverview.css";

const VedicOverview = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [expandedSection, setExpandedSection] = useState(null); // For dropdown in Levels tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="page-container">
      {/* Tab Navigation (outside the box) */}
      <div className="tab-header">
        {["Overview", "Levels", "Details", "Opportunities"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${
              activeTab.toLowerCase() === tab.toLowerCase() ? "active" : ""
            }`}
            onClick={() => handleTabClick(tab.toLowerCase())}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Box with Shadow for Content */}
      <div className="content-card">
        {activeTab === "overview" && (
          <div className="overview-content">
            <h2 className="main-title">What is Vedic Mathematics?</h2>
            <p className="overview-description">
            Vedic Mathematics is an ancient Indian approach to mathematics, originating from the Atharvaveda, one of the oldest sacred texts. This timeless system, reintroduced by Hindu scholars, comprises 16 powerful sutras or formulas.            </p>
            <h3 className="sub-title">
            Master Ancient Techniques for Modern Minds
            </h3>
            <p className="overview-description">
            Discover how Vedic Maths can revolutionize mental calculations with techniques that are simple, creative, and efficient.
            </p>
            {/* <p className="overview-description">
              This course isn’t just about calculations; it’s a journey of
              holistic brain development. The Abacus program stimulates both
              sides of the brain, helping children improve cognitive abilities
              through visualization, memory, and concentration. Each level
              progressively builds upon skills, from simple calculations to
              advanced memory techniques.
            </p> */}
            <ul className="benefits-list">
              <li>
                <img src={point} alt="Checkpoint" /> Unlock the ability to perform lightning-fast calculations.
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Reduce dependency on calculators and build confidence.
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Develop analytical thinking and a structured approach to math.
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Strengthen foundational math skills, making learning fun and engaging.
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Boosts intellectual development and problem-solving skills
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Enhances speed and accuracy, perfect for competitive exams
              </li>
              <li>
                <img src={point} alt="Checkpoint" /> Offers versatility in tackling arithmetic, algebra, geometry, calculus, and computing problems
              </li>
            </ul>
          </div>
        )}
        {activeTab === "levels" && (
  <div className="levels-content">
    {/* Little Star Abacus */}
    <div className="course-dropdown-item">
      <div
        className="dropdown-header"
        onClick={() => toggleSection("littleStar")}
        style={{
          color: expandedSection === "littleStar" ? "var(--primary-grey)" : "var(--primary-orange)",
          fontWeight: "bold",
        }}
      >
        <h3>1. Aaramba Level (3 Months)</h3>
        <span>{expandedSection === "littleStar" ? "-" : "+"}</span>
      </div>
      {expandedSection === "littleStar" && (
        <div className="dropdown-content">
          <p className="dropdown-course-info">
            <span>Eligibility:</span> Students aged 12 and above.
          </p>
          <p className="dropdown-course-info">
            <span>Duration:</span> 3 months (Weekly sessions, including assignments and practice exercises) 
          </p>
          <p className="dropdown-course-info">
            <span>Focus:</span> Foundation Learning
          </p>
          <p className="dropdown-description">
          Introducing the basics of Vedic Maths, enabling students to develop a solid foundation in mental arithmetic.
          </p>
          <h4 className="dropdown-subtitle">Key Skills Developed</h4>
          <ul className="benefits-list">
            <li>
              <img src={point} alt="Checkpoint" /> Faster calculations with mental clarity.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Improved focus and concentration.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Enhanced number sense and logical thinking.
            </li>
            <li>
              <img src={point} alt="Checkpoint" /> Reduced dependency on calculators or traditional methods.
            </li>
          </ul>
          <h4 className="dropdown-subtitle">Learning Methodology</h4>
          <p className="dropdown-course-info">
              <span>Hands-On Practice :</span>  Daily exercises to practice core concepts.
            </p>
            <p className="dropdown-course-info">
            <span>Interactive Techniques : </span>
            Fun math puzzles and challenges to engage learners.
            </p>
            <p className="dropdown-course-info">
            <span>Parent Engagement :</span> Regular
              updates to parents on progress and tips for practicing at home.
            </p>
          
        </div>
      )}
    </div>

    {/* The Brain Charger */}

<div className="course-dropdown-item">
  <div
    className="dropdown-header"
    onClick={() => toggleSection("brainCharger")}
    style={{
      color: expandedSection === "brainCharger" ? "var(--primary-grey)" : "var(--primary-orange)",
      fontWeight: "bold",
    }}
  >
    <h3>2. Antalok Level</h3>
    <span>{expandedSection === "brainCharger" ? "-" : "+"}</span>
  </div>
  {expandedSection === "brainCharger" && (
    <div className="dropdown-content">
      <p className="dropdown-course-info">
        <span>Eligibility:</span> 3rd to 10th Grade | Completion of the  Aaramba level
      </p>
      <p className="dropdown-course-info">
        <span>Duration:</span> 3 Months
      </p>
      <p className="dropdown-course-info">
        <span>Focus:</span> Advanced Problem-Solving
      </p>
      <p className="dropdown-description">
      This level builds on the foundation, introducing advanced sutras and techniques for solving complex mathematical problems.
      </p>
      <p className="dropdown-course-info">
        <span>Division shortcuts :</span> Solve division problems faster with mental tricks.
      </p>
      <p className="dropdown-course-info">
        <span>Focus:</span> Advanced Problem-Solving
      </p>
      <p className="dropdown-course-info">
        <span>Multiplication of Large Numbers :</span> Learn line methods and methods for multiplying any number quickly.
      </p>
      <p className="dropdown-course-info">
        <span>Squares and Square Roots :</span>  Develop mental shortcuts for calculating squares and square roots of any number.
      </p>
      <p className="dropdown-course-info">
        <span>Cubes and Cube Roots : </span> Use Vedic sutras to simplify cube and cube root calculations.
      </p>
      <p className="dropdown-course-info">
        <span>Algebraic Applications : </span> Solve algebraic expressions and equations effortlessly.
      </p>
      <p className="dropdown-course-info">
        <span>Calendar Math : </span>  Determine the day of any given date using mental math techniques.
       </p>
    

      <h4 className="dropdown-subtitle">Key Skills Developed</h4>
      <ul className="benefits-list">
        <li>
          <img src={point} alt="Checkpoint" /> Ability to solve complex calculations mentally and efficiently.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Advanced analytical thinking and problem-solving skills.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Confidence in tackling competitive exam problems.
        </li>
        <li>
          <img src={point} alt="Checkpoint" /> Application of math skills in real-world scenarios.
        </li>
      </ul>
              <h4 className="dropdown-subtitle">Learning Methodology</h4>
        <p className="dropdown-course-info">
          <span>Step-by-Step Guidance :</span>  Each advanced sutra is taught with detailed examples and applications.
        </p>
        <p className="dropdown-course-info">
          <span>Hands-on Practice :</span>  Students solve progressively complex problems to master techniques.
        </p>
        <p className="dropdown-course-info">
          <span>Real-Life Applications :</span> Incorporate advanced techniques into school exams, competitive tests, and beyond.
        </p>
        <p className="dropdown-course-info">
          <span>Challenge-Based Learning : </span> Regular updates to parents on progress and tips for practicing at home.
        </p>

    </div>
  )}
</div>
  </div>
)}

        {activeTab === "details" && (
  <div className="details-content">
    <h2 className="main-title">The Science Behind Vedic Mathematics Training</h2>
    <p className="overview-description">
      The Vedic Mathematics program is not just about numbers—it's a scientifically backed
      method designed to enhance cognitive abilities and brain functions. The act
      of bead manipulation stimulates both the left and right hemispheres of the
      brain, fostering neuroplasticity and creating strong neural connections.
      Here's how it works:
    </p>

    <h3 className="sub-title">Brain Activation</h3>
    <ul className="dropdown-course-info">
      <li>
        <span>Left Hemisphere:</span> Handles logical thinking, analytical
        reasoning, and sequential problem-solving, which are essential in
        arithmetic.
      </li>
      <li>
        <span>Right Hemisphere:</span> Focuses on creativity, visualization,
        and holistic thinking, activated by imagining bead movements mentally.
      </li>
    </ul>
    <p className="overview-description">
      The combination of these two functions during Abacus training leads to
      balanced and heightened cognitive abilities.
    </p>

    <h3 className="sub-title">
      Key Skills Enhanced Through Vedic Mathematics Training
    </h3>
    <ul className="key-skills-list">
      <li>
        <span>Visualization:</span> Students learn to visualize the abacus
        beads in their mind, strengthening mental imagery and creative thinking.
        <br />
        <span>Result:</span> They can solve complex calculations without
        physically using the abacus.
      </li>
      <li>
        <span>Memory & Recall:</span> Repeated practice sharpens short-term
        and long-term memory, often leading to photographic memory.
        <br />
        <span>Result:</span> Students excel in academic subjects and recall
        information with ease.
      </li>
      <li>
        <span>Listening Skills:</span> Group exercises and oral tests
        improve auditory processing, helping students respond quickly and
        accurately.
        <br />
        <span>Result:</span> Improved communication and better academic
        performance in oral-based assessments.
      </li>
      <li>
        <span>Speed & Accuracy:</span> The progressive levels focus on
        improving calculation speed while maintaining precision.
        <br />
        <span>Result:</span> Students develop confidence and a competitive
        edge in academics and beyond.
      </li>
    </ul>
  </div>
)}

{activeTab === "opportunities" && (
          <div className="opportunities-content">
            <h2 className="main-title">Long-Term Benefits for Students</h2>
            <h4 className="dropdown-subtitle">1. Academic Excellence </h4>
            <ul className="dropdown-course-info">
              <li>
              Vedic Mathematics  training enhances mathematical abilities, directly improving performance in math and science subjects.
              </li>
              <li>
              Sharpened memory, focus, and speed give students an edge in other subjects as well, like languages and general studies.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">2. Competitive Edge </h4>
            <ul className="dropdown-course-info">
              <li>
              Prepares students for prestigious mental math competitions, such as: <br />
              Vedic Mathematics  Olympiads
                <br/>International Mental Arithmetic Championships
              </li>
              <li>
              Participation in these contests boosts confidence, resilience, and the spirit of healthy competition.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">3. Lifelong Skills </h4>
            <ul className="dropdown-course-info">
              <li>
              The program focuses on skills that extend beyond academics and into every aspect of life, including:
              </li>
              <li>
              Sharpened memory, focus, and speed give students an edge in other subjects as well, like languages and general studies.
              </li>
            </ul>
            <h4 className="dropdown-subtitle">4. Career Preparation </h4>
            <ul className="dropdown-course-info">
              <li>
              Students gain transferable skills that are valuable for future careers, particularly in fields requiring analytical thinking,
               such as engineering, finance, and technology.
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default VedicOverview;
