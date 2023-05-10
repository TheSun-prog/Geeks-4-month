import {fetchPokemons} from "../../api/getPokemons";
import {Pagination, PokemonCard} from "../../components";
import { useState, useEffect} from 'react';
import Header from "../../components/Header/Header";

const MainPage = ({toggleTheme, theme}) => {

    const [pokemonList, setPokemonList] = useState([])
    const [offset, setOFfset] = useState(1);
    const [count, setCount] = useState(1);
    const [page, setPage] = useState(1);
    const limit = 10;


    useEffect(() => {
        fetchPokemons({limit, offset}).then((data) => {
            setPokemonList([...data.results])
            const pageCount = Math.ceil(data.count / limit)
            setCount(pageCount)
        })
    }, [offset])


    const handleNext = () => {
        if (page === count) return
        setOFfset(prev => prev + limit);
        setPage(prev => prev + 1)
    }

    const handlePrev = () => {
        if (page === 1) return
        setOFfset(prev => prev - limit);
        setPage(prev => prev - 1)
    }
    return (
        <div className={`app ${theme}`}>
            <Header toggleTheme={toggleTheme}/>
            <div className="main"></div>
            <div className='container'>
                <div className="main__inner">
                    <Pagination
                        page={page}
                        count={count}
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                    />
                    <div className='pokemonList'>
                        {pokemonList.map(pokemon => <PokemonCard key={pokemon.name} pokemon={pokemon}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MainPage