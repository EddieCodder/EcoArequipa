import React, { useState } from 'react';
import aventuraImage from '../assets/game3.jpg';

const AventuraEnLaNaturaleza = () => {
  const [foundItems, setFoundItems] = useState([]);
  const items = ['árbol', 'flor', 'pájaro', 'río'];

  const handleFindItem = (item) => {
    if (!foundItems.includes(item)) {
      setFoundItems([...foundItems, item]);
    }
  };

  return (
    <div className="juego-detalle">
      <h1>Aventura en la Naturaleza</h1>
      <img src={aventuraImage} alt="Aventura en la Naturaleza" />
      <p>Explora la naturaleza y aprende sobre diferentes plantas y animales. Utiliza una guía para identificar especies y descubre la biodiversidad del entorno natural.</p>
      <div className="nature-game">
        {items.map(item => (
          <button key={item} onClick={() => handleFindItem(item)}>{item}</button>
        ))}
      </div>
      <p>Encontraste: {foundItems.join(', ')}</p>
    </div>
  );
}

export default AventuraEnLaNaturaleza;
