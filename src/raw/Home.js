// import React from 'react';
// import asian from '../imge/asian.jpg'

// const ImageWithDetails = ({ imageSrc, price, description }) => {
//   const handleWhatsAppShare = () => {
//     // Constructing the message with pre-filled content
//     const message = `Check out this item: ${description}\nPrice: ${price}`;
    
//     // Generating the WhatsApp URL with pre-filled content
//     const whatsappURL = `https://wa.me/?text=${encodeURIComponent(message)}`;
    
//     // Redirecting to WhatsApp
//     window.location.href = whatsappURL;
//   };

//   return (
//     <div>
//       <img src={imageSrc} alt="Product" />
//       <p>{description}</p>
//       <p>Price: {price}</p>
//       <button onClick={handleWhatsAppShare}>Share on WhatsApp</button>
//     </div>
//   );
// };

// const App = () => {
//   // Example data
//   const imageData = [
//     { 
     
//       imageSrc: 'imge/asian.jpg',
//       price: '$10',
//       description: 'Product 1'
//     },
//     {
//       imageSrc: 'path/to/image2.jpg',
//       price: '$20',
//       description: 'Product 2'
//     },
//     // Add more images as needed
//   ];

//   return (
//     <div>
//       {imageData.map((item, index) => (
//         <ImageWithDetails
//           key={index}
//           imageSrc={item.imageSrc}
//           price={item.price}
//           description={item.description}
//         />
//       ))}
//     </div>
//   );
// };

// export default App;
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
import React from 'react';
import ImageCard from './ImageCard';
import '../cssfiles/home.css'; 

const Home = () => {
  return (
    <div className="app">
  <ImageCard
  imageName="image1.jpg"
  price="$100"
  description="Product 1"
/>
<ImageCard
  imageName="image2.jpg"
  price="$150"
  description="Product 2"
/>
<ImageCard
  imageName="st.png"
  price="$150"
  description="Product 2"
/>
<ImageCard
  imageName="image2.jpg"
  price="$150"
  description="Product 2"
/>
</div>
  );
};

export default Home;
