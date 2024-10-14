import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [products, setproducts] = useState([]);

  const api = 'https://fakestoreapi.com/products';
  const getproducts = () => {
    axios.get(api).then(products => {
      console.log(products.data)
      setproducts(products.data);
    }).catch(error => {
      console.log(error);
    })

  };

  useEffect(() => {
    getproducts();
    return () => {

    };
  }, []);
  return (
    <>
      <hr />

      {/* <button onClick={getproducts} className="px-5 py-2 bg-red-300 rounded-lg">Call huihiu APi products</button> */}
      <hr />
      <ul>
        {products.length > 0 ? products.map(p => <li key={p.id} className="rounded mb-2 p-5 bg-red-300">{p.title}</li>) : <h1>Loading... </h1>}
      </ul>

    </>
  )
}

export default Home
