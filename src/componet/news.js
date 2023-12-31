import React, { useEffect, useState } from 'react';
import axios from 'axios';

const NewsApp = () => {
  const [news, setNews] = useState([]);
  const apiKey = 'f3898d7e914440d19a6dea4ef1974e51';

  useEffect(() => {
    // Fetch news data from the API
    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then((response) => response.json())
      .then((data) => setNews(data.articles))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>Latest News</h1>
      <ul>
        {news.map((article, index) => (
          <li key={index}>
            <h3>{article.title}</h3>
            <img src={article.urlToImage} alt={article.title} />
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read more
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
  // const [news, setNews] = useState([]);

  // useEffect(() => {
  //   const apiKey = 'f3898d7e914440d19a6dea4ef1974e51';
  //    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  //   const apiUrl = 'https://newsapi.org/v2/everything?q=tesla&from=2023-10-06&sortBy=publishedAt&apiKey=f3898d7e914440d19a6dea4ef1974e51';

  //   axios.get(apiUrl)
  //     .then(response => {
  //       setNews(response.data.articles);
  //     })
  //     .catch(error => {
  //       console.error('Error fetching news:', error);
  //     });
  // }, []);

  // return (
  //   <div>
  //     <h1>Latest News</h1>
  //     <ul>
  //       {news.map((article, index) => (
  //         <li key={index}>
  //                       <img src={article.urlToImage} alt={article.title} />
  //           <a href={article.url} target="_blank" rel="noopener noreferrer">
  //             {article.title.urlimage}
  //           </a>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default NewsApp;
// f3898d7e914440d19a6dea4ef1974e51