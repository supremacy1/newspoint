// import React from 'react'

// export default function () {
//   return (
//     <div>
//     <ul>
//         <li>
//             Home
//         </li>
//         <li>
//             About
//         </li>
//         <li>
//             Contact
//         </li>
//         <li>
//             Sell
//         </li>
//     </ul>
//     </div>
//   )
// }
// import React, { useState } from 'react';
// // import '../home.css'; // Import your CSS file for styling
// import '../cssfiles/home.css'
// import back from '../imge/back.JPG'
// import asian from '../imge/asian.jpg'
// import ware from '../imge/warehouse.jpeg'
// import down from '../imge/download.jpeg'

// const Product = ({ product }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);

//   const nextImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
//   };

//   const prevImage = () => {
//     setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
//   };

//   return (
//     <div className="product-container">
//       <div className="image-gallery">
//         <img src={product.images[currentImageIndex]} alt="Product" />
//         <button className="nav-button prev" onClick={prevImage}>{'<'}</button>
//         <button className="nav-button next" onClick={nextImage}>{'>'}</button>
//       </div>
//       <div className="product-info">
//         <h2>{product.name}</h2>
//         <p>{product.description}</p>
//         <p>Price: ${product.price}</p>
//         <button className="location-button" onClick={() => window.location.href = product.whatsappLink}>
//           Contact via WhatsApp
//         </button>
//       </div>
//     </div>
//   );
// };

// const Homepage = () => {
//   // Dummy product data
//   const product = {
//     name: "laptop",
//     description: "good",
//     price: 99.99,
    
//     images: ["asian.jpg", "back.jpg", "download.jpg"],
//     whatsappLink: "https://api.whatsapp.com/send?phone=07036215174"
//   };
//   <img src={back} className="App-logo" alt="logo" />
//   return (
//     <div className="App">
//       <Product product={product} />
//     </div>
//   );
// };

// dd
// export default Homepage;
// import React, { useState } from 'react';

// const Product = ({ image, name, description, price, location }) => {
//     const [showFullImage, setShowFullImage] = useState(false);

//     const handleClick = () => {
//         setShowFullImage(true);
//     };

//     const handleClose = () => {
//         setShowFullImage(false);
//     };

//     return (
//         <div className="product">
//             <img src={image} alt={name} onClick={handleClick} />
//             <div className="product-info">
//                 <h3>{name}</h3>
//                 <p>{description}</p>
//                 <p>Price: {price}</p>
//                 <p>Location: {location}</p>
//                 <button className="whatsapp-button" onClick={() => window.location.href='https://wa.me/yourphonenumber'}>Contact on WhatsApp</button>
//             </div>
//             {showFullImage && (
//                 <div className="full-image-overlay" onClick={handleClose}>
//                     <img src={image} alt={name} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Product;
// import React from 'react';
// // import './styles.css'; // Import your CSS file for styling

// const products = [
//   {
//     id: 1,
//     name: 'Product 1',
//     price: '$10',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//     whatsappLink: 'https://wa.me/whatsapplink', // Replace with your WhatsApp link
//     imageSrc: 'product1.jpg', // Replace with your image source
//   },
//   {
//     id: 2,
//     name: 'Product 2',
//     price: '$15',
//     description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
//     whatsappLink: 'https://wa.me/whatsapplink', // Replace with your WhatsApp link
//     imageSrc: 'asian.jpg', // Replace with your image source
//   },
//   // Add more products as needed
// ];

// const ProductCard = ({ product }) => {
//   return (
//     <div className="product-card">
//       <img src={product.imageSrc} alt={product.name} />
//       <div className="product-details">
//         <h2>{product.name}</h2>
//         <p className="price">{product.price}</p>
//         <p className="description">{product.description}</p>
//         <a href={product.whatsappLink} className="whatsapp-button" target="_blank" rel="noopener noreferrer">Contact via WhatsApp</a>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       {products.map(product => (
//         <ProductCard key={product.id} product={product} />
//       ))}
//     </div>
//   );
// };

// export default App;
// import React from 'react';
// import back from '../imge/back.JPG'

// const items = [
//   {
//     id: 1,
//     name: 'Item 1',
//     description: 'Description of Item 1',
//     price: '$10',
//     imageUrl: 'image1.jpg',
//   },
//   {
//     id: 2,
//     name: 'Item 2',
//     description: 'Description of Item 2',
//     price: '$20',
//     imageUrl:  <img src={back} className="App-logo" alt="logo" />,
//   },
//   // Add more items as needed
// ];

// const Item = ({ item }) => {
//   const handleWhatsAppClick = () => {
//     // Replace this URL with your actual WhatsApp URL
//     window.location.href = `https://wa.me/whatsappphonenumber/?text=I'm interested in ${item.name}`;
//   };

//   return (
//     <div className="item">
//       <img src={item.imageUrl} alt={item.name} />
//       <div className="details">
//         <h2>{item.name}</h2>
//         <p>{item.description}</p>
//         <p>Price: {item.price}</p>
//         <button onClick={handleWhatsAppClick}>Contact via WhatsApp</button>
//       </div>
//     </div>
//   );
// };

// const ItemsRow = () => {
//   return (
//     <div className="items-row">
//       {items.map(item => (
//         <Item key={item.id} item={item} />
//       ))}
//     </div>
//   );
// };

// const App = () => {
//   return (
//     <div className="app">
//       <h1>Items for Sale</h1>
//       <ItemsRow />
//     </div>
//   );
// };

// export default App;
