import React from 'react'
import Anime from '../components/Anime'
import Footer from './Footer'

export default function Animecollection({animes, deleteAnime, toggle, isLoading}) {
  
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
