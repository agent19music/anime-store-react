import React from 'react';

function AnimeMerchandise({ anime }) {
  return (
    <div>
      {anime ? (
        <div>
          <h1>{anime.title}</h1>
          <p>{anime.description}</p>
          <img src={anime.poster} alt={anime.title} />
          
          <h2>Merchandise</h2>
          {anime.merchandise && anime.merchandise.length > 0 ? (
            <div>
              {anime.merchandise.map((item) => (
                <div key={item.id}>
                  <h3>{item.product_name}</h3>
                  <p>{item.product_description}</p>
                  <p>Price: ${item.price}</p>
                  <p>In Stock: {item.inStock}</p>
                  <img src={item.image} alt={item.product_name} />
                </div>
              ))}
            </div>
          ) : (
            <p>No merchandise available for this anime.</p>
          )}
        </div>
      ) : (
        <p>Loading anime merchandise data...</p>
      )}
    </div>
  );
}

export default AnimeMerchandise;
