// WhatsAppButton.js
import React from 'react';

const WhatsAppButton = ({ whatsappLink }) => {
  const handleClick = () => {
    window.location.href = whatsappLink;
  };

  return (
    <button className="whatsapp-button" onClick={handleClick}>
      Contact via WhatsApp
    </button>
  );
};

export default WhatsAppButton;
