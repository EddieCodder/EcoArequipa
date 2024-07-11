import React, { useState } from 'react';
import cicloAguaImage from '../assets/game4.jpg';

const CicloDelAgua = () => {
  const [stage, setStage] = useState('evaporación');

  const nextStage = () => {
    const stages = ['evaporación', 'condensación', 'precipitación', 'recolección'];
    setStage(stages[(stages.indexOf(stage) + 1) % stages.length]);
  };

  return (
    <div className="juego-detalle">
      <h1>El Ciclo del Agua</h1>
      <img src={cicloAguaImage} alt="El Ciclo del Agua" />
      <p>Descubre el ciclo del agua de manera interactiva y divertida.</p>
      <div className="water-cycle-game">
        <p>Etapa actual: {stage}</p>
        <button onClick={nextStage}>Siguiente Etapa</button>
      </div>
    </div>
  );
}

export default CicloDelAgua;
