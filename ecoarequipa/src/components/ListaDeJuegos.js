import React from 'react';
import Juego from './Juego';

/*
import game1 from '../assets/game1.jpg';
import game2 from '../assets/game2.jpg';
import game3 from '../assets/game3.jpg';
import game4 from '../assets/game4.jpg';
import game5 from '../assets/game5.jpg';
import game6 from '../assets/game6.jpg';
import game7 from '../assets/game7.jpg';
import game8 from '../assets/game8.jpg';
*/

import images from '../assets/imageImports';

const ListaDeJuegos = () => {
  const juegos = [
    {
      title: 'Recicla y Reutiliza',
      description: 'Un juego que enseña a los niños la importancia de reciclar y cómo clasificar los diferentes tipos de residuos (papel, plástico, vidrio, orgánico, etc.).',
      image: images['game1.jpg'],
      link: '/reciclayreutiliza'
    },
    {
      title: 'Ahorra Energía',
      description: 'Un juego en el que los niños deben identificar aparatos electrónicos y luces que se han dejado encendidos y apagarlos para ahorrar energía.',
      image: images['game2.jpg'],
      link: '/ahorraenergia'
    },
    {
      title: 'Aventura en la Naturaleza',
      description: 'Un juego de exploración en el que los niños deben encontrar diferentes plantas y animales, aprendiendo sobre su importancia y cómo protegerlos.',
      image: images['game3.jpg'],
      link: '/aventuraenlanaturaleza'
    },
    {
      title: 'El Ciclo del Agua',
      description: 'Un juego interactivo que explica el ciclo del agua de una manera divertida y visual, enseñando a los niños sobre la importancia del agua y cómo conservarla.',
      image: images['game4.jpg'],
      link: '/elciclodelagua'
    },
    {
      title: 'Huerto Orgánico',
      description: 'Un juego donde los niños pueden plantar, cuidar y cosechar un huerto orgánico, aprendiendo sobre la agricultura sostenible y la importancia de los alimentos orgánicos.',
      image: images['game5.jpg'],
      link: '/'
    },
    {
      title: 'Detective de la Contaminación',
      description: 'Investiga y encuentra fuentes de contaminación y toma medidas para reducirla.',
      image: images['game6.jpg'],
      link: '/'
    },
    {
      title: 'Energías Renovables',
      description: 'Aprende sobre las diferentes fuentes de energía renovable y su importancia.',
      image: images['game7.jpg'],
      link: '/'
    },
    {
      title: 'Guardianes del Planeta',
      description: 'Conviértete en un guardián del planeta y protege la naturaleza de los peligros que la amenazan.',
      image: images['game8.jpg'],
      link: '/'
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
          link={juego.link}
        />
      ))}
    </div>
  );
};

export default ListaDeJuegos;
