import "./TodoListModal.css";
import React, { useEffect } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPen, faTimes, faTrash } from '@fortawesome/free-solid-svg-icons';


const TodoListModal = (props) => {

    let showOrHide = props.isShown ? "ohWowLookItsBack" : "ohWowLookItsGone";

    const [todos, setTodos] = React.useState(props.todos);

    const [currentEdit, setCurrentEdit] = React.useState("");



    // DELETING ================
    const trashTodo = (e) => {
        e.preventDefault();
        const todoToDelete = e.currentTarget.parentNode.previousSibling.previousSibling.innerText;
        const listCopy = [...todos];
        listCopy.splice(listCopy.indexOf(todoToDelete), 1); // remove element
        setTodos(listCopy);
        // Now we delete from the db via fetch req.
        const requestOptions = {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                listName: props.listName,
                todoToDelete: todoToDelete
            })
        };
        fetch("/delete-todo", requestOptions)
        .then((res) => console.log(res.status));
    }


    // EDITING TODO ================
    const editTodo = (e) => {
        e.currentTarget.parentNode.previousSibling.previousSibling.classList.add("invisible");
        e.currentTarget.parentNode.previousSibling.classList.remove("invisible");
        setCurrentEdit(e.currentTarget.parentNode.previousSibling.previousSibling.innerText);
    }
    const updateTodo = (e) => {
        e.currentTarget.classList.add("invisible");
        e.currentTarget.previousSibling.classList.remove("invisible");
        const originalTodo = e.currentTarget.previousSibling.innerText;
        e.currentTarget.previousSibling.innerText = currentEdit;
        e.preventDefault();
        const requestOptions = {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                listName: props.listName,
                originalTodo: originalTodo,
                updatedTodo: currentEdit
            })
        };
        fetch("/update-todo", requestOptions)
        .then((res) => console.log(res.status));
    }

    const handleInputChange = (e) => {
        setCurrentEdit(e.target.value);
    }



    return (
        <div id="blackBackground" className={showOrHide}>
            <div id="todoDescModal">
                <p className="subtitle">{props.listName}</p>
                <ul>
                    {props.todos.map(todo=> <li className="todo">
                        <p className="todoText">{todo}</p>
                        <form onSubmit={updateTodo} id="editForm" className="invisible">
                            <input type="text" value={currentEdit} onChange={e=>handleInputChange(e)}></input>
                            <button>Edit</button>
                        </form>
                        <span className="buttons">
                            <button className="button done" onClick={(e)=>trashTodo(e)}>
                                <FontAwesomeIcon icon={faCheck} />
                            </button>
                            <button className="button" onClick={(e)=>editTodo(e)}>
                                <FontAwesomeIcon icon={faPen} />
                            </button>
                        </span>
                    </li>)
                    }
                </ul>
                
                <button id="closeModal" onClick={props.closeModal}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    );

}

export default TodoListModal;