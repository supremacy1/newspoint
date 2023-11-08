import React, { useEffect, useState }  from "react";
// import './navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faFutbol,faWallet, faPlus, faXmark, faBars, faPhone, faBook, faWifi3, faTv,faLightbulb, faLocationDot,faUser, faUserCircle, faBell,faHeadset } from '@fortawesome/free-solid-svg-icons';
import Uilcircle from '@iconscout/react-unicons/icons/uil-react'
import axios from 'axios';
import '../cssfiles/navbar.css';
import st from '../imge/st.png'
import back from '../imge/back.JPG'
import asian from '../imge/asian.jpg'
import ware from '../imge/warehouse.jpeg'
import down from '../imge/download.jpeg'



const Sport = (Props) => {
    const [news, setNews] = useState([]);

    useEffect(() => {
      const apiKey = 'f3898d7e914440d19a6dea4ef1974e51';
      // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
      // const apiUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-11-05&to=2023-11-05&sortBy=popularity&apiKey=f3898d7e914440d19a6dea4ef1974e51';
  const apiUrl = 'https://newsapi.org/v2/everything?q=sport=2023-10-08&sortBy=publishedAt&apiKey=f3898d7e914440d19a6dea4ef1974e51';
      axios.get(apiUrl)
        .then(response => {
          setNews(response.data.articles);
        })
        .catch(error => {
          console.error('Error fetching news:', error);
        });
    }, []);

    return(
        <>
        <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <img src={article.urlToImage} alt={article.title} />
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
      </div>
        {/* <div className="body">
        <div className="container1">
            <div className="navbar">
            <h5>Sport-Point</h5>
            </div>
            <div className="next">
            <h6>Help/<br></br>
            support</h6> 

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
        </div> */}
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
     
         </>
    )
}
export default Sport;