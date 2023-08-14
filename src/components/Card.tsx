import { PokemonEntry } from '../types/pokemonTypes';
import { getTypeColor } from '../utils/getTypeColor';
import { formatNumberWithLeadingZeros } from '../utils/numberUtils';
import s from './Card.module.css';

export default function Card({ name, number, types, image }: PokemonEntry) {
    const formattedNumber = formatNumberWithLeadingZeros(number, 3);
    return (
        <div className={s.Card}>
            <div className={s.imgBox}>
                <img src={image.url} alt={name} width={image.width} height={image.height} />
            </div>
            <div className={s.textBox}>
                <span>#{formattedNumber}</span>
                <h3>{name}</h3>
                <div className={s.types}>
                    {types.map((type, index) => (
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
        </div>
    );
}
