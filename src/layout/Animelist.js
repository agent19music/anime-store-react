import React from 'react'
import Anime from '../components/Anime'
import Footer from './Footer'

export default function Animecollection({animes, deleteAnime, toggle}) {
  
  return (
    <div className='container'>
      <Anime animes ={animes} key={animes.id} deleteAnime={deleteAnime} toggle={toggle}/>
      <Footer/>
    </div>
  )
}
