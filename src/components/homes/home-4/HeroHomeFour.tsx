import Link from 'next/link';
import React from 'react';

const HeroHomeFour = () => {
  return (
    <>
      <section className="hero-section hero-4">
            <div className="border-shape">
                <img src="assets/img/hero/border.png" alt="img" />
            </div>
            <div className="border-shape-2">
                <img src="assets/img/hero/border-2.png" alt="img" />
            </div>
            <div className="parachute-shape float-bob-y">
                <img src="assets/img/hero/parachute-shape.png" alt="img" />
            </div>
            <div className="flower-shape float-bob-y">
                <img src="assets/img/hero/flower.png" alt="img" />
            </div>
            <div className="flower-shape-2 float-bob-x">
                <img src="assets/img/hero/flower-2.png" alt="img" />
            </div>
            <div className="star-shape">
                <img src="assets/img/hero/star.png" alt="img" />
            </div>
            <div className="container-fluid">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-6">
                        <div className="girl-image float-bob-x">
                            <img src="assets/img/hero/girl.png" alt="img" className="wow img-custom-anim-left" />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6">
                        <div className="hero-content">
                            <h6 className="wow fadeInUp">
                                Welcome to Eduspace
                            </h6>
                            <h1 className="wow fadeInUp" data-wow-delay=".3s">Growing Young Minds</h1>
                            <p className="wow fadeInUp" data-wow-delay=".5s">
                                Education is the cornerstone of personal and societal development
                                individuals with the knowledge, skills, and tools needed
                            </p>
                            <ul className="list">
                                <li className="wow fadeInUp" data-wow-delay=".3s">
                                    <span>
                                        <i className="far fa-book-open"></i>
                                    </span>
                                    853+ Courses
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".5s">
                                    <span>
                                        <i className="far fa-chalkboard-teacher"></i>
                                    </span>
                                    58+ Instructors
                                </li>
                                <li className="wow fadeInUp" data-wow-delay=".7s">
                                    <span>
                                        <i className="far fa-house"></i>
                                    </span>
                                    10+ Campus
                                </li>
                            </ul>
                            <div className="hero-button wow fadeInUp" data-wow-delay=".3s">
                                <Link href="/program" className="theme-btn">Explore Our Programs</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6">
                        <div className="boy-image float-bob-y">
                            <img src="assets/img/hero/boy.png" alt="img" className="wow img-custom-anim-right" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default HeroHomeFour;