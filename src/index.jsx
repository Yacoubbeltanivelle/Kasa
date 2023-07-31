import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import './styles/index.scss';
import Home from './pages/Home';
import APropos from './pages/APropos';
import FicheLogement from './pages/FicheLogement';
import Header from './components/Header';
import Footer from './components/Footer';
import Erreur from './pages/Erreur';

const rootElement = document.getElementById('root');

createRoot(rootElement).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        {/* La page FicheLogement recoit l'Id du produit à afficher */}
        <Route path="/logement/:id" element={<FicheLogement />} />
        <Route path="erreur" element={<Erreur />} />
        <Route path="*" element={<Navigate to="/erreur" />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
