import { useState, useEffect } from 'react';
import Animelist from './layout/Animelist.js'
import Navbar from './layout/Navbar.js';
import Merchlist from './components/Merchlist.js';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/Cart.js';
import Contact from './pages/Contact.js';
import Addanimeform from './pages/Addanimeform.js';
import Swal from 'sweetalert2';
import Feedback from './pages/Feedback.js';
import './App.css';
import Singleanime from './components/Singleanime.js';
import Layout from './layout/layout.js';
import Home from './pages/Home.js';


function App() {
  const[mycart, setMyCart] = useState([])
  const [animes, setAnimes] = useState([])
  const [feedback, setFeedback] = useState([])
  const [isDarkmode, setIsDarkmode] = useState(true)

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
   const newmycart = mycart.filter((newguy) => newguy.image !== merchandise.image);
   setMyCart(newmycart);
   Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Item has been removed from cart",
    showConfirmButton: false,
    timer: 900
  });
   
  }

  const deleteAnime = (animeId) => {
    fetch(`http://localhost:8555/animes/${animeId}`, {
      method: 'DELETE',
    })
      .then(() => {
        const updatedAnimes = animes.filter((anime) => anime.id !== animeId);
        setAnimes(updatedAnimes);
        Swal.fire('Anime deleted!', '', 'danger');
      })
      .catch((error) => {
        console.error('Error deleting anime:', error);
      });
  };

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
    fetch('http://localhost:8555/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(comm),
    })
      .then((response) => response.json())
      .then((newFeedback) => {
        
        setFeedback([...feedback, newFeedback]);
      })
      .catch((error) => {
        console.error('Error adding anime:', error);
      });
  };
  const toggleDarkMode = () => {
    setIsDarkmode(!isDarkmode);
  };
  const toggle = isDarkmode ? ' bg-dark text-white' : 'bg-light text-black'
  const toggle2 = isDarkmode ? 'dark':'light';

  return (
    <div className={toggle}>
      <BrowserRouter>
        <Navbar mycart={mycart} toggleDarkMode={toggleDarkMode} toggle={toggle} toggle2={toggle2}/>
        <Routes>
          <Route path='/' element={<Layout/> } /> 
          <Route index element={<Home />} />
          <Route path="/animelist" element={<Animelist animes={animes} deleteAnime={deleteAnime} toggle={toggle}/>} />
          <Route path="/cart" element={<Cart mycart={mycart} removeFromCart={removeFromCart} setMyCart={setMyCart} toggle2={toggle2} toggle={toggle} />} />
          <Route path="/contact" element={<Contact addFeedback={addFeedback}/>} />
          <Route path="/animemerch/:id" element={<Merchlist addToCart={addToCart} toggle={toggle} />} />
          <Route path="/addanimeform" element={<Addanimeform addAnime={addAnime} toggle={toggle}/>} />
          <Route path="/feedback" element={<Feedback toggle={toggle} />} />
          <Route path="/animelist/:title" element={<Singleanime  animes={animes}/>} />




        </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
