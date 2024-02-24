// import React from 'react';

// const ImageCard = ({ imageUrl, price, description }) => {
//   const handleWhatsAppClick = () => {
//     // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
//     const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER/?text=I'm interested in this product: ${description}. Price: ${price}`;
//     window.location.href = whatsappUrl;
//   };

//   return (
//     <div className="image-card">
//       <img src={imageUrl} alt={description} />
//       <div className="details">
//         <p className="price">Price: {price}</p>
//         <p className="description">{description}</p>
//         <button onClick={handleWhatsAppClick}>Contact via WhatsApp</button>
//       </div>
//     </div>
//   );
// };

// export default ImageCard;
import React,{useState} from 'react';
import '../cssfiles/home.css';


const ImageCard = ({ imageName, price, description }) => {
  const [showAll, setShowAll] = useState(false);

  const handleToggleShowAll = () => {
    setShowAll(!showAll);
  };
  const handleWhatsAppClick = () => {
    // Replace 'YOUR_WHATSAPP_NUMBER' with your actual WhatsApp number
    const whatsappUrl = `https://wa.me/YOUR_WHATSAPP_NUMBER/?text=I'm interested in this product: ${description}. Price: ${price}`;
    window.location.href = whatsappUrl;
  };
  const images = [
    { id: 1, src: process.env.PUBLIC_URL + '/images/image1.jpg', alt: 'Image 1' },
    { id: 2, src: process.env.PUBLIC_URL + '/images/image2.png', alt: 'Image 2' },
    { id: 3, src: process.env.PUBLIC_URL + '/images/image3.jpg', alt: 'Image 3' },
    { id: 4, src: process.env.PUBLIC_URL + '/images/image4.jpg', alt: 'Image 4' },
    { id: 5, src: process.env.PUBLIC_URL + '/images/image5.png', alt: 'Image 5' },
    { id: 6, src: process.env.PUBLIC_URL + '/images/image6.jpg', alt: 'Image 6' },
    { id: 7, src: process.env.PUBLIC_URL + '/images/image7.png', alt: 'Image 7' },
    { id: 8, src: process.env.PUBLIC_URL + '/images/image8.jpg', alt: 'Image 8' },
    { id: 9, src: process.env.PUBLIC_URL + '/images/image9.png', alt: 'Image 9' },
    { id: 10, src: process.env.PUBLIC_URL + '/images/image10.jpg', alt: 'Image 10' },
  ];

  return (
    <div className="image-card">
      <img src={process.env.PUBLIC_URL + `/images/${imageName}`} alt={description} className='me'/>
      <div className="details">
        <p className="price">Price: {price}</p>
        <p className="description">{description}</p>
        <button onClick={handleWhatsAppClick}>Contact via WhatsApp</button>
      </div>
    </div>
  );
};

export default ImageCard;
