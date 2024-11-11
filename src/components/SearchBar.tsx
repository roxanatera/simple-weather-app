import React, { useState } from 'react';

type SearchBarProps = {
  onSearch: (city: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
      setCity('');
    }
  };

  return (
    <div className="flex items-center justify-center mb-6 w-full max-w-md">
      <input
        type="text"
        className="w-full p-3 text-gray-800 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Escribe el nombre de una ciudad"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ fontSize: '1rem' }} 
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-r-md transition"
        style={{ fontSize: '1rem' }} 
      >
        Buscar
      </button>
    </div>
  );
};

export default SearchBar;

