import React from 'react';
import Card from './Card';
import { PokemonEntry } from '../types/pokemonTypes';
import s from './Content.module.css';

interface ContentProps {
    pokemonData?: PokemonEntry[];
}

const Content: React.FC<ContentProps> = ({ pokemonData }) => {
    return (
        <div className={s.Content}>
            {pokemonData?.map((pokemon) => (
                <Card key={pokemon.number} {...pokemon} />
            ))}
        </div>
    );
};

export default Content;
