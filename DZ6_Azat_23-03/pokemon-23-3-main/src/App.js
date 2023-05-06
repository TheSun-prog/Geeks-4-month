import {useState, useEffect} from 'react';
import './App.css';
import {fetchPokemons, fetchPokemonData} from './api/getPokemons';
import PokemonCard from './components/PokemonCard';

function App() {
    const [theme, setTheme] = useState(localStorage.getItem('theme'));
    const [pokemonList, setPokemonList] = useState([])



    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem('theme', theme)
        setTheme(newTheme);
    }

    useEffect(() => {
        fetchPokemons().then((data) => {
            setPokemonList([...data.results])
        })
    }, [])


    return (
        <div className={`app ${theme}`}>
            <div className='container'>
                Pokemon project
                <button onClick={toggleTheme}>Change theme</button>
                <div className='pokemonList'>
                    {pokemonList.map(pokemon =>
                        <PokemonCard
                            pokemon={pokemon}
                            getPokemon={fetchPokemonData}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
