import "./TodoGrid.css";
import React from 'react';
import TodoList from "./todoList/TodoList";

const TodoGrid = () => {
    return (
        <div id="todoGrid">
            <TodoList>Test1</TodoList>
            <TodoList>Test2</TodoList>
            <TodoList>Test3</TodoList>
            <TodoList>Test4</TodoList>
            <TodoList>Test4</TodoList>
            <TodoList>Test4</TodoList>
        </div> 
    );
};

export default TodoGrid;