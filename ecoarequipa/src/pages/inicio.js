import React from 'react';
import '../styles.css'; // Asegúrate de importar correctamente los estilos generales

const Inicio = () => {
  return (
    <div className="inicio">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenidos a EcoArequipa</h1>
          {/* Aquí puedes agregar una descripción breve */}
          <p>¡Explora y aprende sobre la importancia de cuidar nuestro medio ambiente!</p>
        </div>
      </section>
      <section className="about">
        <div className="about-content">
          <h2>Nuestro Proyecto</h2>
          <p>
            EcoArequipa se dedica a promover la conciencia ambiental entre los niños y jóvenes,
            utilizando juegos interactivos y contenido educativo.
          </p>
          {/* Agrega más contenido según sea necesario */}
        </div>
      </section>
    </div>
  );
}

export default Inicio;
