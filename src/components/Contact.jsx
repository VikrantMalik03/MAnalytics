import React from 'react'
import { Link } from 'react-router-dom';
import About_Us from './About_Us';
import Pricing from './Pricing';
import Home from './Home';
import Footer from './Footer';
import Header from './Header';
const Contact = () => {
    return (
        <>
           <Header/>
            <section>
                <div className='contact-page'>
                    <div>
                        <img src="/signup.gif" alt="" />
                    </div>
                    <div className='form'>
                        <div className='gen-info'>
                            <div className='gen-heading'>
                                <h3>Contact Us to Sign Up to Get Started</h3>
                            </div>
                            <div className='gen-para'>
                                <p>Explore the future with <br /> Feel free to get in touch.</p>
                            </div>
                        </div>
                        <div className='input-area'>
                            <label htmlFor="">Name</label>
                            <textarea >Full Name</textarea>
                        </div>

                        <div className='input-area'>
                            <label htmlFor="">E-mail</label>
                            <textarea >Email Address</textarea>
                        </div>

                        <div className='input-area'>
                            <label htmlFor="">Message</label>
                            <textarea >How can we get better?</textarea>
                        </div>

                        <button>Send Message</button>

                    </div>

                </div>
            </section>

            <Footer/>
        </>
    )
}

export default Contact;
