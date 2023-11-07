import React from 'react'
import Anime from './Anime'

export default function Animecollection({animes}) {
  
  return (
    <div className='container'>
      <Anime animes ={animes} key={animes.id}/>
    </div>
  )
}
