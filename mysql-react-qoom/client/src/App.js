import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import TodoGrid from './todoGrid/TodoGrid';
import AddNewModal from './addNewModal/AddNewModal';

function App() {

    const [isModalShown, setModalShown] = React.useState(false);
    const [refreshTodoGrid, setRefreshTodoGrid] = React.useState(false); // the component re-renders whenever the state changes
    
    // This function is a callback that retrieves data from a child component (specifically the Navbar)
    const handleModal = () => {
        setModalShown(!isModalShown);
        setRefreshTodoGrid(!refreshTodoGrid);
        console.log("showModal is now " + isModalShown);
    }

    return (
        // Adjacent JSX elements must be enclosed in tags like these. idk why tbh.
        <>
            <Navbar parentCallBack={handleModal}/>
            <h1 id="greeting">Hello, here are your Todos for today!</h1>
            <AddNewModal parentCallBack={handleModal} isShown={isModalShown}/>
            <TodoGrid refresh={refreshTodoGrid}/>
        </>
        
    )

}

export default App;
