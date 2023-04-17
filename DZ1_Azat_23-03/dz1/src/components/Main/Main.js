import './Main.css'


const Main = ( { headTitle, subTitle } ) => {
    return (
        <section className="main">
            <div className="container">
                <div className="main__inner">
                    <div className="title">
                        <h1>{ headTitle }</h1>
                        <p>{ subTitle }</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main