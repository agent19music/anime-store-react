import React, { useState, useEffect } from 'react';
import AnimeMerchandise from './AnimeMerchandise';
import { useParams } from 'react-router-dom';

export default function Merchlist({addToCart, removeFromCart}) {
  const { id } = useParams();
  const [anime, setAnime] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8555/animes/${id}`)
      .then((res) => res.json())
      .then((data) => setAnime(data))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {anime ? (
        <AnimeMerchandise anime={anime} addToCart={addToCart} removeFromCart={removeFromCart}/>
      ) : (
        <p>Loading anime merchandise data...</p>
      )}
    </div>
  );
}
