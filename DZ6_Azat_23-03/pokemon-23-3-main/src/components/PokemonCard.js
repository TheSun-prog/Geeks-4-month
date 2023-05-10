import React, {useEffect, useState} from 'react'


const PokemonCard = ({pokemon, getPokemon}) => {
    const [pokemonImg, setPokemonImg] = useState()


    useEffect(() => {
        getPokemon(pokemon.name)
            .then(data => {
                setPokemonImg(data.sprites.other.dream_world.front_default)
            })
    })

    return (
        <div className='pokemonCard'>
            {pokemon.name}
            <div className="img" style={{backgroundImage: `url(${pokemonImg})`}}></div>
        </div>
    )
}

export default PokemonCard