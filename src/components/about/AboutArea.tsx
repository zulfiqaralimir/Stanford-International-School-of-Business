
import Count from '@/common/Count';
import React from 'react';

const AboutArea = () => {
  return (
    <>
    <section className="about-section fix">
            <div className="about-wrapper-5">
                <div className="container">
                    <div className="row g-4 justify-content-between">
                        <div className="col-lg-6">
                            <div className="section-title mb-0">
                                <h6 className="wow fadeInUp">About Eduspace</h6>
                                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                    Empowering your Learner for Brighter
                                    Future & busines
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-content">
                                <p className="wow fadeInUp" data-wow-delay=".3s">
                                    Education is a vital process that fosters personal growth, societal development, and intellectual advancement. It equips
                                    individuals with the knowledge, skills, and critical thinking.
                                </p>
                                <div className="counter-box-items">
                                    <div className="counter-content wow fadeInUp" data-wow-delay=".3s">
                                        <h2><span className="odometer" data-count="23">
                                          <Count number={23} text='+' />
                                          </span></h2>
                                        <p>Years Of Experience</p>
                                    </div>
                                    <p className="text wow fadeInUp" data-wow-delay=".5s">
                                        Education not only empowers people pursue their career goals
                                        also encourages responsible.
                                    </p>
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

export default AboutArea;