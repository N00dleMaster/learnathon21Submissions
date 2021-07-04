import "./TodoList.css";
import React from 'react';
import TodoListModal from "../todoListModal/TodoListModal.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoList = (props) => {

    const [showTodoDesc, setShowTodoDesc] = React.useState(false);


    const handleClick = (e) => {
        e.preventDefault();    
        setShowTodoDesc(!showTodoDesc);
        props.refreshTodoGrid();
    }


    const deleteTodoList = (e) => {
        e.stopPropagation();
        const requestOptions = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                listName: props.listName
            })
        };
        fetch("/delete-todo-list", requestOptions)
        .then((res) => props.refreshTodoGrid());
    }


    return (
        <>
        <div id="todoList" onClick={(e) => handleClick(e)}>
            <h3 id="listName">{props.listName}</h3>
            <ul id="todos">
                {props.todos.map((todo) => <li className="todoElement">{todo}</li>)}
            </ul>
            <button className="deleteTodoList" onClick={(e)=>deleteTodoList(e)}>
                <FontAwesomeIcon icon={faTrash}/>
            </button>
        </div>
        <TodoListModal closeModal={handleClick} listName={props.listName} todos={props.todos} isShown={showTodoDesc}/>
        </>
    )
}

export default TodoList;