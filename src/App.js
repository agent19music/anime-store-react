import { useState, useEffect } from 'react';
import Animelist from './Animelist.js'
import Navbar from './Navbar.js';
import Topmerch from './Topmerch.js';
import Merchlist from './Merchlist.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart.js';
import Contact from './Contact.js';
import Merch from './Merch.js';



function App() {
  const [animes, setAnimes] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8555/animes')
    .then((res)=> res.json())
    .then((res)=> setAnimes(res))
},[])
 
  return (
    <div className="App bg-dark text-white">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/topmerch" element={<Topmerch />} />
          <Route path="/animelist" element={<Animelist animes={animes}/>} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/animemerch" element={<Merchlist />} />
          <Route path="/animemerch/:id" element={<Merch />} />


        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
