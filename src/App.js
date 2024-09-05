import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './components/PokemonList';
import PokemonDetail from './components/PokemonDetail';
import SearchBar from './components/SearchBar';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <Router>
      <div className="app">
        <header className="header">Joseph Ovey - Pokémon Viewer</header>
        <SearchBar onSearch={handleSearch} />
        <Routes>
          <Route path="/" element={<PokemonList searchTerm={searchTerm} />} />
          <Route path="/pokemon/:name" element={<PokemonDetail />} />
        </Routes>
        <footer className="footer">© Joseph Ovey - 2024 Pokémon Viewer</footer>
      </div>
    </Router>
  );
};

export default App;
