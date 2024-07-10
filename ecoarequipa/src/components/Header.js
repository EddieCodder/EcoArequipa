// components/Header.js
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/logo.svg" alt="Logo" />
        <span>Nombre de tu Aplicación</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/Juegos">Nosotros</a></li>
          <li><a href="/Noticias">Nosotros</a></li>
          <li><a href="/Nosotros">Nosotros</a></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
