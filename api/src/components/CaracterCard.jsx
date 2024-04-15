import React from 'react';

function CaracterCard({ imageUrl }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '300px' }}>
      <img src={imageUrl} alt="Pug" style={{ maxWidth: '100%' }} />
    </div>
  );
}

export default CaracterCard;

