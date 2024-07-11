import React from 'react';
import Juego from './Juego';

const ListaDeJuegos = () => {
  const juegos = [
    {
      title: 'Recicla y Reutiliza',
      description: 'Un juego que enseña a los niños la importancia de reciclar y cómo clasificar los diferentes tipos de residuos (papel, plástico, vidrio, orgánico, etc.).',
      image: 'ruta_a_la_imagen_del_juego1.jpg'
    },
    {
      title: 'Ahorra Energía',
      description: 'Un juego en el que los niños deben identificar aparatos electrónicos y luces que se han dejado encendidos y apagarlos para ahorrar energía.',
      image: 'ruta_a_la_imagen_del_juego2.jpg'
    },
    {
      title: 'Aventura en la Naturaleza',
      description: 'Un juego de exploración en el que los niños deben encontrar diferentes plantas y animales, aprendiendo sobre su importancia y cómo protegerlos.',
      image: 'ruta_a_la_imagen_del_juego3.jpg'
    },
    {
      title: 'El Ciclo del Agua',
      description: 'Un juego interactivo que explica el ciclo del agua de una manera divertida y visual, enseñando a los niños sobre la importancia del agua y cómo conservarla.',
      image: 'ruta_a_la_imagen_del_juego4.jpg'
    },
    {
      title: 'Huerto Orgánico',
      description: 'Un juego donde los niños pueden plantar, cuidar y cosechar un huerto orgánico, aprendiendo sobre la agricultura sostenible y la importancia de los alimentos orgánicos.',
      image: 'ruta_a_la_imagen_del_juego5.jpg'
    },
    {
      title: 'Detective de la Contaminación',
      description: 'Investiga y encuentra fuentes de contaminación y toma medidas para reducirla.',
      image: 'ruta_a_la_imagen_del_juego6.jpg'
    },
    {
      title: 'Energías Renovables',
      description: 'Aprende sobre las diferentes fuentes de energía renovable y su importancia.',
      image: 'ruta_a_la_imagen_del_juego7.jpg'
    },
    {
      title: 'Guardianes del Planeta',
      description: 'Conviértete en un guardián del planeta y protege la naturaleza de los peligros que la amenazan.',
      image: 'ruta_a_la_imagen_del_juego8.jpg'
    },
  ];

  return (
    <div className="lista-de-juegos">
      {juegos.map((juego, index) => (
        <Juego 
          key={index}
          title={juego.title}
          description={juego.description}
          image={juego.image}
        />
      ))}
    </div>
  );
};

export default ListaDeJuegos;
