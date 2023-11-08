import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Cart({ mycart, removeFromCart }) {
  const totalPrice = mycart.reduce((total, item) => total + item.price, 0);

  return (
    <div className='mt-5 bg-dark text-white'>
      {mycart.length < 1 && (
        <p className='p-5 alert alert-warning'>
          Oops! Cart is empty. Shop around to get your items here ;D
        </p>
      )}
      {mycart.length > 0 && (
        <div className='row'>
          <table className='table table-striped table-dark'>
            <thead>
              <tr>
                <th scope="col">Product Name</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {mycart.map((item) => (
                <tr key={item.id}>
                  <td>{item.product_name}</td>
                  <td>${item.price.toFixed(2)}</td>
                </tr>
              ))}
              <tr className='total'>
                <td className='text-right' width='80%'>
                  Total
                </td>
                <td className='text-right'><button className='btn btn-success'>Pay ${totalPrice.toFixed(2)}</button></td>
              </tr>
            </tbody>
          </table>

          {mycart.map((item) => (
            <div key={item.id} className='col-md-3 bg-dark text-white' id='picha'>
              <div className='card bg-dark text-white'>
                <img src={item.image} className='card-img-top' alt='Loading...' />
                <div className='card-body pd-3 bg-dark text-white'>
                  <h5 className='card-title'>{item.product_name}</h5>
                  <p className='card-text'>{item.price}</p>
                  <div className='buttons'>
                    <Link to='' className='btn btn-danger' onClick={() => removeFromCart(item)}>
                      Remove
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
}
