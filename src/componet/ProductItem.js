// ProductItem.js
import React from 'react';

const ProductItem = ({ imageUrl, price, description }) => {
  return (
    <div className="product-item">
      <img src={imageUrl} alt="Product" />
      <div className="details">
        <p className="price">${price}</p>
        <p className="description">{description}</p>
      </div>
    </div>
  );
};

export default ProductItem;
