import React from 'react';
import '../nosotros.css';
import introduccion from '../assets/introduccion-image.png';
import mision from '../assets/text2.png';
import ofrecemos from '../assets/text3.png';
import equipo from '../assets/objetivo.png';
import contacto from '../assets/juegos.png';
import nosotros from '../assets/nosotros.png';

const Nosotros = () => {
  return (
    <div className="nosotros">
	<h1>NOSOTROS</h1> 
	<img src={nosotros} alt="Nosotros" />
	  <section className="section-block">
        <h2>Introducción</h2>
        <p>EcoArequipa es una plataforma web interactiva diseñada para educar y concienciar a los niños sobre la importancia del cuidado medioambiental en Arequipa.</p>
        <img src={introduccion} alt="Introducción" />
      </section>
      <section className="section-block">
        <h2>Nuestra Misión</h2>
        <p>Nuestra misión es inspirar y educar a las futuras generaciones sobre la conservación del medio ambiente mediante juegos educativos y actividades divertidas. Queremos que los niños aprendan la importancia de cuidar nuestro planeta mientras se divierten.</p>
        <img src={mision} alt="Nuestra Misión" />
      </section>
      <section className="section-block">
        <h2>Lo que Ofrecemos</h2>
        <ul>
          <li>Juegos Educativos: Juegos interactivos que enseñan a los niños sobre el reciclaje, la conservación del agua y otras prácticas sostenibles.</li>
          <li>Actividades Divertidas: Actividades que fomentan la creatividad y el aprendizaje, como manualidades y experimentos simples que se pueden realizar en casa.</li>
          <li>Exploración de Arequipa: Escenarios virtuales que representan lugares icónicos de Arequipa, permitiendo a los niños explorar y aprender sobre la flora, fauna y cultura de la región.</li>
        </ul>
        <img src={ofrecemos} alt="Lo que Ofrecemos" />
      </section>
      <section className="section-block">
        <h2>Nuestro Equipo</h2>
        <p>Un equipo dedicado de educadores, desarrolladores y diseñadores apasionados por el medio ambiente y la educación infantil.</p>
        <img src={equipo} alt="Nuestro Equipo" />
      </section>
      <section className="section-block">
        <h2>Contacto</h2>
        <p>Para más información o preguntas, pueden contactarnos en [correo electrónico] o seguirnos en nuestras redes sociales.</p>
        <img src={contacto} alt="Contacto" />
      </section>
    </div>
  );
}
;export default Nosotros;

