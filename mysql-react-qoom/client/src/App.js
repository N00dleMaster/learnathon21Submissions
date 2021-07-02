import './App.css';
import React from 'react';
import Navbar from './navbar/Navbar';
import TodoGrid from './todoGrid/TodoGrid';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/test")
    .then((response) => response.json())
    .then((data) => setData(data.message));
  });

  return (
      // Adjacent JSX elements must be enclosed in tags like these. idk why tbh.
      <>
        <Navbar/>
        <h1 id="greeting">Hello, here are your Todos for today!</h1>
        <TodoGrid />
      </>
      
  )

}

export default App;
