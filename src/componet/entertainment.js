import React, { useState, useEffect } from "react";
import axios from "axios";
// import './navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faFutbol,faWallet, faPlus, faXmark, faBars, faPhone, faBook, faWifi3, faTv,faLightbulb, faLocationDot,faUser, faUserCircle, faBell,faHeadset } from '@fortawesome/free-solid-svg-icons';
import Uilcircle from '@iconscout/react-unicons/icons/uil-react'

import '../cssfiles/navbar.css';
import st from '../imge/st.png'
import back from '../imge/back.JPG'
import asian from '../imge/asian.jpg'
import ware from '../imge/warehouse.jpeg'
import down from '../imge/download.jpeg'



const Entertainment = (Props) => {
const[name, setName] = useState('');
const[age, setAge] = useState(100);
const[isMale, setIsMale] = useState(true);
const [news, setNews] = useState([]);
useEffect(() => {
    const apiKey = 'ap_5a0f56a35271e0d1f1677612a2c2a11c';
    // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
    const apiUrl = 'https://gsubz.com/api/plans?service=mtn_sme';
// const apiUrl = 'https://newsapi.org/v2/everything?q=sport=2023-10-08&sortBy=publishedAt&apiKey=f3898d7e914440d19a6dea4ef1974e51';
    axios.get(apiUrl)
      .then(response => {
        console.log(response);
        // setNews(response.data.articles);
      })
      .catch(error => {
        console.error('Error fetching news:', error);
      });
  }, []);


    return(
        <>
        {/* <Uilcircle size="140" color="#61DAFB" /> */}
        <div className="body">
        <div className="container1">
            <div className="navbar">
            <h5>Entertainment-Point</h5>
            </div>
            <div className="next">
            <h6>Help/<br></br>
            support</h6> 
                 
        {/* <select className='select'>
        <option value="">Switch Service</option>
         <option value="option1">GOTV</option>
         <option value="option2">DSTV</option>
         <option value="option3">STARTIMES</option>
        </select> */}

        </div>
        </div>
        <div className="contents">
        <FontAwesomeIcon icon={faUserCircle} /> 
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
        {/* <div className="container">
            <div className="image">
        <img src={st} className="App-logo" alt="logo" />
        </div>
        <div className="fin">
        <h1>FINSLET</h1>
        <h6>Top when it comes to quality picture delivery<br></br>
            we have the best cameras to capture memory that last for life </h6> 
        </div>
        </div> */}
        {/* <div className="foot">
        <div className="f1">
        <img src={st} className="App-logo" alt="logo" />
        <h4><h1>Bonus</h1>We offer mouth-watering commision <br></br>for every refar you perform</h4>
        </div>
        <div className="f2">
        <img src={st} className="App-logo" alt="logo" /><br></br>
        <br></br>
        <h4><h1>Instant passport</h1>Need emergency passport <br></br>we got you cover</h4>
        </div>
        <div className="f3">
        <img src={st} className="App-logo" alt="logo" /><br></br>
        <br></br>
        <h4><h1>Business Growth</h1>We grow our business with you <br></br>Let get started</h4>
        </div>
        </div> */}
        <div className="flex">
            <h3>Contact us</h3><br></br>
            <h3>Follow us</h3><br></br>
            <h3>Visit us</h3><br></br>
        </div>
        </div>
         </>
    )
}
export default Entertainment;