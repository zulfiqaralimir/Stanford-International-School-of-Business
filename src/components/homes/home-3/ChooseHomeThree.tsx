"use client"
import VideoPopup from '@/modals/VideoPopup';
import React, { useState } from 'react';

const ChooseHomeThree = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <>
       <section className="choose-us-section-3 fix section-padding pt-0">
           <div className="choose-us-wrapper-3">
                <div className="row g-0">
                    <div className="col-xxl-7 col-xl-6 col-lg-6">
                        <div className="video-image wow img-custom-anim-left">
                            <img src="assets/img/feature/video.jpg" alt="img" />
                            <a 
                            onClick={() => setIsVideoOpen(true)}
                            style={{ cursor: "pointer" }}
                            className="video-btn ripple video-popup">
                                <i className="fas fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="col-xxl-5 col-xl-6 col-lg-6">
                        <div className="choose-content">
                            <div className="section-title">
                                <h6 className="text-white wow fadeInUp">
                                    Why Choose Us
                                </h6>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    Why Choose Our Eduspace Campus
                                </h2>
                            </div>
                            <p className="mt-3 mt-md-0 text-white wow fadeInUp" data-wow-delay=".5s">
                                We offer a diverse range of programs designed to equip students with the knowledge, skills, and real-world experience needed.
                            </p>
                            <div className="row">
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="flaticon-kayak"></i>
                                        </div>
                                        <h3>Sports & Games</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="flaticon-violin"></i>
                                        </div>
                                        <h3>Music Arts & Clubs</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="flaticon-provision"></i>
                                        </div>
                                        <h3>Efficient & Flexible</h3>
                                    </div>
                                </div>
                                <div className="col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="icon-items">
                                        <div className="icon">
                                            <i className="flaticon-certificate"></i>
                                        </div>
                                        <h3>Certified Institute</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="circle-shape">
                                <img src="assets/img/feature/circle-shape.png" alt="img" />
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

export default ChooseHomeThree;