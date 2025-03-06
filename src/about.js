import React from "react";
import "./aboutus.css"; // Import the CSS fil
import { useNavigate } from "react-router-dom";

export default function AboutUs() {
  const navigate = useNavigate()
  const goTocontact = () => {
    navigate("/contact");
  };
  return (
    <div className="about-container">
        <h2>About Us</h2>
        <img src="" alt="" />
      <div className="about-content">
        <p>
          We are a leading provider of ACP Elevation and Facade Solutions , delivering 
          high-quality, durable, and aesthetically appealing designs for commercial and 
          residential buildings. Our team specializes in transforming spaces with modern 
          architectural paneling.
        </p>


        <div className="contact-button">
          <a href="/contact" onClick={goTocontact}>GET IN TOUCH</a>
        </div>
      </div>
    </div>
  );
}
