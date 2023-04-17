import './Footer.css'
import Links from "../Links/Links";


const Footer = ( { links } ) => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__inner">
                    <Links
                        linksInfo={ links }
                    />
                </div>
            </div>
        </footer>
    )
}

export default Footer