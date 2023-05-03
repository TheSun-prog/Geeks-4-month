import './App.css';
import Modal from "./components/Modal/Modal";
import Container from "./components/Container/Container";
import {useState, useEffect} from "react";
import Button from "./components/Button/Button";
import Input from "./components/Input/Input";
import List from "./components/List/List";



function App() {
    const [isShow, setIsShow] = useState(false)
    const [data, setData] = useState(() => {
        const savedData = localStorage.getItem('tasks');
        return savedData ? JSON.parse(savedData) : [];
    });

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(data));
    }, [data]);

    const handleShow = () => {
        setIsShow(!isShow)
    }

    const addData = (newData) => {
        setData((prevState) => [...prevState, newData])
    }

    const handleClearAll = () => {
        setData([]);
        localStorage.removeItem('tasks');
    }

    return (
        <>
            <Container sectionName={"main"}>
                {
                    isShow && <Modal
                        handleShow={handleShow}
                        addData={addData}
                    />
                }

                <List data={data}/>
                <Button
                    handleClick={handleShow}
                >
                    <p>Add Task</p>
                </Button>
            </Container>
        </>
    );
}

export default App;
