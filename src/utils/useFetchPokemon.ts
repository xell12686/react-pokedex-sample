import { useEffect, useState } from "react";
import { PokemonData } from "../types/pokemonTypes";

const useFetchPokemon = (url: string) => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchPokemon;
