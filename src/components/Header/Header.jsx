import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
const [active, setActive] = useState(false)

const toggleBurger =() => {
    setActive(!active)
}



  return (
   <>
   <header className="header">
    <div className="container">
        <div className="header__wrapper">
        <img className='logo' src="/logo.png" alt="" />

        <div  className={`header__menu ${active ? 'active' : ''}`}  >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/testimonials">Testimonials</Link>
            <Link to="/contact">Contact</Link>
        </div>
        <div onClick={toggleBurger} className={`burger ${active ? 'active' : ''}`}>
            <span></span>
            <span></span>
        </div>

        </div>
    </div>
   </header>
   </>
  )
}

export default Header