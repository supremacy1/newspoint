import React from 'react';
import '../cssfiles/NavigationBar.css';
//import './cssfiles/NavigationBar.css'; // Import CSS file for styling
import logo1 from '../imge/logo1.jpg'
import asian from '../imge/asian.jpg'
import Slideshow from './slid';
function NavigationBar() {
  return (
    <>
    <nav className="navbar">
      <ul className="nav-list">
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
    {/* <Slideshow /> */}
    {/* <img src={asian} className="App-logo" alt="logo" /> */}
    {/* <img src={logo1} alt='logo' className='logo' /> */}
    <h1 class="color-changing-text">Urgent Sale.U!</h1>
    </>
  );
}

export default NavigationBar;
