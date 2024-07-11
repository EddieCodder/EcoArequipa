import React from 'react';

const Juego = ({ title, description, image }) => {
  return (
    <div className="juego">
      <img src={image} alt={title} className="juego-image" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Juego;
