// components/Header.js
import React from 'react';
import './Header.css';
import logo from '../assets/logoEcoArequipa.png'; // Cambio de extensión a .png

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Logo EcoArequipa" className="header-logo" />
        <span>EcoArequipa</span>
      </div>
      <nav className="nav">
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Nosotros</a></li>
          <li><a href="/games">Juegos</a></li>
          <li><a href="/news">Noticias</a></li>
          {/* Agrega más enlaces según sea necesario */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
