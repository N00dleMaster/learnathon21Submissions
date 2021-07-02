import "./TodoList.css";
import React from 'react';

const TodoList = (props) => {
    return (
        <div className="todoList">{props.children}</div>
    )
}

export default TodoList;