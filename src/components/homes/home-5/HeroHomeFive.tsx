
import Link from 'next/link';
import React from 'react';

const HeroHomeFive = () => {
  return (
    <>
      <section className="hero-section fix hero-5" style={{background: `url(/assets/img/hero/hero-bg-5.png)`, backgroundRepeat: 'no-repeat'}}>
            <div className="hero-bg-2">
                <img src="assets/img/hero/hero-bg-6.png" alt="img" />
            </div>
            <div className="rocket-shape float-bob-y">
                <img src="assets/img/hero/rocket-shape.png" alt="img" />
            </div>
            <div className="rocket-shape-2 float-bob-y">
                <img src="assets/img/hero/rocket-shape-2.png" alt="img" />
            </div>
            <div className="frame-shape float-bob-x">
                <img src="assets/img/hero/frame.png" alt="img" />
            </div>
            <div className="frame-shape-2 float-bob-x">
                <img src="assets/img/hero/frame-2.png" alt="img" />
            </div>
           <div className="container">
                <div className="row g-4 align-items-center">
                    <div className="col-xxl-8 col-xl-7 col-lg-6">
                        <div className="hero-content">
                            <h6 className="text-white wow fadeInUp">
                                Welcome to Eduspace
                            </h6>
                            <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Transformative Business Coaching
                                for Leaders
                            </h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                A business coach plays pivotal role in helping entrepreneurs, executives, and business leaders unlock.
                            </p>
                            <Link href="/courses-details" className="theme-btn wow fadeInUp" data-wow-delay=".7s">Find Best Courses</Link>
                        </div>
                    </div>
                    <div className="col-xxl-4 col-xl-5 col-lg-6">
                        <div className="hero-image">
                            <img src="assets/img/hero/hero-5.png" alt="img" className="wow img-custom-anim-left" />
                            <div className="bg-shape">
                                <img src="assets/img/hero/bg-shape.png" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    </>
  );
};

export default HeroHomeFive;