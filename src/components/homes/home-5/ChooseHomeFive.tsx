
import Count from '@/common/Count';
import React from 'react';

const ChooseHomeFive = () => {
  return (
    <>
      <section className="choose-us-section-5 fix section-padding pb-0">
            <div className="container">
                <div className="choose-us-wrapper-5">
                    <div className="row g-4">
                        <div className="col-xl-6 col-lg-6">
                            <div className="choose-content">
                                <div className="section-title color-blue">
                                    <h6 className="wow fadeInUp">
                                        Why Choose Us
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Tailored Coaching to Accelerate Your Business
                                    </h2>
                                </div>
                                <div className="choose-items mt-4 mt-md-0 ">
                                    <div className="circle-text wow fadeInUp" data-wow-delay=".3s">
                                        <img src="assets/img/circle-5.png" alt="img" className="circle-animation" />
                                        <div className="icon">
                                            <i className="far fa-arrow-right"></i>
                                        </div>
                                    </div>
                                    <div className="counter-box wow fadeInUp" data-wow-delay=".5s">
                                        <h2 className="title"><span className="odometer" data-count="23"> <Count number={23} text='+' />  </span></h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6">
                            <div className="choose-us-items-5">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="choose-box-3 border-left-none  border-top-none">
                                            <div className="icon">
                                                <i className="flaticon-graduation"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Scholarship Facility</h5>
                                                <p>
                                                    Scholarship facility provides
                                                    financial assistance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="choose-box-3 border-right-none border-left-none border-top-none">
                                            <div className="icon">
                                                <i className="flaticon-instructor"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Expert Instructors</h5>
                                                <p>
                                                    Scholarship facility provides
                                                    financial assistance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                        <div className="choose-box-3 border-left-none border-bottom-none border-top-none">
                                            <div className="icon">
                                                <i className="flaticon-certficate"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Certificate Program</h5>
                                                <p>
                                                    Scholarship facility provides
                                                    financial assistance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                        <div className="choose-box-3 border-left-none border-bottom-none  border-top-none border-right-none">
                                            <div className="icon">
                                                <i className="flaticon-school"></i>
                                            </div>
                                            <div className="content">
                                                <h5>Scholarship Facility</h5>
                                                <p>
                                                    Scholarship facility provides
                                                    financial assistance
                                                </p>
                                            </div>
                                        </div>
                                    </div>
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

export default ChooseHomeFive;