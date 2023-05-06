import Modal from './components/Modal/Modal';
import {useEffect, useState} from 'react';
import classes from './App.module.css'
import Container from './components/Container/Container';
import Button from './components/Button/Button';
import TodoCard from './components/TodoCard/TodoCard';
import Input from "./components/Input/Input";
import Pagination from "./components/Pagination/Pagination";

function App() {

    const BASE_URL = 'https://jsonplaceholder.typicode.com/'
    const limit = 10


    const [isShow, setIsShow] = useState(false);
    const [newTask, setNewTask] = useState('');
    const [search, setSearch] = useState('');
    const [ offset, setOffset ] = useState(1)
    const [ tasks, setTasks] = useState(() => {
        const storedTasks = localStorage.getItem('tasks');
        return storedTasks ? JSON.parse(storedTasks) : [];
    });
    const [fullList, setFullList] = useState({tasks: [...tasks], willChange: true})
    const handleShow = () => setIsShow(!isShow)

    const page = Math.floor(offset / limit) + 1 || 1

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const fetchData = async(ENDPOINT) => {
        try {
            const json = await fetch(BASE_URL + ENDPOINT)
            const todos = await json.json()
            setTasks([...todos])
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        fetchData(`todos?_limit=${limit}&_start=${offset}`)
    }, [offset])

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

    const handleNext = () => {
        if (offset === 191) return
        setOffset(prev => prev + limit)
    }

    const handlePrev = () => {
        if (offset === 1) return
        setOffset(prev => prev - limit)
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

    const handleClearAll = () => {
        setTasks([]);
        localStorage.removeItem('tasks');
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
                    {fullList.willChange && <Button handleClick={handleClearAll}><p>Очистить всё</p></Button>}
                    <Input name={ 'search' } placeholder={ 'Поиск' } onChange={ handleSearch }/>
                        {filteredTasks.map(task =>
                            <TodoCard
                                deleteCard={ deleteCard }
                                tasks={ tasks }
                                setTasks={ setTasks }
                                handleDone={handleDone}
                                key={task.id}
                                task={task}/>)}
                    <Pagination handleNext={handleNext} handlePrev={handlePrev} page={page}/>
                </div>
            </Container>
        </>
    );
}

export default App;
