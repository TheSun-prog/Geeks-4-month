import Modal from './components/Modal/Modal';
import {useState, useEffect} from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';
import Input from "./components/Input/Input";

function App() {

    const [isShow, setIsShow] = useState(false)
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');
    const [tasks, setTasks] = useState([
        {
            id: 1,
            title: 'Coding',
            completed: false,
            isEditing: false
        },
        {
            id: 2,
            title: 'Eat',
            completed: false,
            isEditing: false
        },
        {
            id: 3,
            title: 'Sleep',
            completed: false,
            isEditing: false
        },
        {
            id: 4,
            title: 'Coding',
            completed: false,
            isEditing: false
        },
    ]);
    const handleShow = () => setIsShow(!isShow)


    const handleAddTask = () => {

        if (newTask.length < 1) return
        setTasks((prevState) => [...prevState,
            {
                id: Date.now(),
                title: newTask,
                completed: false
            }
        ])

        setNewTask('')
        handleShow();
    }

    const handleDone = (id) => {
        const newList = tasks.map(task => {
            if (task.id === id) {
                return {...task, completed: !task.completed}
            } else {
                return task
            }
        })
        setTasks([...newList])
    }

    const deleteCard = (id) => {
        setTasks(tasks.filter((task) => task.id !== id))
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <Container>
                <div className={classes.wrapper}>
                    {isShow && <Modal handleAddTask={handleAddTask} setNewTask={setNewTask} handleShow={handleShow}/>}
                    <Button handleClick={handleShow}><p>Добавить</p></Button>
                    <Input name={ 'search' } placeholder={ 'Поиск' } onChange={ handleSearch }/>
                        {filteredTasks.map(task =>
                            <TodoCard
                                deleteCard={ deleteCard }
                                tasks={ tasks }
                                setTasks={ setTasks }
                                handleDone={handleDone}
                                key={task.id}
                                task={task}/>)}
                </div>
            </Container>
        </>
    );
}

export default App;
