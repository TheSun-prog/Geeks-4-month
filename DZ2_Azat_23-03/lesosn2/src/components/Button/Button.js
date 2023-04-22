import classes from "./Button.module.css";

const Button = ({ children, handleClick }) => {
    return(
        <button className={classes.btn} onClick={handleClick}>{ children }</button>
    )
}

export default Button