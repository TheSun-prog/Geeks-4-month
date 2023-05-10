import {useState, useEffect} from 'react';
import './App.css';
import {fetchPokemons, fetchPokemonData} from './api/getPokemons';
import {Routes, Route} from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import PokemonInfo from "./pages/PokemonInfo/PokemonInfo";
import MainPage from "./pages/MainPage/MainPage";


function App() {
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
        <div className={`app ${theme}`}>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
                <Route path={'/about-us'} element={<AboutUs/>}/>
            </Routes>
        </div>
    );
}

export default App;
