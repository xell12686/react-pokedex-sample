import { useState, useEffect } from "react";
import { PokemonData } from "../types/pokemonTypes";

const useFetchPokemon = (url: string) => {
  const [data, setData] = useState<PokemonData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    Promise.all([
      fetch(url).then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      }),
      delay(1000),
    ])
      .then(([jsonData]) => {
        if (!jsonData.total || !jsonData.entries) {
          throw new Error("Incomplete JSON data");
        }
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetchPokemon;
