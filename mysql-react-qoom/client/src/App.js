import './App.css';
import React from 'react';

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/test")
    .then((response) => response.json())
    .then((data) => setData(data.hello));
  });

  return (
    <h1>{data}</h1>
  )

}

export default App;
