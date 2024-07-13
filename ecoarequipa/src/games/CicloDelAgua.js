import React, { useState } from 'react';
import evaporacionImg from '../assets/evaporacion.png';
import condensacionImg from '../assets/condensacion.png';
import precipitacionImg from '../assets/precipitacion.png';

const ElCicloDelAgua = () => {
  const [steps, setSteps] = useState([]);

  const cycleSteps = [
    { name: 'Evaporación', img: evaporacionImg },
    { name: 'Condensación', img: condensacionImg },
    { name: 'Precipitación', img: precipitacionImg },
  ];

  const handleStepClick = (step) => {
    if (!steps.includes(step.name)) {
      setSteps([...steps, step.name]);
    }
  };

  return (
    <div className="game-container">
      <h1>El Ciclo del Agua</h1>
      <p>Aprende sobre el ciclo del agua de una manera interactiva.</p>
      <div className="steps">
        {cycleSteps.map((step, index) => (
          <div key={index} className="step" onClick={() => handleStepClick(step)}>
            <img src={step.img} alt={step.name} />
            <p>{step.name}</p>
          </div>
        ))}
      </div>
      <div className="completed-steps">
        <h2>Pasos Completados:</h2>
        <ul>
          {steps.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ElCicloDelAgua;
