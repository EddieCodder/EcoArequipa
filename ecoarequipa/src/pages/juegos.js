import React from 'react';
import ListaDeJuegos from '../components/ListaDeJuegos';
import '../styles.css';

const Juegos = () => {
  return (
    <div className="juegos">
      <h1>Juegos</h1>
      <p>Esta es la sección de juegos educativos para el cuidado del medio ambiente. ¡Diviértete mientras aprendes a cuidar nuestro planeta!</p>
      <ListaDeJuegos />
    </div>
  );
}

export default Juegos;
