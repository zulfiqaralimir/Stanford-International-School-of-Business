import Link from 'next/link';
import React from 'react';

const AboutHomeFour = () => {
  return (
    <>
      <section className="about-section fix section-padding">
            <div className="container">
                <div className="about-wrapper-3">
                    <div className="row g-4 align-items-center">
                        <div className="col-xl-8 col-lg-7">
                            <div className="about-content">
                                <div className="section-title mb-0 color-pink">
                                    <h6 className="wow fadeInUp">
                                        About Eduspace
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Building Bright Futures A Journey of Early Education
                                        Foundations for Future
                                    </h2>
                                </div>
                                <div className="about-items">
                                    <div className="circle-text">
                                        <img src="assets/img/circle-text.png" alt="img" className="circle-animation" />
                                        <div className="icon">
                                            <img src="assets/img/flower.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <p className="wow fadeInUp" data-wow-delay=".3s">
                                            kindergarten school plays a crucial role in shaping the early development of young children, providing nurture environment where they can explore, learn, and grow balanced discovery.
                                        </p>
                                        <Link href="/courses" className="theme-btn pink-btn wow fadeInUp" data-wow-delay=".5s">Learn More Us</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="hero-image float-bob-y">
                                <img src="assets/img/about/05.png" alt="img" className="img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/about/circle-bg.png" alt="img" />
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

export default AboutHomeFour;