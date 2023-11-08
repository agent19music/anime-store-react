import React, {useState} from 'react'
import Swal from "sweetalert2"

export default function Updateanime({animes}) 
{
    const [title, setTitle] = useState()
    const [rating, setRating] = useState()
    const [image_url, setImageUrl] = useState()


    console.log("DATA",animes);
    function animesubmit(e)
    {
        e.preventDefault()

        fetch(`http://localhost:8555/animes/${animes.id}`, {
            method: "PATCH",
            headers: {"Content-Type":"application/json" },
            body: JSON.stringify({title: title,rating:rating, image:image_url, is_archived:false })
        })
        .then((res)=>res.json())
        .then((res)=>{
             
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'animes Updated successfully!',
                showConfirmButton: false,
                timer: 1500
            })
          
        })
        .catch((error)=>{
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'We have an error reaching our servers!',
                
              })
        })

      

    }


  return (
    <div className='container mt-5'>
        <h4>UPDATE</h4>
      
        <div className=''>
           <form onSubmit={animesubmit}>
            <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" value={title || animes.title} onChange={e=>setTitle(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="number" value={rating || animes.rating}  onChange={e=>setRating(e.target.value)} className="form-control" required />
            </div>
            <div className="mb-3">
                <label className="form-label">Image url</label>
                <input type="url" value={image_url || animes.image}  onChange={e=>setImageUrl(e.target.value)} className="form-control" required />
            </div>

            
            <button type="submit" className="btn btn-success">Update</button>
            </form>

        </div>
        

       
    </div>
  )
}