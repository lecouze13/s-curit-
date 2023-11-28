import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Compte from './Composant/Compte';
import Annuaire from './Composant/Annuaire';
import Connexion from './Composant/Connexion';
import Header from './Composant/Header'; // Import du composant Header

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/Compte" element={<Compte />} />
          <Route path="/Annuaire" element={<Annuaire />} />
          <Route path="/Connexion" element={<Connexion />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
