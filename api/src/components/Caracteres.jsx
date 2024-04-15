import React from 'react';
import CaracterCard from './CaracterCard';

function Caracteres({ characters }) {
  return (
    <div>
      {characters.map((imageUrl, index) => (
        <CaracterCard key={index} imageUrl={imageUrl} />
      ))}
    </div>
  );
}

export default Caracteres;


