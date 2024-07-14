import React, { useState } from 'react';
import '../styles/HuertoSabandia.css';
import seed from '../assets/seed.png';
import wateringCan from '../assets/watering_can.png';
import vegetable from '../assets/vegetable.png';
import plot from '../assets/plot.jpg';

const HuertoSabandia = () => {
  const [plots, setPlots] = useState(Array(5).fill(null)); // 5 plots for planting
  const [score, setScore] = useState(0);

  const handlePlantSeed = (index) => {
    const newPlots = [...plots];
    if (newPlots[index] === null) {
      newPlots[index] = 'seed';
      setPlots(newPlots);
    }
  };

  const handleWaterPlant = (index) => {
    const newPlots = [...plots];
    if (newPlots[index] === 'seed') {
      newPlots[index] = 'watered';
      setPlots(newPlots);
    }
  };

  const handleGrowVegetable = (index) => {
    const newPlots = [...plots];
    if (newPlots[index] === 'watered') {
      newPlots[index] = 'vegetable';
      setPlots(newPlots);
    }
  };

  const handleHarvestVegetable = (index) => {
    const newPlots = [...plots];
    if (newPlots[index] === 'vegetable') {
      newPlots[index] = null;
      setScore(score + 1);
      setPlots(newPlots);
    }
  };

  return (
    <div className="huerto-container">
      <h1>Huerto de Sabandía</h1>
      <div className="huerto-area">
        {plots.map((plotState, index) => (
          <div 
            key={index} 
            className="plot" 
            onClick={() => {
              if (plotState === null) handlePlantSeed(index);
              else if (plotState === 'seed') handleWaterPlant(index);
              else if (plotState === 'watered') handleGrowVegetable(index);
              else if (plotState === 'vegetable') handleHarvestVegetable(index);
            }}
          >
            <img src={plot} alt="Plot" className="plot-img" />
            {plotState === 'seed' && <img src={seed} alt="Seed" className="seed-img" />}
            {plotState === 'watered' && <img src={wateringCan} alt="Watering Can" className="watering-can-img" />}
            {plotState === 'vegetable' && <img src={vegetable} alt="Vegetable" className="vegetable-img" />}
          </div>
        ))}
      </div>
      <div className="score">Puntuación: {score}</div>
    </div>
  );
};

export default HuertoSabandia;