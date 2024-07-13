import React, { useState, useEffect } from 'react';
import '../styles/AhorrarEnergia.css';
import luzEncendida from '../assets/luz_encendida.png';
import luzApagada from '../assets/luz_apagada.png';

const AhorrarEnergia = () => {
  const [luces, setLuces] = useState(Array(5).fill(false));
  const [score, setScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newLuces = luces.map((luz, index) => Math.random() < 0.5 ? !luz : luz);
      setLuces(newLuces);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [luces]);

  const handleApagarLuz = (index) => {
    if (luces[index]) {
      const newLuces = [...luces];
      newLuces[index] = false;
      setLuces(newLuces);
      setScore(score + 1);
    }
  };

  return (
    <div className="energia-container">
      <h1>Ahorrar Energía</h1>
      <div className="energia-area">
        {luces.map((luz, index) => (
          <img
            key={index}
            src={luz ? luzEncendida : luzApagada}
            alt={luz ? 'Luz encendida' : 'Luz apagada'}
            className="luz"
            onClick={() => handleApagarLuz(index)}
          />
        ))}
      </div>
      <div className="score">Puntuación: {score}</div>
    </div>
  );
};

export default AhorrarEnergia;
