import React from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import useFetchPokemon from './utils/useFetchPokemon';

function App() {
  const { data, loading, error } = useFetchPokemon('/data/pokemon.json'); // Use the custom hook to fetch Pokémon data

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          {loading ? (
            <div>Loading...</div> // Loading message
          ) : error ? (
            <div>Error: {error}</div> // Error message
          ) : (
            <Content pokemonData={data?.entries} /> // Pass Pokémon data to the Content component
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
