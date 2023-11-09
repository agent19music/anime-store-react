import React,{useState, useEffect} from 'react'

export default function Feedback() {
const [feedback, setFeedback]= useState([])    

useEffect(()=>{
    fetch('http://localhost:8555/reviews')
    .then((res) => res.json())
    .then(res=> setFeedback(res))
},[])    
  return (
    <div>
        {feedback.map((feedback,index)=>(
          <div key={index} className='col-md-3'>
            <div className="card">
  <div className="card-body bg-dark text-white">
    <h5 className="card-title">{feedback.name}</h5>
    <p className="card-text">{feedback.thoughts}</p>
    <p className="card-text">{feedback.rating} <span>★</span></p>

  </div>
</div>
          </div>
        ))}
    </div>
  )
}
