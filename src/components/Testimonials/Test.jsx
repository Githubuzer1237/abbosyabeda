import React from 'react'
import './Test.css'
const Test = () => {
  return (
    <>
    <section className="test">
      <div className="container">
         <div className="test__wrapper">
         <p className='test__p'>TESTIMONIALS</p>
         <h1 className='test__h1'>Read What Other <br /> have to Say</h1>

         <div className="test__cards">
            <div className="test__card">
              <div className="prof">
               <img src="/andrew.png" alt="" />
               <h3>Andrew Rathore</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className="test__card">
              <div className="prof">
               <img src="/vera.png" alt="" />
               <h3>Vera Duncan</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
            <div className="test__card">
              <div className="prof">
               <img src="/mark.png" alt="" />
               <h3>Mark Smith</h3>
              </div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ullamcorper scelerisque mi, in malesuada felis malesuada vel. </p>
            </div>
         </div>
         </div>

      </div>
    </section>
    </>
  )
}

export default Test