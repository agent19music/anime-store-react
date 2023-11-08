import React from 'react';
import Footer from './Footer';

function AnimeMerchandise({ anime, addToCart, removeFromCart }) {
  

  return (
    <div>
      {anime ? (
        <div className="mt-5">
          <h2>Merchandise</h2>
          {anime.merchandise && anime.merchandise.length > 0 ? (
            <div className="row">
              {anime.merchandise.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                  <div className="card bg-dark text-white">
                    <img src={item.image} alt={item.product_name} className='card-img-top img-fluid' />
                    <div className="card-body">
                      <h3 className="card-title">{item.product_name}</h3>
                      <p className="card-text">{item.product_description}</p>
                      <p className="card-text">Price: ${item.price}</p>
                      <p className="card-text">In Stock: {item.inStock}</p>
                      <a href="#!" className="btn btn-success" onClick={()=>addToCart(item)}>Add to cart</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className='p-4 alert alert-warning'>Oops :/ looks like there's no merchandise available for this anime.</p>
          )}
        </div>
      ) : (
        <p>Loading anime merchandise data...</p>
      )}
      <Footer/>
    </div>
  );
}

export default AnimeMerchandise;
