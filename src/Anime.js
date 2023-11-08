import React from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2';
export default function Anime({animes, deleteAnime}) {

function options(animeId){
  Swal.fire({
    title: "What changes are you doing to this anime ?",
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: "Update",
    denyButtonText: `Delete`
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire("Saved!", "", "success");
    } else if (result.isDenied) {
      deleteAnime(animeId);
    }
  });
}

  return (
    <div className='mt-5'>
         <div className="row">
        {animes.map((anime, index) => (
          <div key={index} className="col-md-3 bg-dark text-white" id="picha">
            <div className="card">
              <img src={anime.poster} className="img-fluid" alt="Loading..." onClick={()=> options(anime.id)} />
              <div className="card-body pd-3 bg-dark text-white">
                <h5 className="card-title">{anime.title}</h5>
                <p className="card-text">Rating : {anime.rating}</p>
                <p className="card-text">Episodes : {anime.episodes}</p>
                <div className='buttons'>
                <Link to={`/animemerch/${anime.id}`} className="btn btn-success" >Shop</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}
