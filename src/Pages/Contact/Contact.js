import React from "react";
import "./Contact.css";
import { FaEnvelope, FaPhone, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Contact Me</h2>
      <p className="contact-subtext">Let's connect! Feel free to reach out.</p>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <span>tharunbheesetty0728@gmail.com</span>
        </div>

        <div className="contact-item">
          <FaPhone className="contact-icon" />
          <span>+91 7093169049</span>
        </div>
      </div>

      <div className="social-links">
        <a href="https://www.linkedin.com/in/tharun-bheesetty-603560221/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="social-icon" />
        </a>
        <a href="https://github.com/Tharun1407" target="_blank" rel="noopener noreferrer">
          <FaGithub className="social-icon" />
        </a>
        <a href="https://www.instagram.com/tharun_bheesetty/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="social-icon" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
