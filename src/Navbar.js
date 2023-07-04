import React from 'react';
//importing the navbar.css from same folder
import './Navbar.css';

function Navbar() {
  return (
    // use a nav tag and make an unordered list with different list tags. You can change the href tags later as per your preference.
    // Remember to use className instead of class because JSX doesnt recognize class as a property.  
    // Wrap it in a single component navbar. 
    <nav className="navbar">
      <ul>
        <li><a href="#header">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
