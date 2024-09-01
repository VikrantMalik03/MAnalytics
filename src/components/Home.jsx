import React from 'react';
import Typewriter from 'typewriter-effect';
import Footer from './Footer';
import Header from './Header';
import ImageSlider from '../ImageSlider';





const Home = () => {

    const slides = [
        { url: "/dash1.png", title: "beach" },
        { url: "/dash2.png", title: "beach" },
        { url: "/dash3.png", title: "beach" },
        

    ];
    const containerStyles = {
        width: "58.5rem",
        height: "26rem",
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
    };


    const vendors = [
        { url: "/vebb.png", title: "beach" },
        { url: "/xx.png", title: "beach" },


    ];
    const containerstyy = {
        width: "58.5rem",
        height: "26rem",
        margin: "0 auto",
        padding: "20px",
        boxSizing: "border-box",
        overflow: "hidden",
        position: "relative",
    };

    const getResponsiveStyles = () => {
        const screenWidth = window.innerWidth;
    
        if (screenWidth <= 768) { // Tablet and below
            return {
                width: "90%", // Adjust the width to be responsive
                height: "20rem", // Adjust height for smaller screens
                padding: "10px",
            };
        } else if (screenWidth <= 480) { // Mobile devices
            return {
                width: "95%", // Full width for very small screens
                height: "18rem", // Further reduce height
                padding: "5px",
            };
        } else { // Default desktop styles
            return {
                width: "58.5rem",
                height: "26rem",
                padding: "20px",
            };
        }
    };



    return (
        <>
            <Header />
            <main>
                <section>
                    <div className="home-main">
                        <div className="home-left">
                            <p  className="info">
                            M3 Analytics: Empowering Civil Site Efficiency through Seamless Integration of
                                <div>
                                    <Typewriter
                                        options={{
                                            strings: ['Materials', 'Measurement', 'Man-Power'],
                                            autoStart: true,
                                            loop: true,
                                            cursor: '|',
                                            cursorClassName: 'custom-cursor', // Custom cursor class
                                            delay: 100,
                                            deleteSpeed: 50,
                                        }}
                                    />
                                </div>
                            </p>
                        </div>
                        <div>
                            <img className="gif" src="/suu.gif" alt="img" />
                        </div>
                    </div>
                    <div className="home-down">
                        <p>Trusted by Individuals and teams at the World's best Companies.</p>
                        <div className='logos'>
                            <img className="logo" src="./logo.svg" alt="Digital Fortress" />
                            <img className="logo" src="./ref_logo.png" alt="velvizi" />
                        </div>
                    </div>
                </section>
                <section>
                    <div className="home-2card">
                        <div className="card-wrapper">
                            <div className="box1">
                                <div className="box-container">
                                    <div>
                                        <h2>Purchase Order System</h2>
                                        <p>A real-time purchase order system allows for colloborative input, tracking deliveries, and managing payments, with automatic status updates based on delivery quantities.</p>
                                        <div className="main-input">
                                            <button>Try for free</button>
                                        </div>
                                    </div>
                                    <div>
                                        <img className="image2" src="/allu.png" alt="Example Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-card"></div>
                        </div>
                    </div>
                </section>

                    <div className="home3">
                        <div >
                            <img className="image3" src="/hero.png" alt="colour" />
                        </div>
                        <div className="div-container">
                            <div className='info1'>
                                <h2>Revolutionzie your civil Engineering Data Managment </h2>
                            </div>
                            <div className='info2'>Stream line your project with our cutting edge web&app solutions<br /> with integrated progress tracking at all levels.</div>
                            <div className="main-input">
                                <button>Try Now</button>
                            </div>

                        </div>
                    </div>
                                        
                    <div className="home-vendor">
                        <div className="div-container2">
                            {/* <div>COST SAVER</div> */}
                            <div className='home3-left'>
                                <h2>Vendors</h2>

                                <p>Vendors  are categorised as purchase-only , labour-only contractors or combined labour and material contractors, with task trackin implemented for contractor workers.</p>
                                
                            </div>

                        </div>
                        <div className='Vendorslides'>
                            <div style={containerstyy}>
                                <ImageSlider slides={vendors} />
                            </div>
                        </div>
                    </div>

                    <div className="home-2card">
                        <div className="card-wrapper">
                            <div className="box1">
                                <div className="box-container">
                                    <div>
                                        <img className="image2" src="./bhai.png" alt="Example Image" />
                                    </div>
                                    <div>
                                        <h2>Introducing <br /> Expense Track</h2>
                                        <p>An expense page tracks non-PO site costs, categorizing them as labor vendor, in-house, and purchase/rent expenses, with weekly in-house expense reports available.</p>
                                        <div className="main-input">
                                            <button>Try for free</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-card"></div>
                        </div>
                    </div>
                    <div className="home3">
                        <div className="div-container2">
                           
                            <div className='home4-left'>
                            <h2>Get Started With M3 Analytics  Dashboard</h2>

                            <p>A comprehensive sites dashboard provides an organizational <br /> overview, displaying monthly expense reports and task progress for each site under management.</p>
                                <div className="main-input">
                                <button>Sign Up Now</button>
                                </div>

                            </div>

                        </div>
                        <div className='Vendorslides'>
                        <div style={containerStyles}>
                                            <ImageSlider slides={slides} />
                                        </div>
                        </div>
                    </div>

                
            </main>




            <Footer />







        </>
    )
};

export default Home;

