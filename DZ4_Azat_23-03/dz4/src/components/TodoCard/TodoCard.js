import React, {useState} from 'react'
import classes from './TodoCard.module.css'
import Input from "../Input/Input";


const TodoCard = ({task, handleDone, deleteCard, tasks, setTasks}) => {

    const [editTitle, setEditTitle] = useState(task.title)

    const updateTitle = (event) => {
        setEditTitle(event.target.value)
    }

    const editCard = (id) => {
        const newList = tasks.map(task => {
            if (task.id === id) {
                return {...task, isEditing: !task.isEditing, title: editTitle}
            } else {
                return task
            }
        })
        setTasks([...newList])
    }

    const cancelEdit = (id) => {
        const newList = tasks.map(task => {
            if (task.id === id) {
                return {...task, isEditing: false}
            } else {
                return task
            }
        })
        setTasks([...newList])
    }

    if (task.isEditing) {
        return (
            <div className={classes.todoCard}>
                <Input value={editTitle} onChange={ updateTitle }/>
                <button className={classes.btn} onClick={() => editCard(task.id)}>Save</button>
                <button className={classes.btn} onClick={() => cancelEdit(task.id)}>Cancel</button>
            </div>
        )
    } else {
        return (
            <div className={task.completed ? `${classes.todoCard} ${classes.done}` : classes.todoCard}>
                <h3>{task.title}</h3>
                <button className={classes.btn} onClick={() => handleDone(task.id)}>Done</button>
                <button className={classes.btn} onClick={() => deleteCard(task.id)}>Delete</button>
                <button className={classes.btn} onClick={() => editCard(task.id)}>Edit</button>
            </div>
        )
    }
}

export default TodoCard