import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact';
import Services from './Components/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App