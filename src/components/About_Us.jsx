import React from 'react'
import Footer from './Footer';
import Header from './Header';

const About_Us = () => {
  return (
    <>
      <Header/>

      <section>
        <div className="about-us-container">
          <h1>About us</h1>
          <p>
          Discover how M3 Analytics can enhance your civil site efficiency with cutting-edge solutions. Join our community today and unlock the full potential of optimized operations!
          </p>
          <div className="about-us-icons">
            <div className="icon-container">
              <div className="icon gray-circle"></div>
              <div className="icon gray-circle"></div>
            </div>
            <div className="icon-container">
              <div className="icon blue-circle"></div>
              <div className="icon blue-circle"></div>
            </div>
            <div className="icon-container">
              <div className="icon yellow-circle"></div>
              <div className="icon yellow-circle"></div>
              <div className="icon yellow-circle"></div>
            </div>
            <div className="icon-container">
              <div className="icon blue-circle"></div>
              <div className="icon blue-circle"></div>
            </div>
            <div className="icon-container">
              <div className="icon yellow-circle"></div>
              <div className="icon yellow-circle"></div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="our-mission-container">
          <h1>Our Future Plans</h1>
          <p>
          Planned enhancements include AI-driven recommendations based on historical data and 3D modeling for real-time site progress visualization.
          </p>

        </div>
        <div className='about'>
          <div className='about-left'>
            <p>Let's Start <br />Working <br />More Efficiently <br />Today</p>

          </div>
          <div className='about-right'>
            <img src="/gettyimages-1464561980-612x612.jpg" alt=".." />
          </div>
        </div>

      </section>


     

      

      <Footer/>






    </>
  )
}

export default About_Us

