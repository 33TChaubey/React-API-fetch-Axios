import React from 'react'
import { useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import Show from './components/Show';
import Home from './components/Home';
import Services from './components/Services';

const App = () => {


  return (
    <div className="pt-[5%] pl-[5%] mt-4">
      <nav className='flex justify-center gap-10'>
        <Link to='/'>Home</Link>
        <Link to='/show'>Show</Link>
        <Link to='/services'>Service</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/show" element={<Show />}></Route>
        <Route path="/services" element={<Services />}></Route>
      </Routes>
    </div >
  )
}

export default App;
