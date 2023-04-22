import classes from "./Container.module.css";


const Container = ( { sectionName, children } ) => {
    return (
        <section className={ sectionName }>
            <div className={ classes.container }>
                <div className={ `${sectionName}__inner` }>

                    { children }

                </div>
            </div>
        </section>
    )
}

export default Container
