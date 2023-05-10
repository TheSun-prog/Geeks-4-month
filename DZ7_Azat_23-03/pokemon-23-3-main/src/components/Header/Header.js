import {Link} from "react-router-dom";


const Header = ({toggleTheme}) => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__inner">
                    <h1>Pokemon</h1>
                    <ul>
                        <li><Link to={'/'}>Main Page</Link></li>
                        <li><Link to={'/about-us'}>About Us</Link></li>
                    </ul>
                    <button onClick={toggleTheme}>Change theme</button>
                </div>
            </div>
        </div>
    )
}

export default Header