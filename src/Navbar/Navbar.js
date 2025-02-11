import React from "react";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {

    const scrollToSection = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      };
    

    return (
        <nav className="navbar">
        <div className="logo">My Portfolio</div>
        <ul className="nav-links">
            <li><button className="nav-button" onClick={() => scrollToSection("home")}>Home</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection("about")}>About</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection("projects")}>Projects</button></li>
            <li><button className="nav-button" onClick={() => scrollToSection("contact")}>Contact</button></li>
        </ul>
        </nav>
    );
};

export default Navbar;
