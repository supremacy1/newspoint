import React, { useState, useEffect } from 'react';
// import asian from './asian.jpg'
// import ware from './warehouse.jpeg'
// import down from './download.jpeg'
// import ware from './imge/warehouse.jpeg'
// import asian from './imge/asian.jpg'
// import down from './imge/back.jpg'
import asian from '../imge/asian.jpg'

const PictureSlider = ({ images, interval = 2000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // Increment the current index and loop back to 0 if it exceeds the image array length
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    // Cleanup function to clear the interval when the component is unmounted
    return () => clearInterval(timer);
  }, [currentIndex, interval, images.length]);

  return (
    <div>
      <img src={images[currentIndex]} alt={`slide-${currentIndex}`} />
    </div>
  );
};

// Example usage:
const App = () => {
  const images = [
    // {
    //     image:
    //     <img src={asian} className="App-logo" alt="logo" />
    //   },
      
    //   {
    //     image:
    //     <img src={ware} className="App-logo" alt="logo" />
    //   },
    //   {
    //     image:
    //     <img src={down} className="App-logo" alt="logo" />
    //   },
    //   {
    //     image:
    //     <img src={asian} className="App-logo" alt="logo" />
    //   }
    // 'url_to_image_1',
    // 'url_to_image_2',
    // 'url_to_image_3',
    <img src={asian} className='App' alt='sa'></img>
    // Add more image URLs as needed
  ];

  return <PictureSlider images={images} />;
};

export default App;
