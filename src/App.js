import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [animes, setAnimes] = useState([])
  useEffect(()=>(
    fetch('http://localhost:8555/animes')
    .then((res)=> res.json())
    .then((res)=> setAnimes(res))
  ))
  return (
    <div className="App">
     
     
    </div>
  );
}

export default App;
