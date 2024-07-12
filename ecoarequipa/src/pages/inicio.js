import React from 'react';
import '../styles.css'; 

import text1 from '../assets/text1.png';
import text2 from '../assets/text2.png';
import text3 from '../assets/text3.png';
import objetivo from '../assets/objetivo.png';
import juegos from '../assets/juegos.png';
import noticias from '../assets/noticias.png';
import sobreNosotros from '../assets/sobre-nosotros.png';

const Inicio = () => {
  return (
    <div className="inicio">
      <section className="background-section">
        <div className="hero">
          <img src={text1} style={{ width: '500px', height: 'auto' }} alt="Texto 1" />
          <img src={text2} alt="Texto 2" />
          <img src={text3} style={{ width: '1000px', height: 'auto' }} alt="Texto 3" />
        </div>
      </section>

      <a href="/objetivo" className="section-link">
        <section className="objective-section section">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">Nuestro Objetivo</h2>
              <p className="section-description">EcoArequipa se dedica a promover la conciencia ambiental entre los niños utilizando juegos interactivos y contenido educativo con escenarios de nuestra linda ciudad. La plataforma está desarrollada especialmente para los niños de Arequipa con el objetivo de concientizarlos sobre la importancia del cuidado del medio ambiente a través de actividades lúdicas y educativas que reflejan la belleza y los desafíos ambientales de nuestra región.</p>
            </div>
            <img className="section-image" src={objetivo} alt="Imagen de objetivo" />
          </div>
        </section>
      </a>

      <a href="/juegos" className="section-link">
        <section className="games-section section">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">Juegos</h2>
              <p className="section-description">Descubre nuestra colección de juegos diseñados para enseñar a los niños sobre el cuidado ambiental en Arequipa. Cada juego ofrece una experiencia interactiva única que combina diversión y aprendizaje sobre los desafíos y la belleza de nuestra región.</p>
            </div>
            <img className="section-image" src={juegos} alt="Imagen de juegos" />
          </div>
        </section>
      </a>

      <a href="/noticias" className="section-link">
        <section className="news-section section">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">Noticias</h2>
              <p className="section-description">Mantente al día con las últimas noticias y eventos relacionados con el medio ambiente en Arequipa. Aquí encontrarás información relevante sobre iniciativas locales, proyectos ambientales y actividades comunitarias para el cuidado de nuestro entorno.</p>
            </div>
            <img className="section-image" src={noticias} alt="Imagen de noticias" />
          </div>
        </section>
      </a>

      <a href="/nosotros" className="section-link">
        <section className="sobre-nosotros-section section">
          <div className="section-content">
            <div className="section-text">
              <h2 className="section-title">Sobre Nosotros</h2>
              <p className="section-description">Conoce más sobre EcoArequipa y nuestro compromiso con la educación ambiental en Arequipa. Descubre quiénes somos, nuestros valores y cómo puedes unirte a nuestra comunidad para hacer una diferencia positiva en el medio ambiente local.</p>
            </div>
            <img className="section-image" src={sobreNosotros} alt="Imagen de Sobre Nosotros" />
          </div>
        </section>
      </a>
    </div>
  );
}

export default Inicio;
