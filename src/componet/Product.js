// // Product.js
// import React from 'react';
// import ImageGallery from './ImageGallery';
// import ProductInfo from './ProductInfo';
// import WhatsAppButton from './WhatsAppButton';

// const Product = ({ product }) => {
//   return (
//     <div className="product">
//       <ImageGallery images={product.images} />
//       <ProductInfo name={product.name} description={product.description} price={product.price} />
//       <WhatsAppButton whatsappLink={product.whatsappLink} />
//     </div>
//   );
// };

// export default Product;
import React from 'react';
import Product from './Product'; // Import the Product component

const ProductList = () => {
  // Sample product data
  const products = [
    {
      id: 1,
      image: 'product1.jpg',
      price: 49.99,
      description: 'Product 1 Description',
    },
    {
      id: 2,
      image: 'product2.jpg',
      price: 29.99,
      description: 'Product 2 Description',
    },
    // Add more products as needed
  ];

  return (
    <div className="product-list">
      {products.map(product => (
        <Product
          key={product.id}
          image={product.image}
          price={product.price}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
