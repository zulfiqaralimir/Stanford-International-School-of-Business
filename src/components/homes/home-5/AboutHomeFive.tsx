"use client" 
import Link from 'next/link';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const AboutHomeFive = () => {
  const percentage = 89
  const percentage2 = 76
 
  return (
    <>
      <section className="about-section fix section-padding pt-0">
            <div className="container">
                <div className="about-wrapper-4">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src="assets/img/about/04.jpg" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                <div className="about-image-2">
                                    <img src="assets/img/about/05.jpg" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.5s" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <div className="section-title color-blue">
                                    <h6 className="wow fadeInUp">
                                        About Eduspace
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        We Provide Quality Business Coach
                                    </h2>
                                </div>
                                <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                                        Whether its improving leadership skills, optimizing business they
                                        operations or driving growth business coach provides
                                </p>
                                <div className="circle-progress-bar-wrapper">
                                    <div className="single-circle-bar wow fadeInUp" data-wow-delay=".3s">
                                        <div className="circle-bar" data-percent="89" data-duration="2000">
                                        <CircularProgressbar value={percentage} text={`${percentage}%`} />
                                        </div>
                                        <div className="content">
                                            <h6>
                                                Students <br /> Success Rate
                                            </h6>
                                        </div>
                                    </div>
                                    <div className="single-circle-bar wow fadeInUp" data-wow-delay=".5s">
                                        <div className="circle-bar" data-percent="76" data-duration="2000">
                                        <CircularProgressbar value={percentage2} text={`${percentage2}%`} />
                                        </div>
                                        <div className="content">
                                            <h6>
                                                Experience <br />
                                                & Skilled
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="row g-4">
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                        <ul className="list">
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Personalized Coach
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Proven Track Record
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Continuous Support
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                                        <ul className="list">
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Leadership Skills
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Tailored Coaching
                                            </li>
                                            <li>
                                                <i className="fas fa-check-circle"></i>
                                                Support & Feedback
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="about-author">
                                    <div className="about-button wow fadeInUp" data-wow-delay=".3s">
                                        <Link href="/about" className="theme-btn" style={{width: "200px", textAlign: "center", display: "block"}}> 
                                            Learn More Us
                                        </Link>
                                    </div>
                                    <div className="author-image d-flex align-items-center gap-3 wow fadeInUp" data-wow-delay=".5s" />
                                        <img src="assets/img/about/client.png" alt="signature" />
                                        <img src="assets/img/about/signture.png" alt="signature" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
        </section>
    </>
  );
};

export default AboutHomeFive;