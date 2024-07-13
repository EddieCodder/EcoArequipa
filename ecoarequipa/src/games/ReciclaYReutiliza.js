import React, { useState, useEffect, useCallback } from 'react';
import '../styles/ReciclaYReutiliza.css';
import papelImg from '../assets/papel.png';
import plasticoImg from '../assets/plastico.png';
import vidrioImg from '../assets/vidrio.png';
import tachoPapelImg from '../assets/tacho_papel.png';
import tachoPlasticoImg from '../assets/tacho_plastico.png';
import tachoVidrioImg from '../assets/tacho_vidrio.png';

const itemTypes = [
  { type: 'papel', image: papelImg },
  { type: 'plastico', image: plasticoImg },
  { type: 'vidrio', image: vidrioImg }
];

const ReciclaYReutiliza = () => {
  const [score, setScore] = useState(0);
  const [currentItem, setCurrentItem] = useState(null);
  const [itemPosition, setItemPosition] = useState(50); // Position of the item

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'ArrowLeft') {
      setItemPosition((prevPosition) => Math.max(prevPosition - 10, 0));
    } else if (event.key === 'ArrowRight') {
      setItemPosition((prevPosition) => Math.min(prevPosition + 10, 90));
    }
  }, []);

  useEffect(() => {
    const generateItem = () => {
      const newItem = {
        id: Date.now(),
        ...itemTypes[Math.floor(Math.random() * itemTypes.length)],
        top: 0
      };
      setCurrentItem(newItem);
    };

    if (!currentItem) {
      generateItem();
    }
  }, [currentItem]);

  useEffect(() => {
    const handleCollision = (item) => {
      if (item.top > 90) {
        if (
          (item.type === 'papel' && itemPosition >= 0 && itemPosition < 33) ||
          (item.type === 'plastico' && itemPosition >= 33 && itemPosition < 66) ||
          (item.type === 'vidrio' && itemPosition >= 66)
        ) {
          setScore((prevScore) => prevScore + 1);
        }
        setCurrentItem(null); // Remove current item
      }
    };

    const intervalId = setInterval(() => {
      if (currentItem) {
        setCurrentItem((prevItem) => {
          if (!prevItem) return null;
          const newItem = { ...prevItem, top: prevItem.top + 5 };
          handleCollision(newItem);
          return newItem;
        });
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, [currentItem, itemPosition]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="game-container">
      <div className="game-area">
        {currentItem && (
          <img
            src={currentItem.image}
            alt={currentItem.type}
            className="falling-item"
            style={{ top: `${currentItem.top}%`, left: `${itemPosition}%` }}
          />
        )}
        <div className="bins">
          <div className="bin-container">
            <div className="bin-label">Papel</div>
            <img src={tachoPapelImg} alt="tacho papel" className="bin" />
          </div>
          <div className="bin-container">
            <div className="bin-label">Plástico</div>
            <img src={tachoPlasticoImg} alt="tacho plastico" className="bin" />
          </div>
          <div className="bin-container">
            <div className="bin-label">Vidrio</div>
            <img src={tachoVidrioImg} alt="tacho vidrio" className="bin" />
          </div>
        </div>
      </div>
      <div className="score">Puntuación: {score}</div>
    </div>
  );
};

export default ReciclaYReutiliza;