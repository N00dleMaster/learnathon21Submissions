import "./TodoGrid.css";
import React, { useEffect } from 'react';
import TodoList from "./todoList/TodoList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TodoGrid = () => {

    const [ todos, setTodos] = React.useState([{listName: "Loading..."}]);

    useEffect(() => {
        console.log("I ran")
        fetch("/test")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }, []);

    return (
        <div id="todoGrid">
            { // JS needs to be enclosed in braces like this
                todos.map((todo) => {
                    return (<TodoList>{todo.listName}</TodoList>);
                })
            }
            <TodoList>
                <FontAwesomeIcon icon={faPlus} />
            </TodoList>
        </div> 
    );
};

export default TodoGrid;