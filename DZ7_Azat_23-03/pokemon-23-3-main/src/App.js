import {Routes, Route} from "react-router-dom";
import './App.css';
import MainPage from "./pages/MainPage/MainPage";
import AboutUs from "./pages/AboutUs/AboutUs";
import Pokemon from "./pages/PokemonInfo/Pokemon";
import {useState} from "react";


function App() {
    const [theme, setTheme] = useState(localStorage.getItem('defaultTheme'));

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('defaultTheme', newTheme)
    }

    return (
        <>
            <Routes>
                <Route path='/' element={<MainPage
                    toggleTheme={toggleTheme}
                    theme={theme}
                />}/>
                <Route path='/about-us' element={<AboutUs
                    toggleTheme={toggleTheme}
                />}/>
                <Route path='/pokemon/:name' element={<Pokemon
                    toggleTheme={toggleTheme}
                />}/>
            </Routes>
        </>
    )
}

export default App;
