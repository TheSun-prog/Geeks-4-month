import './App.css';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div>
            <Header
                logo={ {text: 'Logo'} }
                navs={ [
                    {text: 'Main', href: ''},
                    {text: 'Contacts', href: ''},
                    {text: 'Shop', href: ''}
                ] }
                contacts={ 'NumPhone' }
            />
            <Main
                headTitle={ 'Main Title' }
                subTitle={ 'Sub Title' }
            />
            <Footer
                links={ [
                    {text: 'About us', href: ''}
                ] }
            />
        </div>
);
}

export default App;
