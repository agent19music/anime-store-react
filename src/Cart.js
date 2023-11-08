import React from 'react'

export default function Cart({mycart, removeFromCart}) {
  return (
    <div className='mt-5'>
         <div className="row">
        {mycart.map((item) => (
          <div key={item.id} className="col-md-3 bg-dark text-white" id="picha">
            <div className="card">
              <img src={item.image} className="img-fluid" alt="Loading..." />
              <div className="card-body pd-3 bg-dark text-white">
                <h5 className="card-title">{item.product_name}</h5>
                <p className="card-text">{item.price}</p>
                <div className='buttons'>
                <a href='' className="btn btn-danger " onClick={()=> removeFromCart(item)} >Remove</a>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
     
    </div>
  )
}
