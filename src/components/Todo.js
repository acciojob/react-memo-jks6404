import React, { useState } from "react";

const Todo = () => {
    const [todo, setTodo] = useState(['New Todo']);

    return (
        <>
            <h2>My todos</h2>
            {
                todo && todo.map((todo, index) => <p id={`todo-${index}`} key={`todo-${index}`}>{todo}</p>)
            }
            <button id="add-todo-btn" onClick={() => setTodo([...todo, 'New Todo'])}>
                Add Todo
            </button>

            <br />
            <br />
            <hr />
        </>
    )
}

export default Todo;