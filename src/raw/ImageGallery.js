// ImageGallery.js
import React, { useState } from 'react';

const ImageGallery = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  return (
    <div className="image-gallery">
      <img src={images[currentImageIndex]} alt="Product" />
      <button className="nav-button prev" onClick={prevImage}>{'<'}</button>
      <button className="nav-button next" onClick={nextImage}>{'>'}</button>
    </div>
  );
};

export default ImageGallery;
