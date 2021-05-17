import React from 'react';
import Layout from '../components/layout';
// import Image from 'gatsby-image'
import TarotPic from '../assets/images/TarotPic.jpg';
import lakeside from '../assets/images/lakeside.jpg';
import trees from '../assets/images/through-the-trees.jpg';
import scheduleTarot from '../assets/images/tarotCards.jpg';

import config from '../../config/website';

const IndexPage = () => (
    <Layout fullMenu={false}>
        <section id="banner">
            <div className="inner">
                <div className="logo">
                    <span className="icon fa-diamond"></span>
                </div>
                <h2>{config.heading}</h2>
                <p>{config.subHeading}</p>
            </div>
        </section>
        <section id="wrapper">
            <section id="one" className="wrapper spotlight style1">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={TarotPic} alt="" />
                    </a>
                    <div className="content">
                        <h2 className="major">About Juanita</h2>
                        <p>
                            Juanita Segovia is an intuitive tarot diviner
                            who does personal readings by video chat, telephone, or in person
                            sessions & telephone. With Juanita’s intuitive
                            guidance you may discover information that will
                            provide you with clarity in making advantageous
                            decisions in your future.
                        </p>
                        {/* <a href="/#" className="special">
                            Learn more
                        </a> */}
                    </div>
                </div>
            </section>
            <section id="two" className="wrapper alt spotlight style4">
                <div className="inner">
                    
                    <div className="content">
                        <h2 className="major">How it works</h2>
                        <p>
                            Have a wise chat. With Tarot as the framework, we will draw out answers that are already inside of you. We throw a spread and take a journey through the past, present, immediate future, influences, obstacles, and possible outcomes. With intuitive guidance, the Tarot's rich allegorical images, mirror back questions and answers to the inquirer.
                        </p>
                        <a href="/#" className="image">
                            <img src={scheduleTarot} alt="" />
                        </a>
                        <h2 className="major">About Tarot</h2>
                        <p>
                            The tarot were originally a deck of 78 playing cards dating back to the 14th century that evolved into a divination tool appearing in the late 18th century. The images in the tarot contain rich complex allegories that relate to conditions, archetypes and aspects of human life. By pairing intuition with the images of the tarot, the user can gain subconscious information that may provide favorable outcomes in life.
                        </p>
                    </div>
                </div>
            </section>
            <section id="three" className="wrapper spotlight style3">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={lakeside} alt="" />
                    </a>
                    <div className="content">
                        <h2 className="major">Schedule a reading</h2>
                        <p>
                            Tarot readings can be scheduled for 15, 30, and 60 minute sessions at:
                        </p>
                        <a target="_blank" href="https://squareup.com/appointments/book/1ftamdxjh5m52r/LWHDZ5CQ0352D/start">Book an Appointment</a>
                        <p>
                            Please scroll down past the Salon services<br></br> to find the appointments for Tarot services.
                        </p>
                        
                    </div>
                </div>
            </section>
            <section id="four" className="wrapper alt spotlight style4">
                <div className="inner">
                    <a href="/#" className="image">
                        <img src={trees} alt="" />
                    </a>
                    <div className="content">
                        <h2 className="major">Rescheduling & Cancellation Policy</h2>
                        <p>
                            Rescheduling your appointment can be done through the scheduling app through which you received your appointment confirmation or by contacting Segovia Tarot directly at 208-371-9653.
                            You will receive a full refund if you cancel your appointment prior to 24 hours before your appointment.
                        </p>
                    </div>
                </div>
            </section>
        </section>
    </Layout>
);

export default IndexPage;
