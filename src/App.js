import { useState, useEffect } from 'react';
import Animelist from './Animelist.js'
import Navbar from './Navbar.js';
import Topmerch from './Topmerch.js';
import Merchlist from './Merchlist.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './Cart.js';
import Contact from './Contact.js';
import Addanimeform from './Addanimeform.js';
import Swal from 'sweetalert2';



function App() {
  const[mycart, setMyCart] = useState([])
  const [animes, setAnimes] = useState([])
  const [feedback, setFeedback] = useState([])
  useEffect(()=>{
    fetch('http://localhost:8555/animes')
    .then((res)=> res.json())
    .then((res)=> setAnimes(res))
},[])
 
function addToCart(merchandise){
  if(!mycart.find((newguy)=> newguy.image===merchandise.image)){
   setMyCart([...mycart,merchandise]) 
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item has been added to cart",
    showConfirmButton: false,
    timer: 900
  });
  }}

  function removeFromCart (merchandise){
   const newmycart = mycart.filter((newguy) => newguy.id !== merchandise.id);
   setMyCart(newmycart);
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item has been removed from cart",
    showConfirmButton: false,
    timer: 900
  });
   
  }

  const addAnime = (anime) => {
    fetch('http://localhost:8555/animes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(anime),
    })
      .then((response) => response.json())
      .then((newAnime) => {
        
        setAnimes([...animes, newAnime]);
      })
      .catch((error) => {
        console.error('Error adding anime:', error);
      });
  };
  
  const addFeedback = (comm) => {
    setFeedback([...feedback, comm]);
  };


  return (
    <div className="App bg-dark text-white">
      <BrowserRouter>
        <Navbar mycart={mycart} />
        <Routes>
          <Route path="/topmerch" element={<Topmerch />} />
          <Route path="/animelist" element={<Animelist animes={animes}/>} />
          <Route path="/cart" element={<Cart mycart={mycart} removeFromCart={removeFromCart}/>} />
          <Route path="/contact" element={<Contact addFeedback={addFeedback}/>} />
          <Route path="/animemerch/:id" element={<Merchlist addToCart={addToCart} />} />
          <Route path="/addanimeform" element={<Addanimeform addAnime={addAnime}/>} />

        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
