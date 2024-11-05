import React, { useState } from 'react'
import './Header.css'
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
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Testimonials</a>
            <a href="">Contact</a>
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