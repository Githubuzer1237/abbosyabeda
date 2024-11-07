import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Trusted from './components/Trusted/Trusted'
import Branding from './components/Branding/Branding'
import Custome from './components/Custome/Custome'
import Test from './components/Testimonials/Test'
import Part from './components/Part/Part'
import Footer from './components/Footer/Footer'
const App = () => {
  return (
    <>
     <Header />
     <Hero />
     <Trusted />
     <Branding />
     <Custome />
     <Test/>
     <Part />
     <Footer />
    </>
  )
}

export default App