import React from 'react'
import Anime from '../Anime'
import Footer from './Footer'

export default function Animecollection({animes, deleteAnime}) {
  
  return (
    <div className='container'>
      <Anime animes ={animes} key={animes.id} deleteAnime={deleteAnime}/>
      <Footer/>
    </div>
  )
}
