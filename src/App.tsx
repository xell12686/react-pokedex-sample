import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';
import useFetchPokemon from './utils/useFetchPokemon';
import s from './App.module.css';

function App() {
  const { data, loading, error } = useFetchPokemon('/data/pokemon.json'); // Use the custom hook to fetch Pokémon data
  if (error) {
    console.debug('useFetchPokemon Error: ', error);
  }
  return (
    <div className={s.App}>
      <Header />
      <main className={s.main}>
        {loading ? (
          <h2>Catching them all..</h2> // Loading message
        ) : error ? (
          <h2>Something wen't wrong. We weren't able to find any pokemon.</h2>
        ) : (
          <Content pokemonData={data?.entries} /> // Pass Pokémon data to the Content component
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;
