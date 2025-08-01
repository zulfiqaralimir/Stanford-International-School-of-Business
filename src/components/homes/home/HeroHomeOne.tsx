
import Count from '@/common/Count';
import Link from 'next/link';
import React from 'react';

const HeroHomeOne = () => {
  return (
    <>
        <section className="hero-section hero-1 fix">
            <div className="shape-left">
                <img src="assets/img/hero/shape-left.png" alt="img" />
            </div>
            <div className="shape-right">
                <img src="assets/img/hero/shape-right.png" alt="img" />
            </div>
            <div className="dot-shape float-bob-x">
                <img src="assets/img/hero/dot.png" alt="img" />
            </div>
            <div className="vector-shape float-bob-y">
                <img src="assets/img/hero/vectoe.png" alt="img" />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="hero-content">
                            <span className="wow fadeInUp">Welcome to Eduspace</span>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">
                                Interactive Learning
                                Engaging Students in
                                the Digital Age
                            </h1>
                            <h3 className="wow fadeInUp" data-wow-delay=".5s">Get  2800+ Best Quality Online Courses From Eduspace</h3>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".7s">
                                <Link href="/courses-details" className="theme-btn hover-white">Find Your Best Courses</Link>
                            </div>
                        </div>
                    </div>
                    <div className="hero-image">
                        <img src="assets/img/hero/hero-1.jpg" alt="img" className="img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        <div className="counter-box float-bob-x">
                            <p>More then</p>
                            <h2><span className="odometer" data-count="2800">
                              <Count number={2800} text='+' />
                              </span></h2>
                            <p>Quality Courses</p>
                        </div>
                        <div className="rating-box float-bob-y">
                            <div className="content">
                                <h2><span className="odometer" data-count="4.8">
                                  <Count number={4} text=".8k" />
                                  </span></h2>
                                <p>5820+ Reviews</p>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                            </div>
                            <img src="assets/img/hero/trustpilot-logopng.png" alt="img" />
                        </div>
                        <div className="circle-img float-bob-y"> 
                            <img src="assets/img/hero/circle.png" alt="img" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeOne;