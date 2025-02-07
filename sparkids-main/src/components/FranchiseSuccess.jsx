
import React, { useState } from "react";
import "../styles/franchisesuccess.css";
import franchisesuccess1 from "../Assets/franchise-img/franchisesuccess1.png";

const Slider = () => {
  const slides = [
    {
      image: franchisesuccess1,
      content: (
        <p>
            “ Id urna, nisl, ut quam. Diam suspendisse <br/>fringilla quam 
            arcu mattis est velit in. Nibh in<br/> purus sit convallis
             phasellus ut. At vel erat<br/> ultricies commodo. Neque
              suspendisse a <br/>habitasse commodo. ”
              <br/><br/>
              <span>
              Marie Poirot, <br/>
              Bigapp</span>
        </p>
      ),
    },
    {
      image: franchisesuccess1,
      content: (
        <p>
            “ Id urna, nisl, ut quam. Diam suspendisse <br/>fringilla quam 
            arcu mattis est velit in. Nibh in<br/> purus sit convallis
             phasellus ut. At vel erat<br/> ultricies commodo. Neque
              suspendisse a <br/>habitasse commodo. ”
              <br/><br/>
              <span>
              Marie Poirot, <br/>
              Bigapp</span>
        </p>
      ),
    },
    {
      image: franchisesuccess1,
      content: (
        <p>
            “ Id urna, nisl, ut quam. Diam suspendisse <br/>fringilla quam 
            arcu mattis est velit in. Nibh in<br/> purus sit convallis
             phasellus ut. At vel erat<br/> ultricies commodo. Neque
              suspendisse a <br/>habitasse commodo. ”
              <br/><br/>
              <span>
              Marie Poirot, <br/>
              Bigapp</span>
        </p>
      ),
    },
    {
      image: franchisesuccess1,
      content: (
        <p>
            “ Id urna, nisl, ut quam. Diam suspendisse <br/>fringilla quam 
            arcu mattis est velit in. Nibh in<br/> purus sit convallis
             phasellus ut. At vel erat<br/> ultricies commodo. Neque
              suspendisse a <br/>habitasse commodo. ”
              <br/><br/>
              <span>
              Marie Poirot, <br/>
              Bigapp</span>
        </p>
      ),
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

 
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider-container">
      <div className="slider">
        <div
          className="slider-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 1280}px)`, 
          }}
        >
          {slides.map((slide, index) => (
            <div className="slider-item" key={index}>
              <div className="image-container">
                <img src={slide.image} alt={`Slide ${index + 1}`} />
              </div>
              <div className="content-container">
                <div className="text-content">
                
                  <h2> Success Stories</h2>
                  <p>{slide.content}</p>
                </div>
                <div className="dots-container">
                  {slides.map((_, dotIndex) => (
                    <div
                      key={dotIndex}
                      className={`dot ${dotIndex === currentIndex ? "active" : ""}`}
                      onClick={() => setCurrentIndex(dotIndex)}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="slider-button prev"
        onClick={handlePrev}
        disabled={currentIndex === 0}
      >
        ◀
      </button>
      <button
        className="slider-button next"
        onClick={handleNext}
        disabled={currentIndex === slides.length - 1}
      >
        ▶
      </button>
    </div>
  );
};

export default Slider;
