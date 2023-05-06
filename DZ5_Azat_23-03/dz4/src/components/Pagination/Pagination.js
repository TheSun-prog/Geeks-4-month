import classes from "./Pagination.module.css";

const Pagination = ({handleNext, handlePrev, page}) => {
    return(
        <div className={classes.pagination}>
            <button onClick={handlePrev}>Prev</button>
            <p>{page}</p>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Pagination