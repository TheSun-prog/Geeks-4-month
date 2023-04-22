import classes from './Modal.module.css'
import {useState} from "react";
import Input from "../Input/Input";

const Modal = ( { handleShow, addData } ) => {

    const [ taskName, setTaskName ] = useState('')
    const [ taskDesc, setTaskDesc ] = useState('')

    const submitTask = () => {
        if (!taskName) return alert('Error')
        if (!taskDesc) return alert('Error')

        const data = {
            name: taskName,
            desc: taskDesc
        }
        setTaskName('')
        setTaskDesc('')

        addData(data)
    }

    const changeTaskName = (event) => {
        setTaskName(event.target.value)
    }
    const changeDescName = (event) => {
        setTaskDesc(event.target.value)
    }

    return (
        <>
            <div onClick={handleShow} className={ classes.modalWrapper }></div>
            <div className={ classes.modalContent }>
                <div className={ classes.close } onClick={ handleShow }></div>
                <Input onChange={ changeTaskName } name={ 'taskName' } placeholder={ 'Task Name' } value={ taskName }/>
                <Input onChange={ changeDescName } name={ 'taskDesc' } placeholder={ 'Task Description' } value={ taskDesc }/>
                <button onClick={ submitTask } className={ classes.taskSubmit }>Submit Task</button>
            </div>
        </>
    )
}

export default Modal