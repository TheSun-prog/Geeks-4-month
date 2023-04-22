import './App.css';
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import {useState} from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import List from "./components/List/List";

function App() {

    const localData = [
        {
            name: 'Coding',
            desc: 'Today need wore'
        },
        {
            name: 'Eat',
            desc: 'Im hungry'
        },
        {
            name: 'Sleep',
            desc: 'Im tired'
        },
    ]

    const [ isShow, setIsShow ] = useState(false)
    const [ data, setData ] = useState(localData ? localData : [])

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const addData = (newData) => {
        setData((prevState) => [...prevState, newData])
    }


  return (
    <>
        <Container sectionName={ "main" }>
            {
                isShow && <Modal
                    handleShow={ handleShow }
                    addData={ addData }
                />
            }

            <List data={ data } />
            <Button
                handleClick={ handleShow }
            >
                <p>Add Task</p>
            </Button>
        </Container>
    </>
  );
}

export default App;
