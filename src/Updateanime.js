import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Footer from './Footer';

export default function Updateanime({ animes }) {
    console.log(animes);
  const [title, setTitle] = useState(animes.title||'');
  const [rating, setRating] = useState(animes.rating||'');
  const [poster, setPoster] = useState(animes.poster||'');
  const [episodes, setEpisodes] = useState(animes.episodes||'');


  function animesubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:8555/animes/${animes.id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, rating, poster, episodes }),
    })
      .then((res) => res.json())
      .then((res) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Anime updated successfully!',
          showConfirmButton: false,
          timer: 900,
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'We have an error reaching our servers!',
        });
      });
  }

  return (
    <div className="container mt-5">
      <h4>UPDATE {animes.title}</h4>

      <div className="">
        <form onSubmit={animesubmit}>
          <div className="mb-3">
            <label className="form-label text-white">Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Description</label>
            <input
              type="number"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Poster url</label>
            <input
              type="url"
              value={poster}
              onChange={(e) => setPoster(e.target.value)}
              className="form-control"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label text-white">Episodes</label>
            <input
              type="url"
              value={episodes}
              onChange={(e) => setEpisodes(e.target.value)}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success">
            Update
          </button>
        </form>
      </div>

      <Footer />
    </div>
  );
}
