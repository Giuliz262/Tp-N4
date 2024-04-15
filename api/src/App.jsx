import React, { useState } from 'react';
import Caracteres from './components/Caracteres';

function App() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showCharacters, setShowCharacters] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://dog.ceo/api/breed/pug/images');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setCharacters(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleCharacters = () => {
    setShowCharacters(!showCharacters);
  };

  return (
    <div>
      <h1>Perros Pug</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Cargando...' : 'Cargando Imágenes'}
      </button>
      <button onClick={toggleCharacters}>
        {showCharacters ? 'Eliminar' : 'Mostrar'}
      </button>
      {showCharacters && characters.length > 0 && <Caracteres characters={characters} />}
    </div>
  );
}

export default App;
