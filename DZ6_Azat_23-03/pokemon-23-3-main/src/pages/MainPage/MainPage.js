import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Pagination from "../../components/Pagination";
import PokemonCard from "../../components/PokemonCard";
import {fetchPokemonData, fetchPokemons} from "../../api/getPokemons";


const MainPage = () => {

    const [theme, setTheme] = useState(localStorage.getItem('defaultTheme'));
    const [pokemonList, setPokemonList] = useState([])
    const [offset, setOffset] = useState(1)
    const [page, setPage] = useState(1)
    const [count, setCount] = useState(1)
    const limit = 4


    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('defaultTheme', newTheme)
        setTheme(newTheme);
    }

    const handleNext = () => {
        if (offset >= 1281) return
        setOffset(prevState => prevState + limit)
        setPage(prevState => prevState + 1)
    }

    const handlePrev = () => {
        if (offset <= 1) return
        setOffset(prevState => prevState > 1 ? prevState - limit : null)
        setPage(prevState => prevState - 1)
    }


    useEffect(() => {
        fetchPokemons({limit, offset}).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [offset])
    return (
        <>
            Pokemon project
            <button onClick={toggleTheme}>Change theme</button>
            <Pagination
                page={page}
                count={count}
                handleNext={handleNext}
                handlePrev={handlePrev}
            />
            <div className='pokemonList'>
                {pokemonList.map(pokemon =>
                    <PokemonCard
                        pokemon={pokemon}
                        getPokemon={fetchPokemonData}
                    />
                )}

            </div>
        </>
    )
}


export default MainPage