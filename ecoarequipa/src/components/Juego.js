import React from 'react';
import { useNavigate } from 'react-router-dom';

const Juego = ({ title, description, image, link }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(link);
  };

  return (
    <div className="juego">
      <img src={image} alt={title} className="juego-image" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="juego-button" onClick={handleClick}>Jugar</button>
    </div>
  );
};

export default Juego;
