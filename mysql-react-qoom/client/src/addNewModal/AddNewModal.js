import "./AddNewModal.css";
import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faPlus } from '@fortawesome/free-solid-svg-icons';


const AddNewModal = (props) => {

    let showOrHide = props.isShown ? "ohWowLookItsBack" : "ohWowLookItsGone";

    // This state stores an array of all the todos we've added so far
    const [todosToAdd, setTodosToAdd] = React.useState([
        {
            todo: "bruh momento",
            name: 0
        } // example starter
    ]);

    const handleClose = () => {
        props.parentCallBack();
    }

    const addTodoField = () => {
        setTodosToAdd([...todosToAdd, {todo: "", name: (todosToAdd.length-1) }]);
    }
    const addTodoFieldChange = (e, i) => {
        const value = e.target.value;
        console.log("Value of the input at index " + e.target.name + " is " + value);
        const listCopy = [...todosToAdd];
        listCopy[i].todo = value;
        console.log()
        // For debugging =========
        // let values = "The values in the todosToAdd are ";
        // let modifiedValues=  "The values in the listCopy are ";
        // for(let i=0; i<todosToAdd.length; i++) {
        //     values+= todosToAdd[i].todo;
        //     modifiedValues+= listCopy[i].todo;
        // }
        setTodosToAdd(listCopy);
    }

    return (
        <div id="blackBackground" className={showOrHide}>
            <div id="addTodoModal">

                <p className="fieldHeader">TodoList Name</p>
                <input className="field" type="text"></input>
                
                <p className="fieldHeader">Todos:</p>
                {todosToAdd.map((todo, index) => <input className="field" type="text" name={index} value={todo.todo} onChange={e => addTodoFieldChange(e, index)}></input>)}
                
                <div>
                    <button id="addTodoList">Add TodoList!</button>
                    <button id="addTodoField" onClick={()=>addTodoField()}>
                        Add new <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>
                
                <button id="closeModal" onClick={handleClose}>
                    <FontAwesomeIcon icon={faTimes} />
                </button>
            </div>
        </div>
    )

}

export default AddNewModal;