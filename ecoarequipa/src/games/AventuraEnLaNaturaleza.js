import React, { useState } from 'react';
import plantaImg from '../assets/planta.png';
import animalImg from '../assets/animal.png';

const AventuraEnLaNaturaleza = () => {
  const [foundItems, setFoundItems] = useState([]);

  const items = [
    { name: 'Planta', img: plantaImg },
    { name: 'Animal', img: animalImg },
  ];

  const handleItemClick = (item) => {
    if (!foundItems.includes(item.name)) {
      setFoundItems([...foundItems, item.name]);
    }
  };

  return (
    <div className="game-container">
      <h1>Aventura en la Naturaleza</h1>
      <p>Explora y encuentra diferentes plantas y animales.</p>
      <div className="items">
        {items.map((item, index) => (
          <div key={index} className="item" onClick={() => handleItemClick(item)}>
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
      <div className="found-items">
        <h2>Items Encontrados:</h2>
        <ul>
          {foundItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default AventuraEnLaNaturaleza;