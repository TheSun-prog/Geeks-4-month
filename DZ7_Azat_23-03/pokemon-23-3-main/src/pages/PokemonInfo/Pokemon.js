import React, {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import {getPokemonByName} from "../../api/getPokemons";
import Header from "../../components/Header/Header";

const Pokemon = ({toggleTheme}) => {

    const [pokemonInfo, setPokemonInfo] = useState()
    const { name } = useParams()

    useEffect(() => {
        getPokemonByName(name).then(data => {
            setPokemonInfo(data)
        })
    }, [ name ])


    return (
        <>
            <Header toggleTheme={toggleTheme}/>
            <div className="pokemon">
                <div className="container">
                    <div className="pokemon__inner">
                        <img src={pokemonInfo?.sprites.other.dream_world.front_default} alt=""/>
                        <p>Name: {pokemonInfo?.name}</p>
                        <p>Weight: {pokemonInfo?.weight}</p>
                        <div className="abilities">
                            <p>Abilities:</p>
                            <ol>
                                {pokemonInfo?.abilities.map((data, index) => {
                                    return( <li key={index}><p>{data.ability.name}</p></li>)
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pokemon