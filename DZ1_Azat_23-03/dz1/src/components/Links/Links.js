import './Links.css'


const Links = ( { linksInfo } ) => {
    return (
        <ul className="links">
            { linksInfo.map(el => <li><a href={ el.href }>{ el.text }</a></li>) }
        </ul>
    )
}


export default Links