import classes from "./Input.module.css";


const Input = ({ name, placeholder, onChange, value }) => {

    return(
        <input className={ classes.input } type="text" name={ name } onChange={ onChange } placeholder={ placeholder } value={ value }/>
    )
}


export default Input