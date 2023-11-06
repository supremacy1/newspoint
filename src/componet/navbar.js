import React, { useState } from "react";
// import './navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEnvelope, faHouse, faFutbol,faWallet, faPlus, faXmark, faBars, faPhone, faBook, faWifi3, faTv,faLightbulb, faLocationDot,faUser, faUserCircle, faBell,faHeadset } from '@fortawesome/free-solid-svg-icons';
import Uilcircle from '@iconscout/react-unicons/icons/uil-react'
import { Link} from 'react-router-dom';

import '../cssfiles/navbar.css';
import st from '../imge/st.png'
import back from '../imge/back.JPG'
import asian from '../imge/asian.jpg'
import ware from '../imge/warehouse.jpeg'
import down from '../imge/download.jpeg'
import {  faFutbol, faXmark, faBars, faTelevision,  } from '@fortawesome/free-solid-svg-icons';
import Sport from "./sport";



const Navbar = (Props) => {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };




    return(
        <>
        <div className="body">
        <div className="container1">
        
   
            <div className="navbar">      
            <h5>NewsPoint</h5>
            </div>
             <div className="menu-icon" onClick={toggleMenu} >
                    <FontAwesomeIcon icon={!showMenu ?  faBars : faXmark} /></div>
           
      {showMenu && (
        <nav>
          <ul>
          <Link to='/sport' className="nav-links"><li><FontAwesomeIcon icon={faFutbol} />Sport</li>
                </Link>
                <Link to="/tech" className="nav-links">
                    <li><FontAwesomeIcon icon={faTelevision} /> Tech</li>
                </Link>
                <Link to="/entertainment" className="nav-links">
                    <li><FontAwesomeIcon icon={faTelevision} />Entertainment</li>
                </Link>
          </ul>
        </nav>
        
      )}
            <div className="next">
            <h6>Help/<br></br>
            support</h6> 
        </div>
        </div>
        
        <div className="container2">
                <img src={asian} className="App-logo" alt="logo" />
                <div className="find">
        <h1>BREAKING NEWS</h1>
        <h6>An asian enginner<br></br>
            accendintally broke his leg while woking on a ridge </h6> 
        </div>
        </div><br></br>

        <div className="contents">
        <img src={ware} className="App-logo" alt="logo" />
        <div className="fins">
        <p>Expert in warehouse<br></br>
            have gave warning concening exposing container</p> 
        
         </div>
        </div><br></br>
        <div className="contents">
        <img src={down} className="App-logo" alt="logo" />
        <div className="fins">
        <p>Top native attires accrose the country<br></br>
            we have the best design to male you look outstanding</p> 
       
        </div>
        </div><br></br>
        <div className="contents">
        <img src={back} className="App-logo" alt="logo" />
        <div className="fins">
        <p>House opening<br></br>
            a beautiful House opening in Owerri gone bloddy</p> 
        </div>
        </div>
        <div className="flex">
            <h3>Contact us</h3><br></br>
            <h3>Follow us</h3><br></br>
            <h3>Visit us</h3><br></br>
        </div>
        </div>
    
         </>
    )
}
export default Navbar;