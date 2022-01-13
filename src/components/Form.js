import React from "react";

const Form = ({input, setInput, todos, setTodos, setStatus}) => {
  const inputHandler = (e) => {
    setInput(e.target.value)
  }
  const submitHandler = (e) => {
    e.preventDefault()
    setInput('')
      setTodos([
          ...todos,
          {text: input, completed: false, id: Math.floor(Math.random() * 1000)}
      ])
  }
    const selectHandler = (e) => {
      setStatus(e.target.value)
    }
    return (
        <form>
            <input value={input} onChange={inputHandler} type="text" className="todo-input"/>
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={selectHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form