import React from 'react';
import ListaDeJuegos from '../components/ListaDeJuegos';
import '../styles.css';
import juegosImagen from '../assets/juegos-text.png';

const Juegos = () => {
  return (
    <div className="juegos">
      <img src={juegosImagen} alt='juegos-text' className='juegos-text' />
      <p>Esta es la sección de juegos educativos para el cuidado del medio ambiente. ¡Diviértete mientras aprendes a cuidar nuestro planeta!</p>
      <ListaDeJuegos />
    </div>
  );
}

export default Juegos;
