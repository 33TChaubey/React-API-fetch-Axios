import React from 'react'
import axios from 'axios';
const App = () => {

  const getproducts = () => {
    const api = 'https://fakestoreapi.com/products';
    axios.get(api).then(products => {
      console.log(products);
    }).catch(error => {
      console.log(error);
    })

  }


  return (
    <div className="pt-[5%] pl-[5%] mt-4">
      <button onClick={getproducts} className="px-5 py-2 bg-red-300 rounded-lg">Call APi products</button>
    </div >
  )
}

export default App;
