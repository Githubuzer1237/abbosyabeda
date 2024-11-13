import React from 'react'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Testimonials from './pages/Testimonials'
import Contact from './pages/Contact'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
     



   <Header />
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/testimonials" element={<Testimonials/>} />
      <Route path="/contact" element={<Contact/>} />

      
    </Routes>
    <Footer />
    </>
  )
}

export default App