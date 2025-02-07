import React from "react";
import "../styles/ContactBranches.css";
import media1 from "../Assets/contact-img/media1.png";
import media2 from "../Assets/contact-img/media2.png";
import media3 from "../Assets/contact-img/media3.png";

const Branches = () => {
  return (
    <div className="branches-container">
      <h2 className="branches-heading">All available branches</h2>
      <div className="branches-row">
        <div className="branch-card">
          <h3>Hubli, Vidya Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093785!2d144.96305791531665!3d-37.81410797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b7b78a9b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635828576584!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Hubli Map"
          ></iframe>
          <p>Description</p>
        </div>
        <div className="branch-card">
          <h3>Bangalore, Majestic Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093785!2d144.96305791531665!3d-37.81410797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b7b78a9b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635828576584!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Bangalore Map"
          ></iframe>
          <p>Description</p>
        </div>
        <div className="branch-card">
          <h3>Gulbarga, RT Nagar</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093785!2d144.96305791531665!3d-37.81410797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b7b78a9b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635828576584!5m2!1sen!2sau"
            width="100%"
            height="200"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Gulbarga Map"
          ></iframe>
          <p>Description</p>
        </div>
      </div>

      <div className="contact-social-section">
  <h2 className="contact-social-section-heading">Follow Us for Updates and Inspiring Stories!</h2>
  <div className="contact-social-icons">
    <a href="#facebook" className="social-link">
      <div className="icon-container">
        <i className="fab fa-facebook-f"></i>
      </div>
      <span>Facebook</span>
    </a>
    <a href="#linkedin" className="social-link">
      <div className="icon-container">
        <i className="fab fa-linkedin-in"></i>
      </div>
      <span>LinkedIn</span>
    </a>
    <a href="#instagram" className="social-link">
      <div className="icon-container">
        <i className="fab fa-instagram"></i>
      </div>
      <span>Instagram</span>
    </a>
  </div>
</div>


      <div className="media-section">
        <h2 className="media-section-heading ">Watch our social media posts</h2>
        <p className="media-section-redirect">
          <a href="#instagram">redirect Instagram &gt;</a>
        </p>
        <div className="media-gallery">
        <img src={media1} alt="post1" />
        <img src={media2} alt="post2" />
        <img src={media3} alt="post3" />
        <img src={media2} alt="post4" />
                 </div>
        <p className="contact-footer-text">
          Every great mind was once a curious child. Let’s spark that curiosity together!
        </p>
      </div>
    </div> 
  );
};

export default Branches;
