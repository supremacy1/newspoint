import React from 'react';
//import './cssfiles/NavigationBar.css'; // Import CSS file for styling

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
