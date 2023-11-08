import React from 'react'
import { Link } from 'react-router-dom'
import Footer from './Footer'

export default function Cart({mycart, removeFromCart}) {
  return (
    <div className='mt-5 bg-dark text-white'>
        {mycart.length <1 && <p className='p-5 alert alert-warning'>Oops ! Cart is empty. Shop around to get your items here ;D</p>}
        {mycart.length>1 && console.log('hey')}
         <div className="row">
        {mycart.map((item) => (
          <div key={item.id} className="col-md-3 bg-dark text-white" id="picha">
            <div className="card">
              <img src={item.image} className="img-fluid" alt="Loading..." />
              <div className="card-body pd-3 bg-dark text-white">
                <h5 className="card-title">{item.product_name}</h5>
                <p className="card-text">{item.price}</p>
                <div className='buttons'>
                <Link to='' className="btn btn-danger " onClick={()=> removeFromCart(item)} >Remove</Link>
                </div>

              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
     
    </div>
  )
}
