import './App.css';
import { useEffect, useState } from 'react';
import Animelist from './Animelist.js'
import Navbar from './Navbar.js';

function App() {
  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8555/animes')
    .then((res)=> res.json())
    .then((res)=> setAnimes(res))
},[])
  return (
    <div className="App">
      <Navbar/>
     <Animelist animes ={animes}/>
     
    </div>
  );
}

export default App;
