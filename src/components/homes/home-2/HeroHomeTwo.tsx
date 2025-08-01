
"use client"
import Link from 'next/link';
import Count from '@/common/Count';
import React, { useState } from 'react';
import VideoPopup from '@/modals/VideoPopup';


const HeroHomeTwo = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="hero-section hero-2 fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-6">
                        <div className="hero-content">
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Best Quality
                                Online Courses
                                With <span>Eduspace <img src="assets/img/hero/bar-shape-2.png" alt="shape-img" /></span>
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Online courses have revolutionized the people learn
                                by offering and a wide range every interest
                            </p>
                            <div className="hero-button">
                                <Link href="/courses" className="theme-btn wow fadeInUp" data-wow-delay=".3s">Find Best Courses</Link>
                                <span className="button-text wow fadeInUp" data-wow-delay=".5s">
                                    <a  onClick={() => setIsVideoOpen(true)}
                                        style={{ cursor: "pointer" }} 
                                        className="video-btn video-popup">
                                        <i className="fas fa-play"></i>
                                    </a>
                                    <span className="ms-3 d-line">Play Video</span>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="hero-image-items">
                            <div className="hero-image">
                                <img src="assets/img/hero/hero-2.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.5s" />
                                <div className="hero-shape">
                                    <img src="assets/img/hero/hero-shape.png" alt="img" className="wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.2s" />
                                </div>
                                <div className="counter-box float-bob-y">
                                    <p>More then</p>
                                    <h2><span className="odometer" data-count="2800">
                                        <Count number={2800} text='+' />
                                        </span></h2>
                                    <p>Quality Courses</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

         {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"Ml4XCF-JS0k"}
      />
      {/* video modal end */}
    </>
  );
};

export default HeroHomeTwo;