import React from "react";
import "../styles/ourstory.css";
import yearIcon1 from "../Assets/about-img/ourstory1.png"; // Add your icon paths
import yearIcon2 from "../Assets/about-img/ourstory2.png";
import yearIcon3 from "../Assets/about-img/ourstory3.png";
import yearIcon4 from "../Assets/about-img/ourstory4.png";

const timelineData = [
  {
    year: "2015",
    content: "Brave SparkKids Academy was established.",
    icon: yearIcon1,
  },
  {
    year: "2018",
    content: "Celebrated 1,000 students enrolled.",
    icon: yearIcon2,
  },
  {
    year: "2020",
    content: "Reached 25 franchise locations, expanding our reach.",
    icon: yearIcon3,
  },
  {
    year: "2024",
    content: "Surpassed 9,000+ students and 50+ franchise partners.",
    icon: yearIcon4,
  },
];

const OurStory = () => {
  return (
    <section>   
      <div className="aboutus-ourstory">
     <div classname="aboutus-ourstory-conatiner"> 
    <div className="aboutus-ourstory-text">
      <h2>Our Story</h2>
      <h3>Cultivating Bright Futures</h3>
      <p>
        Founded in 2015, Brave SparKids Academy started with a vision to bring 
        quality education to young learners<br/> across Karnataka. Over the years,
        we’ve grown into a network of over 50 franchise locations, impacting
        more
        than 9,000 students with our carefully crafted educational
        programs.
      </p>
      </div>
            <div className="timeline">
        {timelineData.map((item) => (
            <div className="timeline-card" key={item.year}>
            <img src={item.icon} alt={`Icon for ${item.year}`} className="timeline-icon" />
            <h3>{item.year}</h3>
            <p>{item.content}</p>
            </div>
        ))}
        </div>
</div>
</div>
</section>
  );
};

export default OurStory;
