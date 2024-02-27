import React, {useState} from 'react';
// import ProductCard from './ProductCard';
// import asian from '../imge/asian.jpg'
import '../cssfiles/main.css';
// import NavigationBar from './componet/NavigationBar';

const ProductCard = ({ image, price, description, location, whatsappNumber,product }) => {

    const getProductImageBase64 = (imageFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      resolve(reader.result.split(',')[1]); // Extract base64 string from the result
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(imageFile); // Read the image file as data URL
  });
};

    const [isImageExpanded, setIsImageExpanded] = useState(false);
    

  const handleWhatsAppRedirect = () => {
    const imageBase64 = getProductImageBase64(); 
    const encodedImage = encodeURIComponent(imageBase64);
    const whatsappUrl = `https://wa.me/+2347036215174/?text=I'm interested in this image: ${image}. product: ${description}. Price: ${price}. ${encodedImage}`;
    // const whatsappUrl = `https://wa.me/+2347036215174/?text=I'm interested in this product: ${product.description}. Price: ${product.price}. ${encodedImage}`;
    window.location.href = whatsappUrl;
    // const whatsappUrl = `https://wa.me/+2347036215174/?text=I'm interested in this image: ${image}. product: ${description}. Price: ${price}`;
    //     window.location.href = whatsappUrl;
    
    // window.location.href = `https://wa.me/${whatsappNumber}`;
  };
  const toggleImageSize = () => {
    setIsImageExpanded(!isImageExpanded);
  };

  return (
   <>

    <div className="product-card">
        {/* <NavigationBar/> */}
   
      <img src={process.env.PUBLIC_URL + `/images/${image}`} alt={description}
       className={isImageExpanded ? 'expanded-image' : ''}
       onClick={toggleImageSize}
      />
      <div className="product-details">
        <p className="price">Price: {price}</p>
        <p className="description">Product: {description}</p>
        <p className="location">Location: {location}</p>
        <button onClick={handleWhatsAppRedirect}>Contact Seller</button>
      </div>
    </div>
    </>
  );
};

const ProductList = () => {
  const products = [
    {
      id: 1,
      image: 'car1.jpg',
      price: '#10.00',
      description: 'Gold',
      location: '',
      whatsappNumber: '1234567890'
    },
    {
      id: 2,
      image: 'car2.jpg',
      price: '#20.00',
      description: 'Gold',
      location: '',
      whatsappNumber: '9876543210'
    },
    {
        id: 2,
        image: 'car3.jpg',
        price: '#20.00',
        description: 'A car is a four-wheeled vehicle typically powered by an internal combustion engine, electric motor, or a combination of both. It serves as a mode of transportation for individuals or goods',
        location: 'London, UK',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'car4.jpg',
        price: '#20.00',
        description: 'Gold',
        location: '',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'car8.jp',
        price: '#20.00',
        description: 'Gold',
        location: '',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'car3.jpg',
        price: '#20.00',
        description: 'Gold',
        location: '',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'car7.jpg',
        price: '#20.00',
        description: '',
        location: '',
        whatsappNumber: '9876543210'
      },
      {
        id: 2,
        image: 'car4.jpg',
        price: '#20.00',
        description: 'd',
        location: 'fff',
        whatsappNumber: '9876543210'
      },
    // Add more product objects here
  ];

  return (
    <>
      <p className='properties'>Cars</p>
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
    </>
  );
  
};

export default ProductList;
