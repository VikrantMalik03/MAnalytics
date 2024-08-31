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
            We offer revolutionary solutions to industry problems. <br />Join Lando community and experience the benefits of company <br />optimization today!
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


      {/* <section>
        <div className="team">
          <h1>Team</h1>
          <p>Meet the people behind our magical product</p>
        </div>

        <div className="members">
          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>


          <div className="spacer"></div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>

          <div className="member">
            <img src="/dp.jpeg" alt="Harshika" />
            <h1>CEO</h1>
            <h3>Harshika</h3>
          </div>
        </div>
      </section> */}


      <section className='about_section'>
      <div className="home-2card">
          <div className="card-wrapper">
            <div className="box1">
              <div className="box-container">
                <div>
                  <h2>Get Started With<br /> M3 Analytics</h2>
                  <p>Join our community and experience <br /> the benefits today!</p>
                  <div className="main-input">
                    <button>Sign Up Now</button>
                  </div>
                </div>
                <div>
                  <img className="image2" src="./image 2.avif" alt="Example Image" />
                </div>
              </div>
            </div>
            <div className="shadow-card"></div>
          </div>
        </div>
      </section>

      <Footer/>






    </>
  )
}

export default About_Us

