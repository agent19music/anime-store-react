import React from 'react'
import Anime from './Anime'

export default function Animecollection({animes}) {
  return (
    <div>
      <Anime key={animes.id} animes ={animes}/>
    </div>
  )
}
