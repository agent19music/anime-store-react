import React from 'react'
import { Link } from 'react-router-dom'
export default function Anime({animes}) {
  return (
    <div className='mt-5'>
         <div className="row">
        {animes.map((anime, index) => (
          <div key={index} className="col-md-3 bg-dark text-white" id="picha">
            <div className="card">
              <img src={anime.poster} className="img-fluid" alt="Loading..." />
              <div className="card-body pd-3 bg-dark text-white">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">{anime.rating}</p>
                <div className='buttons'>
                <Link to='/animemerch' className="btn btn-success" >Shop</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}
