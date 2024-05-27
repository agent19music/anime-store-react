import {React, useContext} from 'react'
import Updateanime from '../pages/Updateanime'
import { useParams } from 'react-router-dom'
import { SearchContext } from '../context/Searchcontext'

export default function Singleanime() {
    const {animes} = useContext(SearchContext) 
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
