

import Count from '@/common/Count';
import React from 'react';

const ChooseHomeOne = () => {
  return (
    <>
      <section className="choose-us-section fix section-padding">
            <div className="container">
                <div className="main-choose-us-wrapper">
                    <div className="line-shape">
                        <img src="assets/img/line-shape.png" alt="" />
                    </div>
                    <div className="choose-us-top">
                        <div className="section-title mb-0">
                            <h6 className="wow fadeInUp">
                                Why Choose Us
                            </h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Master New Skills <br /> with Our Engaging <br /> and Interactive
                            </h2>
                        </div>
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-satisfaction"></i>
                            </div>
                            <div className="content">
                               <h2><span className="odometer" data-count="99"> <Count number={99} text='%' /> </span></h2>
                               <p>
                                    Education is a vital process
                                    fosters personal growth.
                               </p>
                            </div>
                        </div>
                    </div>
                    <div className="choose-us-bottom">
                        <div className="icon-items wow fadeInUp" data-wow-delay=".3s">
                            <div className="icon">
                                <i className="flaticon-graduation"></i>
                            </div>
                            <div className="content">
                                <p>Student Enrolled</p>
                                <h2><span className="odometer" data-count="48.5"><Count number={99} text='.5k' /></span></h2>
                                <p>
                                    Education is a vital process
                                    fosters personal growth.
                                </p>
                            </div>
                        </div>
                        <div className="icon-items style-2 wow fadeInUp" data-wow-delay=".5s">
                            <div className="icon">
                                <i className="flaticon-instructor"></i>
                            </div>
                            <div className="content">
                                <p>Instructors</p>
                                <h2><span className="odometer" data-count="250"><Count number={250} text='+' /></span></h2>
                                <p>
                                    Education is a vital process
                                    fosters personal growth.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ChooseHomeOne;