import React, {useState} from 'react';
// import ProductCard from './ProductCard';
// import asian from '../imge/asian.jpg'
import '../cssfiles/main.css';
// import NavigationBar from './componet/NavigationBar';

const ProductCard = ({ image, price, description, location, whatsappNumber,product }) => {
    const [isImageExpanded, setIsImageExpanded] = useState(false);

  const handleWhatsAppRedirect = () => {
    const whatsappUrl = `https://wa.me/+2347036215174/?text=I'm interested in this image: ${image}. product: ${description}. Price: ${price}`;
        window.location.href = whatsappUrl;
    // window.location.href = `https://wa.me/${whatsappNumber}`;
  };
  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
   
    <div className="product-card">
        {/* <NavigationBar/> */}
      {/* <img 
        src={product.image} 
        alt="Product" 
        className={isImageExpanded ? 'expanded-image' : ''} 
        onClick={handleImageClick} 
      /> */}
        {/* <img 
        src={product.image} 
        alt="Product" 
        className={isImageExpanded ? 'expanded-image' : ''}
        onClick={toggleImageSize}
      /> */}
      <img src={process.env.PUBLIC_URL + `/images/${image}`} alt={description}
       className={isImageExpanded ? 'expanded-image' : ''}
       onClick={toggleImageSize}
      />
      <div className="product-details">
        <p className="price">Price: {price}</p>
        <p className="description">{description}</p>
        <p className="location">Location: {location}</p>
        <button onClick={handleWhatsAppRedirect}>Contact Seller</button>
      </div>
    </div>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: 'image1.jpg',
      price: '$10.00',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      location: 'New York, USA',
      whatsappNumber: '1234567890'
    },
    {
      id: 2,
      image: 'st.png',
      price: '$20.00',
      description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      location: 'London, UK',
      whatsappNumber: '9876543210'
    },
    {
        id: 2,
        image: 'st.png',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'st.png',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'st.png',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'st.png',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'image2.jpg',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'st.png',
        price: '$20.00',
        description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
    // Add more product objects here
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard
          key={product.id}
          image={product.image}
          price={product.price}
          description={product.description}
          location={product.location}
          whatsappNumber={product.whatsappNumber}
        />
      ))}
      
    </div>
    
  );
  
};

export default ProductList;
