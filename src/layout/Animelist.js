import {React, useContext} from 'react'
import Anime from '../components/Anime'
import Footer from './Footer'
import { SearchContext } from '../context/Searchcontext'

export default function Animecollection({ deleteAnime, toggle}) {
  const {isLoading,animes} = useContext(SearchContext)
  
  return (
    <div className='container'>
        {isLoading && (
                      <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    )}
     
      <Anime animes ={animes} key={animes.id} deleteAnime={deleteAnime} toggle={toggle} isLoading={isLoading}/>
      <Footer/>
    </div>
  )
}
