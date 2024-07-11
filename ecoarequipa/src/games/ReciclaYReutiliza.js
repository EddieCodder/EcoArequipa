import React, { useState } from 'react';
import reciclaImage from '../assets/game1.jpg';

const ReciclaYReutiliza = () => {
  const [score, setScore] = useState(0);
  const [selectedBin, setSelectedBin] = useState('');

  const handleRecycle = (type) => {
    if (type === selectedBin) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
    setSelectedBin('');
  };

  return (
    <div className="juego-detalle">
      <h1>Recicla y Reutiliza</h1>
      <img src={reciclaImage} alt="Recicla y Reutiliza" />
      <p>Aprende a clasificar los diferentes tipos de residuos y la importancia de reciclar.</p>
      <div className="recycle-game">
        <div>
          <button onClick={() => setSelectedBin('plastico')}>Plástico</button>
          <button onClick={() => setSelectedBin('papel')}>Papel</button>
          <button onClick={() => setSelectedBin('vidrio')}>Vidrio</button>
        </div>
        <button onClick={() => handleRecycle('plastico')}>Reciclar Plástico</button>
        <button onClick={() => handleRecycle('papel')}>Reciclar Papel</button>
        <button onClick={() => handleRecycle('vidrio')}>Reciclar Vidrio</button>
      </div>
      <p>Puntuación: {score}</p>
    </div>
  );
}

export default ReciclaYReutiliza;
