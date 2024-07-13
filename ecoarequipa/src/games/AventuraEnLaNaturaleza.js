import React, { useState, useEffect } from 'react';
import '../styles/AventuraNaturaleza.css';
import animal1 from '../assets/animal1.png';
import animal2 from '../assets/animal2.png';
import animal3 from '../assets/animal3.png';

const animals = [animal1, animal2, animal3];

const AventuraNaturaleza = () => {
  const [animal, setAnimal] = useState(null);
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [score, setScore] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newAnimal = animals[Math.floor(Math.random() * animals.length)];
      const top = Math.floor(Math.random() * 80) + 10; // 10-90% range
      const left = Math.floor(Math.random() * 80) + 10; // 10-90% range
      setAnimal(newAnimal);
      setPosition({ top: `${top}%`, left: `${left}%` });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const handleAnimalClick = () => {
    setScore(score + 1);
    setAnimal(null); // Hides the animal after click
  };

  return (
    <div className="aventura-container">
      <h1>Aventura en la Naturaleza</h1>
      <div className="aventura-area">
        {animal && (
          <img
            src={animal}
            alt="Animal"
            className="animal"
            style={{ top: position.top, left: position.left }}
            onClick={handleAnimalClick}
          />
        )}
      </div>
      <div className="score">Puntuación: {score}</div>
    </div>
  );
};

export default AventuraNaturaleza;
