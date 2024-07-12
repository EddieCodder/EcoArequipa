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
          <p>EcoArequipa se dedica a promover la conciencia ambiental entre los niños utilizando juegos interactivos y contenido educativo usando escenarios de nuestra linda ciudad.</p>
        </div>
      </section>
      <section className="content-section">
        <div className="content">
          <h2>Más Información</h2>
          <p>En esta sección, puedes agregar más detalles sobre tu proyecto, eventos próximos, noticias relevantes, o cualquier otra información que desees destacar.</p>
        </div>
      </section>
      <section className="activities-section">
        <div className="activities">
          <h2>Actividades</h2>
          <p>Aquí puedes describir algunas de las actividades que ofrecemos, como talleres, charlas, y actividades interactivas para los niños.</p>
        </div>
      </section>
      <section className="contact-section">
        <div className="contact">
          <h2>Contacto</h2>
          <p>Para más información, puedes ponerte en contacto con nosotros a través de nuestro correo electrónico o redes sociales.</p>
          
        </div>
      </section>
    </div>
  );
}

export default Inicio;
