import React, { useState } from 'react';
import guardianesImage from '../assets/game8.jpg';

const GuardianesArequipa = () => {
  const [actions, setActions] = useState([]);
  const possibleActions = ['plantar árbol', 'limpiar parque', 'recolectar reciclables'];

  const handleAction = (action) => {
    if (!actions.includes(action)) {
      setActions([...actions, action]);
    }
  };

  return (
    <div className="juego-detalle">
      <h1>Guardianes de Arequipa</h1>
      <img src={guardianesImage} alt="Guardianes de Arequipa" />
      <p>Conviértete en un guardián de Arequipa y protege la naturaleza de los peligros que la amenazan en la región.</p>
      <div className="planet-guardian-game">
        {possibleActions.map(action => (
          <button key={action} onClick={() => handleAction(action)}>{action}</button>
        ))}
      </div>
      <p>Acciones realizadas: {actions.join(', ')}</p>
    </div>
  );
}

export default GuardianesArequipa;
