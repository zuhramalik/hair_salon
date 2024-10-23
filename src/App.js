import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Contact from './Components/Contact';
import Services from './Components/Services';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Blog  from './Components/Blog';
import ServiceDetails from './Components/ServiceDetails';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About/>} />
          <Route path="/Blog" element={<Blog/>} />
          <Route path="/ServiceDetails" element={<ServiceDetails/>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;