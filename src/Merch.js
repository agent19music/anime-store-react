// Merch.js
import React from 'react';

export default function Merch({ merchandise }) {
  return (
    <div>
      <div className="row">
        {merchandise.map((merch, index) => (
          <div key={index} className="col-md-3 bg-dark text-white" id="picha">
            <div className="card">
              <img src={merch.image} className="img-fluid" alt="Loading..." />
              <div className="card-body pd-3 bg-dark text-white">
                <h5 className="card-title">{merch.price}</h5>
                <p className="card-text">{merch.inStock}</p>
                <div className='buttons'>
                  <a href="#!" className="btn btn-success">Add to cart</a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
