// import React, { useState, useEffect } from 'react';
import '../cssfiles/slid.css';

// const images = [
//   process.env.PUBLIC_URL + '/images/image2.jpg',
//   process.env.PUBLIC_URL + '/images/car1.jpg',
//   process.env.PUBLIC_URL + '/images/land1.jpg',
//   process.env.PUBLIC_URL + '/images/warehouse.jpeg',
//   process.env.PUBLIC_URL + '/images/st.png',
// ];

// function Slideshow() {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) =>
//         prevIndex === images.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="slideshow-container">
//       {images.map((imageUrl, index) => (
//         <div
//           key={index}
//           className={
//             index === currentImageIndex
//               ? 'slide active'
//               : 'slide inactive'
//           }
//         >
//           <img src={imageUrl} alt={`Slide ${index + 1}`} />
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Slideshow;
// import React, { useState, useEffect } from 'react';


// const Slideshow = ({ images, interval }) => {
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setIndex((index + 1) % images.length);
//     }, interval);

//     return () => clearTimeout(timer);
//   }, [index, images, interval]);

//   return (
//     <div className="slideshow-container">
//       {images.map((image, idx) => (
//         <img
//           key={idx}
//           className={idx === index ? 'active' : 'inactive'}
//           src={image}
//           alt={`Slideshow Image ${idx}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default Slideshow;
// import React, { useState } from 'react';
// import st from '../imge/st.png';
// import asian from '../imge/asian.jpg';

// const Slideshow = () => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const images = [st, asian]; // Add more images as needed

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//   };

//   // You can style this component as per your requirement
//   return (
//     <div>
//       <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
//       <button onClick={nextImage}>Next Image</button>
//     </div>
//   );
// };

// export default Slideshow;

import React, { useState, useEffect } from 'react';
import slid1 from '../imge/slid1.jpg';
import slid2 from '../imge/slid2.jpg';
import slid3 from '../imge/slid3.jpg';
// import slid4 from '../imge/slid4.jpg';
import slid5 from '../imge/slid5.jpg';
import slid6 from '../imge/slid6.jpg';
import slid7 from '../imge/slid7.jpg';
import slid9 from '../imge/slid9.jpg';

const Slideshow = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [slid1, slid2, slid3, slid5, slid6, slid7, slid9]; // Add more images as needed

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  useEffect(() => {
    const interval = setInterval(nextImage, 7000); // Change 3000 to adjust the interval (in milliseconds)
    
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // You can style this component as per your requirement
  return (
    <div className='slid-images'>
      <img src={images[currentImageIndex]} alt={`Slide ${currentImageIndex}`} />
    </div>
  );
};

export default Slideshow;
