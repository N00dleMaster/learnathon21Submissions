import "./TodoGrid.css";
import React, { useEffect } from 'react';
import TodoList from "./todoList/TodoList";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const TodoGrid = (props) => {

    const [ todos, setTodos] = React.useState([{listName: "Loading..."}]);

    // The second argument is a dependency. Every time the dependency changes, this func. runs
    useEffect(() => {
        console.log("I ran")
        fetch("/get-todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }, [props.refresh]);

    return (
        <div id="todoGrid">
            { // JS needs to be enclosed in braces like this
                todos.map((todo) => {
                    return (<TodoList>{todo.listName}</TodoList>);
                })
            }
        </div> 
    );
};

export default TodoGrid;