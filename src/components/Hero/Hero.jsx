import React from 'react'
import './Hero.css'
const Hero = () => {
  return (
   <>
   <div className="hero">
      <div className="container">
         <div className="hero__wrapper">
            <div className="pon">
            <h2>Building digital <br /> products, brands <br /> & experience</h2>
            <p>Digital Agency is your online team mangement tool that <br /> easy and prompt
            </p>
            <button className='hero__btn'>Contact Us</button>
            </div>


            <div className="div">
               <img src="/hero.png" alt="" />
            </div>
         </div>
      </div>
   </div>
   </>
  )
}

export default Hero