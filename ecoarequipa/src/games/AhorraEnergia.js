import React, { useState } from 'react';
import ahorraEnergiaImage from '../assets/game2.jpg';

const AhorraEnergia = () => {
  const [appliances, setAppliances] = useState({
    tv: true,
    light: true,
    computer: true
  });
  const [score, setScore] = useState(0);

  const toggleAppliance = (appliance) => {
    setAppliances({ ...appliances, [appliance]: !appliances[appliance] });
    setScore(score + (appliances[appliance] ? 1 : -1));
  };

  return (
    <div className="juego-detalle">
      <h1>Ahorra Energía</h1>
      <img src={ahorraEnergiaImage} alt="Ahorra Energía" />
      <p>Identifica aparatos electrónicos y luces encendidas en una casa y apágalos para ahorrar energía.</p>
      <div className="energy-game">
        <button onClick={() => toggleAppliance('tv')}>{appliances.tv ? 'Apagar TV' : 'Encender TV'}</button>
        <button onClick={() => toggleAppliance('light')}>{appliances.light ? 'Apagar Luz' : 'Encender Luz'}</button>
        <button onClick={() => toggleAppliance('computer')}>{appliances.computer ? 'Apagar Computadora' : 'Encender Computadora'}</button>
      </div>
      <p>Puntuación: {score}</p>
    </div>
  );
}

export default AhorraEnergia;
