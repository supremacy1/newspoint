import React from 'react';
import '../cssfiles/Footer.css';
import x from '../imge/x.png';
import facebook from '../imge/facebook.png';
import whatsap from '../imge/whatsapp.jpeg'; // Assuming you have your image file in the same directory

function Footer() {
  return (
    <footer className="footer">
      {/* <a href="https://example.com">
        <img src={x} alt="Logo" className="logo" />
        <h7>Facebook</h7>
      </a> */}
      <img src={x} alt="Logo" className="logo" />
    
      {/* <a href="https://example.com">
        <img src={facebook} alt="Logo" className="logo" />
        <h7>Facebook</h7>
      </a> */}
      <img src={facebook} alt="Logo" className="logo" />
       
      {/* <a href="https://example.com">
        <img src={whatsap} alt="Logo" className="logo" />
        <h7>Facebook</h7>
      </a> */}
      <img src={whatsap} alt="Logo" className="logo" />
       
    </footer>
  );
}

export default Footer;
