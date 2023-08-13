import React from 'react';
import Card from './Card';
import { PokemonEntry } from '../types/pokemonTypes';

interface ContentProps {
    pokemonData?: PokemonEntry[];
}

const Content: React.FC<ContentProps> = ({ pokemonData }) => {
    return (
        <div>
            {pokemonData?.map((pokemon) => (
                <Card key={pokemon.number} {...pokemon} />
            ))}
        </div>
    );
};

export default Content;
