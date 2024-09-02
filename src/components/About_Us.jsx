import React from 'react'
import Footer from './Footer';
import Header from './Header';
import { FadeIn } from './FadeIn';

const About_Us = () => {
  return (
    <>
      <Header />
      <FadeIn>
      
        <div className="about-us-container">
          <h1>About us</h1>
          <p>
            Discover how M3 Analytics can enhance your civil site efficiency with cutting-edge solutions. Join our community today and unlock the full potential of optimized operations!
          </p>
        </div>
        <div className='abt-img'>
          <img src="/photo.svg" alt="" />
        </div>
      
      </FadeIn>

      <FadeIn>
      
        <div className="our-mission-container">
          <h1>Our Future Plans</h1>
          <p>
            Planned enhancements include AI-driven recommendations based on historical data and 3D modeling for real-time site progress visualization.
          </p>

        </div>
        <div className='about'>
          <div className='about-left'>
            <p>Let's Start  Working  More Efficiently  Today</p>

          </div>
          <div className='about-right'>
            <img src="/3d.jpg" alt=".." />
          </div>
        </div>

      
      </FadeIn>
      <Footer />
    </>
  )
}

export default About_Us

