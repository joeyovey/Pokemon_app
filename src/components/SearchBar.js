import React from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const handleSearch = (event) => {
    onSearch(event.target.value);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search Pokemon by name..."
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
