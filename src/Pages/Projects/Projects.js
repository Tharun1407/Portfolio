import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';  // Import the CSS file for styling

const projects = [
    {
      name: "Core365",
      description: "Core 365 is a comprehensive Enterprise Resource Planning (ERP) platform designed to cater to industries such as home automation, security, pest control, renewable energy, and roofing. It offers a wide range of modules including Procurement 365, HR 365, Finance 365, and more, each tailored to streamline various business processes.",
      link: "https://www.core365.app/",
      realTime: true 
    },
    {
      name: "CCBP TimeLine",
      description: "A React-based app that displays a timeline of Courses and Projects using react-chrono. Course cards show the title, description, duration (with ⏳ icon), and tags. Project cards display the title, description, image, duration (📅 icon), and a Visit Link to view the project. The app provides a smooth, interactive experience with a clean UI and easy navigation.",
      link: "https://ccbptymlyn1407.ccbp.tech",
      realTime: false
    },
    {
      name: "NxtWatch",
      description: "Implemented an intuitive user interface with multiple pages, including login, Home, Trending, Gaming, Saved videos, making use of react components, props, state management, and event handling to ensure a seamless user experience. Use the below credentials for login, UserName : rahul, password : rahul@2021",
      link: "https://nxtwatch1407.ccbp.tech/",
      realTime: false
    }
  ];
  
  const Projects = () => {
    return (
      <div>
        <h2 className="projects-heading">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`project-card ${project.realTime ? "real-time" : ""}`}
            >
              {project.realTime && <span className="real-time-badge">Live Project</span>}
              <h3 className="project-title">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;
  