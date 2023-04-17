import './Header.css'
import Links from "../Links/Links";

// String | Array( Object( href,text ), ... ) | String
const Header = ( { logo, navs, contacts } ) => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__inner">
                    <h2 className="logo"> { logo.text } </h2>
                    <Links
                        linksInfo={ navs }
                    />
                    <p> { contacts } </p>
                </div>
            </div>
        </header>
    );
};

export default Header