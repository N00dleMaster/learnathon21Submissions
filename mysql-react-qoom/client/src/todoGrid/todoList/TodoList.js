import "./TodoList.css";
import React from 'react';
import TodoListModal from "../todoListModal/TodoListModal.js";

const TodoList = (props) => {

    const [showTodoDesc, setShowTodoDesc] = React.useState(false);


    const handleClick = (e) => {
        e.preventDefault();    
        setShowTodoDesc(!showTodoDesc);
        props.refreshTodoGrid();
    }


    return (
        <>
        <div id="todoList" onClick={(e) => handleClick(e)}>
            <h3 id="listName">{props.listName}</h3>
            <ul id="todos">
                {props.todos.map((todo) => <li className="todoElement">{todo}</li>)}
            </ul>
        </div>
        <TodoListModal closeModal={handleClick} listName={props.listName} todos={props.todos} isShown={showTodoDesc}/>
        </>
    )
}

export default TodoList;