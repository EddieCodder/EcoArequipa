import React, { useState } from 'react';
import papelImg from '../assets/papel.png';
import plasticoImg from '../assets/plastico.png';
import vidrioImg from '../assets/vidrio.png';

const ReciclaYReutiliza = () => {
  const [score, setScore] = useState(0);

  const handleDrop = (event, type) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("type");
    if (data === type) {
      setScore(score + 1);
    }
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event, type) => {
    event.dataTransfer.setData("type", type);
  };

  return (
    <div className="game-container">
      <h1>Recicla y Reutiliza</h1>
      <p>Coloca cada residuo en el contenedor correcto.</p>
      <div className="score">Puntuación: {score}</div>
      <div className="bins">
        <div className="bin" onDrop={(e) => handleDrop(e, 'papel')} onDragOver={allowDrop}>Papel</div>
        <div className="bin" onDrop={(e) => handleDrop(e, 'plastico')} onDragOver={allowDrop}>Plástico</div>
        <div className="bin" onDrop={(e) => handleDrop(e, 'vidrio')} onDragOver={allowDrop}>Vidrio</div>
      </div>
      <div className="items">
        <div className="item" draggable onDragStart={(e) => handleDragStart(e, 'papel')}>
          <img src={papelImg} alt="Papel" />
        </div>
        <div className="item" draggable onDragStart={(e) => handleDragStart(e, 'plastico')}>
          <img src={plasticoImg} alt="Plástico" />
        </div>
        <div className="item" draggable onDragStart={(e) => handleDragStart(e, 'vidrio')}>
          <img src={vidrioImg} alt="Vidrio" />
        </div>
      </div>
    </div>
  );
}

export default ReciclaYReutiliza;