import React, { useState } from 'react';
import '../styles.css';
import noticia1 from '../assets/noticia1.png';
import evento1 from '../assets/evento1.png';

const publicaciones = [
  { id: 1, 
      tipo: 'noticia', 
      titulo: 'CONSERVACION DE ÁREA NATURAL PROTEGIDA QUE GARANTIZARÁ AGUA EN AREQUIPA', 
      contenido: 'En Arequipa, Perú, se han destinado más de 4 millones de soles para proteger un lugar muy especial llamado Reserva Nacional Salinas y Aguada Blanca. Este lugar es vital porque nos asegura tener agua limpia para beber, y también es hogar de muchos animales y plantas. Las comunidades locales están ayudando mucho para cuidar este lugar mágico. ¡Es como un gran equipo trabajando juntos para salvar la naturaleza y asegurar que todos tengamos agua limpia! ¿No es increíble?', 
      imagen: noticia1 },

  { id: 2, 
      tipo: 'evento', 
      titulo: 'GRAN FERIA AMBIENTAL POR LA HORA DEL PLANETA', 
      contenido: '¡Únete a la Gran Feria Ambiental por «La Hora del Planeta»! Este sábado 23 de marzo, te esperamos en la plaza Mayta Cápac de Miraflores para un evento dedicado al medio ambiente. Habrá exposiciones sobre temas ambientales, juegos y talleres para todas las edades. ¡Ven y sé parte de esta bonita actividad! Premiaremos tu participación y juntos apagaremos las luces por 1 hora.', 
      imagen: evento1 },

  // Agrega más noticias y eventos según sea necesario
];

const Noticias = () => {
  const [filtro, setFiltro] = useState('todos');

  const filtrarPublicaciones = (tipo) => {
    setFiltro(tipo);
  };

  const publicacionesFiltradas = publicaciones.filter(publicacion => filtro === 'todos' || publicacion.tipo === filtro);

  return (
    <div className="noticias">
      <h1>Noticias y Eventos</h1>
      <div>
        <button className="filtro-boton" onClick={() => filtrarPublicaciones('todos')}>Todos</button>
        <button className="filtro-boton" onClick={() => filtrarPublicaciones('noticia')}>Noticias</button>
        <button className="filtro-boton" onClick={() => filtrarPublicaciones('evento')}>Eventos</button>
      </div>
      <div className="publicaciones-grid">
        {publicacionesFiltradas.map(publicacion => (
          <div className={`publicacion ${publicacion.tipo}`} key={publicacion.id}>
          <img src={publicacion.imagen} alt={publicacion.titulo} className="noticia-image"/>
          <h2>{publicacion.titulo}</h2>
          <p>{publicacion.contenido}</p>
          <button className="leer-mas-boton">Leer más</button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
