import React, { useState } from 'react';
import '../styles.css';

// Simulación de datos de noticias y eventos
const publicaciones = [
  { id: 1, tipo: 'noticia', titulo: 'Noticia 1', contenido: 'Contenido de la noticia 1' },
  { id: 2, tipo: 'evento', titulo: 'Evento 1', contenido: 'Contenido del evento 1' },
  { id: 3, tipo: 'noticia', titulo: 'Noticia 2', contenido: 'Contenido de la noticia 2' },
  { id: 4, tipo: 'evento', titulo: 'Evento 2', contenido: 'Contenido del evento 2' },
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
        <button onClick={() => filtrarPublicaciones('todos')}>Todos</button>
        <button onClick={() => filtrarPublicaciones('noticia')}>Noticias</button>
        <button onClick={() => filtrarPublicaciones('evento')}>Eventos</button>
      </div>
      <div className="publicaciones-grid">
        {publicacionesFiltradas.map(publicacion => (
          <div key={publicacion.id} className="publicacion">
            <h2>{publicacion.titulo}</h2>
            <p>{publicacion.contenido}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Noticias;
