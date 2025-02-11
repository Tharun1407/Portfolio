import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Navbar from "./Navbar/Navbar.js";
import Home from "./Pages/Home/Home.js"
import About from "./Pages/About/About.js"
import Projects from "./Pages/Projects/Projects.js"
import Contact from "./Pages/Contact/Contact.js"
import "./App.css"; // Import global styles

function App() {
  return (
    <Router>
      <div className="main-container">
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Home /></div>} />
        <Route path="/about" element={<div><About /></div>} />
        <Route path="/projects" element={<div><Projects /></div>} />
        <Route path="/contact" element={<div><Contact /></div>} />
      </Routes>
      </div>
    </Router>
  );
}

export default App;
