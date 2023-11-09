import React from 'react'
import Updateanime from './Updateanime'
import { useParams } from 'react-router-dom'

export default function Singleanime({animes}) {
    const {title} = useParams()
    const selectedAnime = animes.find((anime) => anime.title === title);

    if (!selectedAnime) {
      return <div>Anime not found</div>;
    }   
   
  return (
    <div>
        
        <Updateanime anime={selectedAnime}/>
        </div>
  )
}
