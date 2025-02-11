import React from "react";
import About from "../About/About.js";
import Projects from "../Projects/Projects.js"
import Contact from "../Contact/Contact.js"
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
        <section id = "home" className="header">
            <h1>Hello, I'm Tharun Bheesetty</h1>
            <h2>🚀 Full Stack Developer | Crafting Scalable & Modern Web Solutions</h2>
            <p>Passionate about building dynamic, user-friendly web applications that blend innovation with performance.</p>
            <a href="/resume.pdf" download="Tharun_Bheesetty_Resume.pdf" className="btn">Download Resume</a>
        </section>
        <section id = "about" className="about-container">
            <About/>
        </section>
        <section  id = "projects" className="projects-container">
            <Projects/>
        </section>
        <section id = "contact">
            <Contact/>
        </section>
        
    </div>
    
  );
};

export default Home;
