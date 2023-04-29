import Modal from './components/Modal/Modal';
import {useState} from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';
import Input from "./components/Input/Input";

function App() {

    const [isShow, setIsShow] = useState(false);
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
    const [fullList, setFullList] = useState({tasks: [...tasks], willChange: true})
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

    const selectTaskType = (event) => {



        if (event.target.value === 'all') {
            setTasks(fullList.tasks)
            setFullList({tasks: fullList.tasks, willChange: true})
        }
        else if (event.target.value === 'done') {
            if (fullList.willChange)
                setFullList({tasks: tasks, willChange: false})

            setTasks(fullList.tasks.filter((task) => task.completed === true))
        }
        else if (event.target.value === 'notDone') {
            if (fullList.willChange)
                setFullList({tasks: tasks, willChange: false})

            setTasks(fullList.tasks.filter((task) => task.completed === false))
        }

    }

    const filteredTasks = tasks.filter(task => task.title.toLowerCase().includes(search.toLowerCase()));

    return (
        <>
            <Container>
                <div className={classes.wrapper}>
                    <select name="taskTypes" id="select" onChange={selectTaskType}>
                        <option value="all">1. Все таски</option>
                        <option value="done">2. Выполненные</option>
                        <option value="notDone">3. Не выполенные</option>
                    </select>
                    {isShow && <Modal handleAddTask={handleAddTask} setNewTask={setNewTask} handleShow={handleShow}/>}
                    {fullList.willChange && <Button handleClick={handleShow}><p>Добавить</p></Button>}
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
