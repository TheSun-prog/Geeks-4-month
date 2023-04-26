import React from 'react'
import classes from './TodoCard.module.css'


const TodoCard = ({task, handleDone, deleteCard}) => {

    return (
        <div className={task.completed ? `${classes.todoCard} ${classes.done}` : classes.todoCard}>
            <h3>{task.title}</h3>
            <button className={classes.btn} onClick={() => handleDone(task.id)}>Done</button>
            <button className={classes.btn} onClick={() => deleteCard(task.id)}>Delete</button>
        </div>
    )
}

export default TodoCard