import "./AddNewModal.css";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';


const AddNewModal = (props) => {

    let showOrHide = props.isShown ? "ohWowLookItsBack" : "ohWowLookItsGone";

    // STATES ===============
    // This state stores an array of all the todos we've added so far
    const [todosToAdd, setTodosToAdd] = React.useState([
        {
            todo: "",
            name: 0
        } // example starter
    ]);
    // This state simply stores the damn todoList name
    const [todoListName, setTodoListName] = React.useState("");


    // CLOSING THE MODAL ===============
    const handleClose = () => {
        props.parentCallBack();
    }


    // hANDLING THE INPUT ELEMENTS ===============
    const addTodoField = (e) => {
        e.preventDefault(); // prevents it from submitting the form
        setTodosToAdd([...todosToAdd, {todo: "", name: (todosToAdd.length-1) }]);
    }
    const addTodoFieldChange = (e, i) => {
        const value = e.target.value;
        console.log("Value of the input at index " + e.target.name + " is " + value);
        const listCopy = [...todosToAdd];
        listCopy[i].todo = value;
        // For debugging =========
        // let values = "The values in the todosToAdd are ";
        // let modifiedValues=  "The values in the listCopy are ";
        // for(let i=0; i<todosToAdd.length; i++) {
        //     values+= todosToAdd[i].todo;
        //     modifiedValues+= listCopy[i].todo;
        // }
        setTodosToAdd(listCopy);
    }


    // SUBMITTING THE FORM ===============
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                todoListName: todoListName,
                todosToAdd: [...todosToAdd]
            })
        };

        fetch("/add-todo-list", requestOptions)
        .then((response) => handleClose());

    }


    return (
        <div id="blackBackground" className={showOrHide}>
            <div id="addTodoModal">
                <form id="submitForm" onSubmit={(e) => handleSubmit(e)}>
                    <p className="fieldHeader">TodoList Name</p>
                    <input className="field" type="text" onChange={(e)=> setTodoListName(e.target.value)}></input>
                    
                    <p className="fieldHeader">Todos:</p>
                    {todosToAdd.map((todo, index) => <input className="field" type="text" name={index+1} value={todo.todo} onChange={e => addTodoFieldChange(e, index)}></input>)}
                    
                    <div>
                        <button id="addTodoField" onClick={(e)=>addTodoField(e)}>
                            Add new <FontAwesomeIcon icon={faPlus} />
                        </button>
                        <input id="addTodoList" type="submit" value="Add Todolist!"/>
                    </div>
                </form>
                
                <button id="closeModal" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )

}

export default AddNewModal;