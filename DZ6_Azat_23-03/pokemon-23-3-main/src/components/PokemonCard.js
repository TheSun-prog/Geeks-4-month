import React, {useEffect, useState} from 'react'


const PokemonCard = ({pokemon, getPokemon}) => {
    const [pokemonImg, setPokemonImg] = useState()


    useEffect(() => {
        getPokemon(pokemon.url)
            .then(data => {
                setPokemonImg(data.sprites.other.dream_world.front_default)
            })
    })

    return (
        <div className='pokemonCard'>
            {pokemon.name}
            <img src={pokemonImg} alt={pokemon.name}/>
        </div>
    )
}

export default PokemonCard