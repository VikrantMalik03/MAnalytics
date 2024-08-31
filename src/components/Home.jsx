import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css'
import Footer from './Footer';
import Header from './Header';




const Home = () => {

    // const [isNavOpen, setIsNavOpen] = useState(false);

    // const toggleNav = () => {
    //     setIsNavOpen(!isNavOpen);
    // };

    
    // const reviews = [
    //     {
    //         name: 'Siddharth Singhal',
    //         description: 'Love your health app! It keeps me on track with meds and health tips. So handy!',
    //     },
    //     {
    //         name: 'Mohit Kumar',
    //         description: 'Teaching made easy! Your education app engages students and simplifies my job.',
    //     },
    //     {
    //         name: 'Rakshit Sharma',
    //         description: 'Your doctor web app rocks! It helps me manage appointments and patient info hassle-free.',
    //     },
    //     {
    //         name: 'Radhika Singh',
    //         description: 'Your health app is a lifesaver! It reminds me of important health tasks and provides valuable insights for a healthier lifestyle.',
    //     },
    //     {
    //         name: 'Ishan Thakur',
    //         description: 'The education app is a game-changer! It\'s user-friendly and enhances learning for students of all ages.',
    //     },
    // ];
    return (
        <>
            <Header/>
            <main>
                <section>
                    <div className="home-main">
                        <div className="home-left">
                            <div>-FREE 30 DAYS TRIAL
                                <p className="info">M3 BOOK</p>
                            </div>
                            <div>M3 BOOK handles the three most important aspects of a civil site <br />i.e. materials, <br />measurement and <br /> management.</div>
                            <div className="main-input">
                                <button>Try for free</button>
                                <button>See how it works</button>
                            </div>
                        </div>
                        <div >
                            <img className="image" src="/logo1.avif" alt="img" />

                        </div>
                    </div>

                    <div className="home-down">
                        <p>Trusted by Individuals and teams at the World's best Companies.</p>
                        <div className='logos' >
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
                                        <img className="image2" src="./image 2.avif" alt="Example Image" />
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-card"></div>
                        </div>
                    </div>
                </section>

                <section>
                    <div className="home3">
                        <div >
                            <img className="image3" src="./image3.jpg" alt="colour" />
                        </div>
                        <div className="div-container">
                            <div>SMART SAVE</div>
                            <div>
                                <h2>ALL YOUR WORK IS SAFE WITH US </h2>
                            </div>
                            <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> In laboriosam distinctio qui ducimus amet! <br /> Maiores officiis ad porro amet est?</div>
                            <div className="main-input">
                                <button>Try Now</button>
                            </div>

                        </div>
                    </div>
                </section>

                <section>
                    <div className="home3">
                        <div className="div-container2">
                            {/* <div>COST SAVER</div> */}
                            <div>
                                <h2>Vendors</h2>
                            </div>
                            <div>Vendors  are categorised as purchase-only , labour-only contractors or combined labour and material contractors, with task trackin implemented for contractor workers.</div>
                            <div className="main-input">
                                <button>Try Now</button>
                            </div>

                        </div>
                        <div >
                            <img className="image4" src="./image3.jpg" alt="colour" />
                        </div>
                    </div>
                </section>

                <section>
                    <div className="home-2card">
                        <div className="card-wrapper">
                            <div className="box1">
                                <div className="box-container">
                                    <div>
                                        <img className="image2" src="./image 2.avif" alt="Example Image" />
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
                </section>

                {/* <section>
                    <div className="review-main-container">
                        <div className="review-first">
                            <div className="review-main-text">
                                <h3>REVIEWS</h3>
                                <h5>Our Precious <br /> Customers' Reviews</h5>
                                <p>Our customers speaking about the value they uncovered with <br /> Indominus Labs...</p>
                            </div>
                            <div className="review-btn">

                                <button className="learn-more-btn review-btn-two">Request Demo</button>

                            </div>
                        </div>
                        <div className="review-second">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={30}
                                slidesPerView={1}
                                navigation
                                pagination={{ clickable: true }}
                                className="review-swiper"
                            >
                                {reviews.map((review, index) => (
                                    <SwiperSlide key={index} className="review-swiper-slide">
                                        <div className="review-card">
                                            <div className="image-content">
                                                <span className="overlay"></span>
                                                <div className="review-stars">
                                                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                                                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                                                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                                                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                                                    <i className="fa-solid fa-star" style={{ color: '#ffff00' }}></i>
                                                </div>
                                            </div>
                                            <div className="card-content">
                                                <h2 className="name">{review.name}</h2>
                                                <p className="description">{review.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </section> */}


                <section>


                    <div className="home-2card">
                        <div className="card-wrapper">
                            <div className="box1">
                                <div className="box-container">
                                    <div>
                                        <h2>Get Started With<br /> M3 Analytics  Dashboard</h2>
                                        <p>A comprehensive sites dashboard provides an organizational overview, displaying monthly expense reports and task progress for each site under management.</p>
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
            </main>

           


            <Footer/>







        </>
    )
};

export default Home;
