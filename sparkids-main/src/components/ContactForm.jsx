import React, { useState } from "react";
import "../styles/ContactForm.css";
import { API_BASE_URL } from "../api";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: "",
    message: "",
  });

  const [responseMessage, setResponseMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const dataToSend = new FormData();
      dataToSend.append("fullName", formData.fullName);
      dataToSend.append("phone", formData.phone);
      dataToSend.append("email", formData.email);
      dataToSend.append("reason", formData.reason);
      dataToSend.append("message", formData.message);

      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        body: dataToSend,
      });

      if (response.ok) {
        setResponseMessage("We will get back to you!");
        setTimeout(() => setResponseMessage(""), 3000);
      } else {
        const errorData = await response.text();
        setResponseMessage(errorData || "Failed to submit. Please try again.");
      }
    } catch (error) {
      console.error("Error contacting API:", error);
      setResponseMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-container">
      <div className="contact-row">
        {/* Left side - Form */}
        <div className="contact-form-section">
          <h2 className="contact-heading">Drop us a message</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="fullName"
              placeholder="Full name"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email I’d"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div className="dropdown-container">
              <select
                className="styled-dropdown"
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                required
              >
                <option value="" disabled>
                  I’m Reaching out about
                </option>
                <option value="enroll">Enrolling my child</option>
                <option value="franchise">Franchise opportunities</option>
                <option value="course">Course details</option>
                <option value="general">General Inquiry</option>
              </select>
            </div>
            <textarea
              name="message"
              placeholder="Your message. . ."
              value={formData.message}
              onChange={handleInputChange}
              required
            />
            <button type="submit" className="submit-button">
              Submit your response
            </button>
          </form>
          {responseMessage && <p className="response-message">{responseMessage}</p>}
        </div>

        {/* Right side - Contact Info */}
        <div className="contact-info-section">
          <h2>Contact us directly</h2>
          <p><span>Call:</span> <br /> +91 82170 77217</p>
          <p><span>Email:</span> <br /> example@mail.com</p>
          <p><span>Address:</span> <br />
            Indi Regional Office <br />
            Behind BSNL Tower, Near Mallikarjun Temple, <br />
            Vidya Nagar, Sindagi Road, Indi - 586209
          </p>
          <p><span>Working hours:</span> <br />
            Open Weekly Mon - Friday <br />
            9:00 AM to 5:30 PM
          </p>
          <a href="#map" className="navigate-link">Navigate to head branch</a>
          <div className="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093785!2d144.96305791531665!3d-37.81410797975186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d9b7b78a9b0!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1635828576584!5m2!1sen!2sau"
              width="100%"
              height="300"
              style={{ border: 0, borderRadius: '5px' }}
              allowFullScreen=""
              loading="lazy"
              title="Google Map"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;