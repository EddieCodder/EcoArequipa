import React, { useState } from 'react';
import limpiezaImage from '../assets/game5.jpg';

const LimpiezaRioChili = () => {
  const [score, setScore] = useState(0);

  const handleClean = () => {
    setScore(score + 1);
  };

  return (
    <div className="juego-detalle">
      <h1>Limpieza del Río Chili</h1>
      <img src={limpiezaImage} alt="Limpieza del Río Chili" />
      <p>Ayuda a limpiar el río Chili, recogiendo la basura y aprendiendo sobre la importancia de mantener nuestros ríos limpios.</p>
      <button onClick={handleClean}>Recoger basura</button>
      <p>Puntuación: {score}</p>
    </div>
  );
}

export default LimpiezaRioChili;