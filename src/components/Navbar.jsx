// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // <-- Make sure this is present

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Port<span>folio</span></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;

