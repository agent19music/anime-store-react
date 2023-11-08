import React, {useState} from 'react'

export default function Addanimeform({addAnime}) {
    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');
    const [episodes, setEpisodes] = useState('');
    const [releasedate, setReleaseDate] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      addAnime({ releasedate, description, title, episodes });
      setReleaseDate('');
      setDescription('');
      setTitle('');
      setEpisodes('');
    };

    return (
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-6'>
            <form onSubmit={handleSubmit} className="bg-dark text-white p-5 my-5">
              <div className="mb-3">
                <label htmlFor="releasedate" className="form-label text-white">Release Date:</label>
                <input
                  type="date"
                  value={releasedate}
                  onChange={event => setReleaseDate(event.target.value)}
                  id="releasedate"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description" className="form-label text-white" >Description:</label>
                <input
                  type="text"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                  id="description"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="title" className="form-label text-white">Title:</label>
                <input
                  type="text"
                  value={title}
                  onChange={event => setTitle(event.target.value)}
                  id="title"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="episodes" className="form-label text-white">Episodes:</label>
                <input
                  type="number"
                  value={episodes}
                  onChange={event => setEpisodes(event.target.value)}
                  id="episodes"
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-success btn  md-2">Add Anime</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
