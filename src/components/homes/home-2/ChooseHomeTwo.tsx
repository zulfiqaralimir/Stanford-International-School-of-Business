"use client";
import Count from '@/common/Count';
import React from 'react';

const ChooseHomeTwo = () => {
  return (
    <>
       <section className="choose-us-section choose-bg fix section-padding pt-0">
            <div className="container-fluid">
                <div className="choose-us-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-xxl-5 col-xl-6">
                            <div className="section-title mb-0">
                                <h6 className="yellow-text wow fadeInUp">
                                    Why Choose Us
                                </h6>
                                <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                    Smart Choice 
                                    Online Learning
                                    Excellence
                                </h2>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-6">
                            <div className="choose-us-counter-items">
                                <div className="row g-4">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="choose-us-counter-box">
                                            <div className="icon">
                                                <i className="flaticon-success"></i>
                                            </div>
                                            <div className="content">
                                                <h2><span className="odometer" data-count="48.5">
                                                  <Count number={48} text='.5k' />
                                                  </span></h2>
                                                <p>Student Enrolled</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="choose-us-counter-box style-2">
                                            <div className="icon">
                                                <i className="flaticon-instructor"></i>
                                            </div>
                                            <div className="content">
                                                <h2><span className="odometer" data-count="250">
                                                  <Count number={250} text='+' />
                                                  </span></h2>
                                                <p>SInstructors</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xxl-3 col-xl-4">
                            <div className="choose-us-image">
                                <img src="assets/img/feature/choose-us.png" alt="img" className="wow img-custom-anim-left" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeTwo;