import classes from "./Input.module.css";


const Input = ({ name, placeholder, value, onChange }) => {
    return(
        <input onChange={ onChange } type="text" name={ name } className={ classes.taskInput } placeholder={ placeholder } value={ value }/>
    )
}


export default Input