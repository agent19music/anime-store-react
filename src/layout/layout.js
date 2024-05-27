import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import '../App.css'

export default function layout({setAnimes,animes}) {
  console.log(animes);
  return (
    <div className='bg-dark text-white'>
   <Navbar/>
   <div id='main-container' className='container mx-auto'> 
   <Outlet/>
   </div>
   <Footer/>

    </div>
  )
}
