import "./TodoGrid.css";
import React, { useEffect } from 'react';
import TodoList from "./todoList/TodoList";

const TodoGrid = (props) => {

    const [ todos, setTodos] = React.useState([{listName: "Loading...", todos: []}]);

    // The second argument is a dependency. Every time the dependency changes, this func. runs
    useEffect(() => {
        console.log("I ran")
        fetch("/get-todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }, [props.refresh]);

    const refreshTodoGrid = () => {
        console.log("I ran")
        fetch("/get-todos")
        .then((res) => res.json())
        .then((data) => setTodos(data));
    }

    return (
        <div id="todoGrid">
            { // JS needs to be enclosed in braces like this
                todos.map((todo) => {
                    return (<TodoList refreshTodoGrid={refreshTodoGrid} listName={todo.listName} todos={todo.todos}/>);
                })
            }
        </div> 
    );
};

export default TodoGrid;