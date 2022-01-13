import React, {useState, useEffect} from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
    const [input, setInput] = useState("")
    const [todos, setTodos] = useState([])
    const [status, setStatus] = useState('all')
    const [filtered, setFiltered] = useState([])
    const submitTodoHandler = (e) => {
        e.preventDefault()
    }
    useEffect(() => {
        getLocalTodos()
        // getLocalStatus()
    }, [])
    useEffect(() => {
        filterHandler()
        setLocalTodos()
        // setLocalStatus()
    }, [todos, status])
    const filterHandler = () => {
        switch (status) {
            case "completed":
                setFiltered(todos.filter((todo) => todo.completed === true))
                break;
            case "uncompleted":
                setFiltered(todos.filter((todo) => todo.completed === false))
                break;
            default:
                setFiltered(todos)
                break;
        }
    }
    const setLocalTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }
    const getLocalTodos = () => {
      if (localStorage.getItem('todos') === null) {
          localStorage.setItem('todos', JSON.stringify([]))
      } else {
          let localTodos = JSON.parse(localStorage.getItem('todos'))
          setTodos(localTodos)
      }
    }
    // const setLocalStatus = () => {
    //     localStorage.setItem('status', JSON.stringify(status))
    // }
    // const getLocalStatus = () => {
    //     if (localStorage.getItem('status') === null) {
    //         localStorage.setItem('status', JSON.stringify(''))
    //     }
    //     else {
    //         let localStatus = JSON.parse(localStorage.getItem('status'))
    //         setStatus(localStatus)
    //     }
    // }
    return (
        <div className="App">
            <header>
                <h1>Todo list</h1>
            </header>
            <Form
                onClick={submitTodoHandler}
                input={input}
                todos={todos}
                setTodos={setTodos}
                setInput={setInput}
                setStatus={setStatus}
            />
            <TodoList
                filtered={filtered}
                setTodos={setTodos}
                todos={todos}
            />
        </div>
    )
}

export default App