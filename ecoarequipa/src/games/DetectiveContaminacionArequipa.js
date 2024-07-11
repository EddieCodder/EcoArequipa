import React, { useState } from 'react';
import detectiveImage from '../assets/game6.jpg';

const DetectiveContaminacionArequipa = () => {
  const [clues, setClues] = useState([]);
  const possibleClues = ['basura', 'humo', 'agua sucia'];

  const handleFindClue = (clue) => {
    if (!clues.includes(clue)) {
      setClues([...clues, clue]);
    }
  };

  return (
    <div className="juego-detalle">
      <h1>Detective de la Contaminación en Arequipa</h1>
      <img src={detectiveImage} alt="Detective de la Contaminación en Arequipa" />
      <p>Investiga y encuentra fuentes de contaminación en Arequipa y toma medidas para reducirla.</p>
      <div className="contamination-game">
        {possibleClues.map(clue => (
          <button key={clue} onClick={() => handleFindClue(clue)}>{clue}</button>
        ))}
      </div>
      <p>Pistas encontradas: {clues.join(', ')}</p>
    </div>
  );
}

export default DetectiveContaminacionArequipa;
