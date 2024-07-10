// components/Header.js
import React from 'react';
import './Header.css'; // Importa el archivo de estilos CSS
import logo from '../assets/logoEcoArequipa.png'; // Importa la imagen del logo

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo" />
        <span>Nombre de tu Aplicación</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/juegos">Juegos</a></li>
          <li><a href="/noticias">Noticias</a></li>
          <li><a href="/nosotros">Nosotros</a></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
