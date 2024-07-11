import React, { useState } from 'react';
import huertoImage from '../assets/game7.jpg';

const HuertosSabandia = () => {
  const [plants, setPlants] = useState([]);

  const handlePlant = (plant) => {
    setPlants([...plants, plant]);
  };

  return (
    <div className="juego-detalle">
      <h1>Huertos de Sabandía</h1>
      <img src={huertoImage} alt="Huertos de Sabandía" />
      <p>Planta, cuida y cosecha un huerto en Sabandía, aprendiendo sobre la agricultura sostenible y la importancia de los alimentos orgánicos.</p>
      <div className="garden-game">
        <button onClick={() => handlePlant('zanahoria')}>Plantar zanahoria</button>
        <button onClick={() => handlePlant('lechuga')}>Plantar lechuga</button>
        <button onClick={() => handlePlant('tomate')}>Plantar tomate</button>
      </div>
      <p>Plantas en el huerto: {plants.join(', ')}</p>
    </div>
  );
}

export default HuertosSabandia;
