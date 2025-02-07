import React, { useState } from "react";
import "../styles/hometestimonials.css";
import testimonial1 from "../Assets/home-img/testimonial1.png";
import testimonialcomma from "../Assets/home-img/testimonialcomma.png";
const cardsData = [
  {
    id: 1,
    content:
    (
      <p>
        "Brave Sparkids Academy has <br /> been a game-changer for my <br/>child". With completing Rubik's Cube <br/> 4 months programs.
        
      </p>
    ),
    author: "Finlay Kirk",
    rating: 5,
    image: testimonial1,
    topImage: testimonialcomma, 
  },
  {
    id: 2,
    content:(<p>
      "Enrolling my child at Brave <br/>SparkKids Academy was one of the,<br/> best decisions I've ever made."
   </p>
       ) ,
    author: "Dannette P. Cervantes",
    rating: 5,
    image:  testimonial1,
    topImage:  testimonialcomma, 
  },
  {
    id: 3,
    content:(<p>
      "Brave SparkKids Academy has <br/> been a game-changer for my <br/>child", With completing Rubik's Cube <br/> 4 months program.
    </p> 
    ),
      author: "Clara R. Altman",
    rating: 5,
    image: testimonial1,
    topImage:  testimonialcomma, 
  },
  {
    id: 4,
    content:(<p>
      Amazing experience at Brave<br/> SparkKids Academy! My child has <br/>gained so much confidence.
    </p>
    ),
      author: "James  Carter",
    rating: 5,
    image:  testimonial1,
    topImage: testimonialcomma, 
  },
  {
    id: 5,
    content:(<p>

      Brave SparkKids Academy<br/> offers amazing learning programs, <br/>and the teachers are fantastic.
    </p>  
    ),
      author: "Emily R.  Brooks",
    rating: 5,
    image:  testimonial1,
    topImage:  testimonialcomma, 
  },
  {
    id: 6,
    content:
    (<p>

      Brave SparkKids Academy<br/> offers amazing learning programs, <br/>and the teachers are fantastic.
    </p>  
    ),
    author: "Lucas  Young",
    rating: 5,
    image: testimonial1,
    topImage:  testimonialcomma, 
  },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? cardsData.length - 3 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cardsData.length - 3 ? 0 : prevIndex + 1
    );
  };

  return (
<section className="testimonial">
      < div className="testimonial-text">
    <h2>Testimonials</h2>
    <h3>What Parents say</h3>
   <p>
  Various versions have evolved over the years, sometimes by accident,
     </p>
</div>
    <div className="carousel-container">
      <button
        className={`arrow-button left-arrow ${
          currentIndex === 0 ? "disabled" : "highlighted"
        }`}
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ◀
      </button>
      <div className="carousel">
        {cardsData.slice(currentIndex, currentIndex + 3).map((card) => (
          <div className="testimonialcard" key={card.id}>
            <div className="top-image">
              <img src={card.topImage} alt="comma" />
            </div>
            <div className="testimonialcard-content">
              <div className="quote-icon"></div>
              <p>{card.content}</p>
              <div className="author-section">
                <img
                  src={card.image}
                  alt={card.author}
                  className="author-image"
                />
                <h4>{card.author}</h4>
              </div>
              <div className="rating">
                {"⭐".repeat(card.rating)}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className={`arrow-button right-arrow ${
          currentIndex === cardsData.length - 3 ? "disabled" : ""
        }`}
        onClick={handleNext}
        disabled={currentIndex === cardsData.length - 3}
      >
        ▶
      </button>
      <div className="dots">
        {Array.from({ length: 4 }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
    </section>
  );
};

export default Carousel;