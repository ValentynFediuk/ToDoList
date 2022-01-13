import Todo from "./Todo";

const TodoList = ({todos, setTodos, filtered}) => {

    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filtered.map((todo) =>
                    <Todo
                        setTodos={setTodos}
                        text={todo.text}
                        key={todo.id}
                        todo={todo}
                        todos={todos}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList