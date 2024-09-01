import React, { useState } from 'react';
import Footer from './Footer';
import Header from './Header';
import './style.css'; // Adjust the path as needed

const Pricing = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAnswer = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };
    const questions = [
        {
            question: 'How does this work?',
            answer: 'This is where you would provide a detailed explanation of how the product or service works.'
        },
        {
            question: 'What are the benefits?',
            answer: 'Here, you would list the key benefits of using the product or service.'
        },
        {
            question: 'Is it difficult to use?',
            answer: 'Explain how easy and straightforward the product or service is to use.'
        },
        {
            question: 'Can I have custom pricing?',
            answer: 'Provide information about the availability of custom pricing options.'
        },
        {
            question: 'Is there a trial version available?',
            answer: 'Describe the trial version, if one is offered, and how users can access it.'
        },
        {
            question: 'Where do I sign up?',
            answer: 'Include instructions or a link for users to sign up for the product or service.'
        }
    ];
    return (
        <>
            <Header/>

            <section>
                <div className="pricing-cards">
                    <div className="card basic">
                        <h3>Basic</h3>
                        <p className="price">Free</p>
                        <p className="description">For individuals and small teams</p>
                        <button className="get-started-btn">Get Started with Basic</button>
                    </div>
                    <div className="card basic">
                        <h3>Basic +</h3>
                        <p className="price">&#8377;99/month</p>
                        <p className="description">For individuals and small teams</p>
                        <button className="get-started-btn">Get Started with Basic</button>
                    </div>
                    <div className="card pro">
                        <h3>Pro +</h3>
                        <p className="price">&#8377;399/month</p>
                        <p className="description">For startups and growing businesses</p>
                        <div className="popular-tag">Most Popular</div>
                        <button className="get-started-btn">Get Started with Pro</button>
                    </div>
                    <div className="card business">
                        <h3>Business</h3>
                        <p className="price">&#8377;999/month</p>
                        <p className="description">For organizations with advanced needs</p>
                        <button className="get-started-btn">Get Started with Business</button>
                    </div>
                </div>
            </section>

            <section>

                <div className='heading'>
                    <p>Compare Features</p>
                </div>
                <div className='plan-info' >
                    <div className='plans'>
                        <p>Basic</p>
                        <div className='plan-details'>
                            <div><img src="/check.png" alt="tick" />Labour Expenses - InHouse & Vendor</div>
                            <div><img src="/check.png" alt="tick" />Site Attendence</div>
                        </div>

                    </div>

                    <div className='plans'>
                        <p>Basic +</p>
                        <div className='plan-details'>
                            <div><img src="/check.png" alt="tick" />Purchase Order - Only Quotation Invoice</div>
                            <div><img src="/check.png" alt="tick" />Site Dashboard with Low Details</div>
                            <div><img src="/check.png" alt="tick" />Labour Expenses - InHouse & Vendor</div>
                            <div><img src="/check.png" alt="tick" />Site Attendence</div>
                        </div>

                    </div>

                    <div className='plans'>
                        <p>Pro +</p>
                        <div className='plan-details'>
                            <div><img src="/check.png" alt="tick" />Schedule Management</div>
                            <div><img src="/check.png" alt="tick" />Labour Vendor Dashboard with Schedule Management</div>
                            <div><img src="/check.png" alt="tick" />Material Vendor</div>
                            <div><img src="/check.png" alt="tick" />Purchase Order - Ouotation Invoice / Delivery Tracking</div>
                            <div><img src="/check.png" alt="tick" />Site Dashboard with Schedule Progress</div>
                            <div><img src="/check.png" alt="tick" />Labour Expenses - InHouse & Vendor</div>
                            <div><img src="/check.png" alt="tick" />Site Attendence</div>
                        </div>
                    </div>

                    <div className='plans'>
                        <p>Premium</p>
                        <div className='plan-details'>
                            <div><img src="/check.png" alt="tick" />Schedule Planning with Daily Progress Report</div>
                            <div><img src="/check.png" alt="tick" />Vendor Dashboard & Schedule Management</div>
                            <div><img src="/check.png" alt="tick" />Purchase Order - Quotation / Invoice / Transaction</div>
                            <div><img src="/check.png" alt="tick" />Inventory - Equipments & Tools Owned</div>
                            <div><img src="/check.png" alt="tick" />Site Dashboard - Complete Analysis</div>
                            <div><img src="/check.png" alt="tick" />Labour Expenses - InHouse & Vendor</div>
                            <div><img src="/check.png" alt="tick" />Invoice & Transactions</div>
                            <div><img src="/check.png" alt="tick" />Site Attendence</div>
                        </div>
                    </div>

                </div>


            </section>

            <section>
                <div className="faq-container">
                    <h2>Frequently asked questions</h2>
                    <div className="faq-accordion">
                        {questions.map((faq, index) => (
                            <div
                                key={index}
                                className={`faq-item ${activeIndex === index ? 'active' : ''}`}
                                onClick={() => toggleAnswer(index)}
                            >
                                <div className="faq-question">
                                    <h3>{faq.question}</h3>
                                    <span className="faq-toggle">{activeIndex === index ? '-' : '+'}</span>
                                </div>
                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


            <section>
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
};
export default Pricing;
