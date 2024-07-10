import React from 'react';
import './styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/inicio';
import Juegos from './pages/juegos';
import Noticias from './pages/noticias';
import Nosotros from './pages/nosotros';

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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;