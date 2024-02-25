// ProductInfo.js
import React from 'react';

const ProductInfo = ({ name, description, price }) => {
  return (
    <div className="product-info">
      <h2>{name}</h2>
      <p>{description}</p>
      <p>Price: ${price}</p>
    </div>
  );
};

export default ProductInfo;
