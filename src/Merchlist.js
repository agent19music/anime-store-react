// Merchlist.js
import React, { useState, useEffect } from 'react';
import Merch from './Merch';
import { useParams } from 'react-router-dom';

export default function Merchlist() {
  const { id } = useParams();
  const [merch, setMerch] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8555/animes/${id}/merchandise`) // Assuming merchandise data is a subpath under the anime ID
      .then((res) => res.json())
      .then((res) => setMerch(res));
  }, [id]);

  return (
    <div>
      {merch.length > 0 ? (
        merch.map((item, index) => (
          <Merch key={index} merchandise={item} />
        ))
      ) : (
        <p>Loading merchandise data...</p>
      )}
    </div>
  );
}
