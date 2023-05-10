import React, {useEffect, useState} from 'react'
import {getPokemonByName} from '../../api/getPokemons';
import {Link} from "react-router-dom";

const PokemonCard = ({pokemon}) => {
    const [pokemonInfo, setPokemonInfo] = useState();

    useEffect(() => {
        getPokemonByName(pokemon.name)
            .then((data) => {
                setPokemonInfo(data)
            })
    }, [pokemon.name])


    return (
        <div>
            <Link to={`/pokemon/${pokemon.name}`} className='pokemonCard'>
                {pokemon.name}
                <img src={pokemonInfo && pokemonInfo.sprites.other.dream_world.front_default} alt=""/>
            </Link>
        </div>
    )
}

export default PokemonCard