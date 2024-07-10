import React from 'react';
import '../styles.css'; // Asegúrate de importar correctamente los estilos generales

const Inicio = () => {
  return (
    <div className="inicio">
      <section className="background-section">
        <div className="hero">
          <h1>Bienvenidos a EcoArequipa</h1>
          <p>¡Explora y aprende sobre la importancia de cuidar nuestro medio ambiente!</p>
        </div>
      </section>
      <section className="objective-section">
        <div className="objective-content">
          <h1>Nuestro Objetivo</h1>
        </div>
      </section>
    </div>
  );
}

export default Inicio;
