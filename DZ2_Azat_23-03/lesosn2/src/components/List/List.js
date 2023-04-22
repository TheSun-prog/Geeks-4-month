import classes from "./List.module.css";
import {useState} from "react";
import Input from "../Input/Input";


const List = ({ data }) => {

    const [filter, setFilter] = useState('')

    const changeFilter = (event) => {
        setFilter(event.target.value)
    }

    return(
        <>
            <div className={ classes.list }>
                <Input name={ 'filter' } placeholder={ 'Filter' } value={ filter } onChange={ changeFilter }/>
                { data.map((el, index) => {
                    if ((el.name.toLowerCase()).includes(filter) && filter || !filter) {
                        return (
                            <div className={classes.row} key={index}>
                                <h2>Name: {el.name}</h2>
                                <p>Description: {el.desc}</p>
                            </div>)
                    }
                })}
            </div>
        </>
    )
}


export default List