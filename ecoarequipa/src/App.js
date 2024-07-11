import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Juegos from './pages/juegos';
import Noticias from './pages/noticias';
import Nosotros from './pages/nosotros';
import ReciclayReutiliza from './games/ReciclaYReutiliza';
import AhorraEnergia from './games/AhorraEnergia';
import AventuraEnLaNaturaleza from './games/AventuraEnLaNaturaleza';
import ElCicloDelAgua from './games/CicloDelAgua';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/juegos" element={<Juegos />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/reciclayreutiliza" element={<ReciclayReutiliza />} />
          <Route path="/ahorraenergia" element={<AhorraEnergia />} />
          <Route path="/aventuraenlanaturaleza" element={<AventuraEnLaNaturaleza />} />
          <Route path="/elciclodelagua" element={<ElCicloDelAgua />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;