import React from 'react';
import { PokemonEntry } from '../types/pokemonTypes';
import { getTypeColor } from '../utils/getTypeColor'; 

export default function Card({ name, number, types, image }: PokemonEntry) {
  return (
    <div className="card">
      <img src={image.url} alt={name} width={image.width} height={image.height} />
      <h3>{name}</h3>
      <p>Number: {number}</p>
      <div>
        Types: {types.map((type, index) => (
          <button
            key={index}
            style={{ backgroundColor: getTypeColor(type), color: 'white' }} 
            disabled
          >
            {type}
          </button>
        ))}
      </div>
    </div>
  );
}
