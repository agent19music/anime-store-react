import './App.css';
import { useEffect, useState } from 'react';
import Animelist from './Animelist.js'
import Navbar from './Navbar.js';
import Topmerch from './Topmerch.js';

function App() {
  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8555/animes')
    .then((res)=> res.json())
    .then((res)=> setAnimes(res))
},[])
  return (
    <div className="App bg-dark text-white">
      <Navbar/>
     <Animelist animes ={animes}/>
     
    </div>
  );
}

export default App;
<Switch>
<Route path="/topmerch">
    <Topmerch />
</Route>
<Route exact path="/animemerch">
    <Animemerch />
</Route>
<Route path="/animes">
    <Animelist />
</Route>
<Route path="/animes/:id">
    <A />
</Route>
<Route exact path="/">
    <Home />
</Route>
<Route path="*">
    <h1>404 not found</h1>
</Route>
</Switch>