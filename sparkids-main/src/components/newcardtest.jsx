import React from "react";
import "../styles/newcardtest.css";
import courseAge from "../Assets/home-img/course-age.png";
import courseLevel from "../Assets/home-img/course-level.png";
import courseTime from "../Assets/home-img/course-time.png";
import courseLearnMore from "../Assets/home-img/course-learnmore.png";
import vedicMathsImage from "../Assets/home-img/courseimg2.png";
import abacusImage from "../Assets/home-img/courseimg1.png";
import rubiksCubeImage from "../Assets/home-img/courseimg3.png";
import handwritingImage from "../Assets/home-img/courseimg1.png";
import readingImage from "../Assets/home-img/courseimg2.png";

const BoxLayoutCard = ({ image, title, rating, description, age, levels, time }) => {
  return (
    <div className="product-box">
      <img src={image} alt={title} className="product-image" />
      <div className="description-box">
        <h3>
          {title} <span>{rating}</span>
        </h3>
        <p>{description}</p>

        <div className="course-info">
          <span className="info-item">
            <img src={courseAge} alt="Age" className="icon" /> {age}
          </span>
          <span className="info-item">
            <img src={courseLevel} alt="Levels" className="icon" /> {levels}
          </span>
          <span className="info-item">
            <img src={courseTime} alt="Time" className="icon" /> {time}
          </span>
          <span className="info-item1">
            <img className="learn-more" src={courseLearnMore} alt="Learn More" />
            <h2>Learn More</h2>
          </span>
        </div>
      </div>
    </div>
  );
};

const CardsContainer = () => {
  const cardsData = [
    {
      image: abacusImage,
      title: "Abacus",
      rating: "4.9",
      description: "Improve calculation speed and mental math skills",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
    },
    {
      image: vedicMathsImage,
      title: "Vedic Maths",
      rating: "4.9",
      description: "Learn faster and efficient ways of solving complex problems",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
    },
    {
      image: rubiksCubeImage,
      title: "Rubik's Cube",
      rating: "4.9",
      description: "Enhance problem-solving and critical thinking",
      age: "Age 12+",
      levels: "2 Levels",
      time: "6 Months",
    },
    {
        image: rubiksCubeImage,
        title: "Rubik's Cube",
        rating: "4.9",
        description: "Enhance problem-solving and critical thinking",
        age: "Age 7+",
        levels: "2 Levels",
        time: "4 Months",
      },
      {
        image: handwritingImage, // Replace with the actual path to the handwriting image
        title: "Handwriting",
        rating: "4.9",
        description: "Master beautiful handwriting techniques",
        age: "Age 4+",
        levels: "3 Levels",
        time: "9 Months",
      },
      {
        image: readingImage, // Replace with the actual path to the reading image
        title: "Reading",
        rating: "4.9",
        description: "Strengthen language and reading comprehension skills",
        age: "Age 3+",
        levels: "2 Levels",
        time: "6 Months",
      },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <BoxLayoutCard
          key={index}
          image={card.image}
          title={card.title}
          rating={card.rating}
          description={card.description}
          age={card.age}
          levels={card.levels}
          time={card.time}
        />
      ))}
    </div>
  );
};

export default CardsContainer;
