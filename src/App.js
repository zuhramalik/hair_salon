import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App