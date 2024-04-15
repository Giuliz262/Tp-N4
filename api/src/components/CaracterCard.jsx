import React, { useState } from 'react';

function CaracterCard({ imageUrl }) {
  const [isVisible, setIsVisible] = useState(true); 

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      {isVisible && <img src={imageUrl} alt="Pug" style={{ maxWidth: '100%' }} />} 
      {isVisible && <button onClick={toggleVisibility}>Ocultar</button>}
    </div>
  );
}

export default CaracterCard;

