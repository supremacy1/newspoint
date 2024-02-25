import React, { useEffect, useState } from "react";
// import './navbar.css';
// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHouse, faFutbol, faWallet, faPlus, faXmark, faBars, faPhone, faBook, faWifi3, faTv, faLightbulb, faLocationDot, faUser, faUserCircle, faBell, faHeadset } from '@fortawesome/free-solid-svg-icons';
import Uilcircle from '@iconscout/react-unicons/icons/uil-react'
import axios from 'axios';
import '../cssfiles/navbar.css';
import st from '../imge/st.png'
import back from '../imge/back.JPG'
import asian from '../imge/asian.jpg'
import ware from '../imge/warehouse.jpeg'
import down from '../imge/download.jpeg'



const Sport = (Props) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
       .then((response) => response.json())
       .then((data) => {
          console.log(data);
          setPosts(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
 }, []);
  // const [news, setNews] = useState([]);

  //   useEffect(() => {
  //     const apiKey = 'f3898d7e914440d19a6dea4ef1974e51';
  //     // const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  //     const apiUrl = 'https://newsapi.org/v2/everything?q=apple&from=2023-11-05&to=2023-11-05&sortBy=popularity&apiKey=f3898d7e914440d19a6dea4ef1974e51';
  // // const apiUrl = 'https://newsapi.org/v2/everything?q=sport=2023-10-08&sortBy=publishedAt&apiKey=f3898d7e914440d19a6dea4ef1974e51';
  //     axios.get(apiUrl)
  //       .then(response => {
  //         setNews(response.data.articles);
  //       })
  //       .catch(error => {
  //         console.error('Error fetching news:', error);
  //       });
  //   }, []);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get('https://newsapi.org/v2/everything?q=apple&from=2023-11-05&to=2023-11-05&sortBy=popularity&apiKey=f3898d7e914440d19a6dea4ef1974e51');
  //       setNews(response.data.articles);
  //     } catch (error) {
  //       console.error(error);

  //     }
  //   }
  //   fetchData();
  // }, [])
  return (
    <>
      <div>
        <h1>Latest News</h1>
        <div className="posts-container">
      {posts.map((post) => {
         return (
            <div className="post-card" key={post.id}>
               <h2 className="post-title">{post.title}</h2>
               <p className="post-body">{post.body}</p>
               <div className="button">
               <div className="delete-btn">Delete</div>
               </div>
            </div>
         );
      })}
   </div>
        {/* <ul className="news">
          {news.map((article, index) => (
            <li key={index}>
              <img src={article.urlToImage} alt={article.title} />
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul> */}
      </div>    
     
   

    </>
  )  
}
export default Sport;