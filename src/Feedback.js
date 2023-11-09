import React, { useState, useEffect } from 'react';

export default function Feedback() {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8555/reviews')
      .then((res) => res.json())
      .then((res) => setFeedback(res));
  }, []);

  return (
    <div className="container">
      <div className="row">
        {feedback.map((feedback, index) => (
          <div key={index} className='col-md-3 mb-4'>
            <div className="card d-flex flex-column h-100">
              <div className="card-body bg-dark text-white flex-grow-1">
                <h5 className="card-title pb-3">{feedback.name}</h5>
                <h6 className='card-text pb-2'>{feedback.email}</h6>
                <p className="card-text">{feedback.thoughts}</p>
                <p className="card-text">{feedback.rating} <span className='text-warning'>★</span></p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
