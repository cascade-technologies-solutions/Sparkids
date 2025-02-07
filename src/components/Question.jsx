import React from "react";
import "../styles/question.css";
import questionbg from "../Assets/about-img/questionbg.png";
import bgImage from "../Assets/about-img/quesmem.png";
import bgImage2 from "../Assets/about-img/quesmem2.png";
import bgImage3 from "../Assets/about-img/quesmem3.png";
import bgImage4 from "../Assets/about-img/quesmem4.png";
import bgImage5 from "../Assets/about-img/quesmem5.png";
import bgImage6 from "../Assets/about-img/quesmem6.png";

const QuestionSection = () => {
  return (
    <div className="abt-question-section">
      <img src={questionbg} alt="Question background" className="abt-question-bg" />

      <div className="abt-content">
        <div className="abt-bg-overlay">
          <h3 className="abt-heading">Do you still have any questions?</h3>
          <p className="abt-subheading">
            Don't hesitate to leave us your phone number. We will <br/>contact you to
            discuss any questions you may have.
          </p>
          <div className="contact-form">
            <input
              type="text"
              className="phone-input"
              placeholder="Enter your phone number"
            />
            <button className="contact-button">Contact</button>
          </div>
        </div>

        {/* Decorative Images */}
        <div className="abt-decorative-images">
          <img src={bgImage} alt="Decorative 1" className="abt-decorative-image" />
          <img src={bgImage2} alt="Decorative 2" className="abt-decorative-image" />
          <img src={bgImage3} alt="Decorative 3" className="abt-decorative-image" />
          <img src={bgImage4} alt="Decorative 4" className="abt-decorative-image" />
          <img src={bgImage5} alt="Decorative 5" className="abt-decorative-image" />
          <img src={bgImage6} alt="Decorative 6" className="abt-decorative-image" />
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
