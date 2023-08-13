export interface PokemonImage {
  url: string;
  width: number;
  height: number;
}

export interface PokemonEntry {
  number: string;
  name: string;
  types: string[];
  image: PokemonImage;
}

export interface PokemonData {
  entries: PokemonEntry[];
}
