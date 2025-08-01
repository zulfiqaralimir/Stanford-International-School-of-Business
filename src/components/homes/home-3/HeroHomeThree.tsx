"use client";
import Link from 'next/link';
import React from 'react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const HeroHomeThree = () => {
  return (
    <>
      <section className="hero-section-3 hero-3">
            <Swiper 
                    loop={true}
                    slidesPerView={1}
                    effect="fade"
                    speed={3000}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".array-prev",
                        prevEl: ".array-next",
                    }}
                    pagination={{
                        el: ".dot",
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation, EffectFade, Autoplay]}
                    className="swiper hero-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-3.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Eduspace</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Unlock Your Potential
                                            with Eduspace
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Education is the cornerstone of personal and societal development, providing
                                            individuals with the knowledge, skills, and tools needed
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-4.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Eduspace</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Unlock Your Potential
                                            with Eduspace
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Education is the cornerstone of personal and societal development, providing
                                            individuals with the knowledge, skills, and tools needed
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="slider-bg bg-cover" style={{background: `url(/assets/img/hero/hero-5.jpg)`}}>
                            <div className="overlay-bg bg-cover" style={{background: `url(/assets/img/hero/ovelay-bg.png)`}}></div>
                        </div>
                        <div className="container">
                            <div className="row g-4 align-items-center justify-content-center">
                                <div className="col-lg-12">
                                    <div className="hero-content">
                                        <h6 data-animation="fadeInUp" data-delay="1.3s">Welcome to Eduspace</h6>
                                        <h1 data-animation="fadeInUp" data-delay="1.5s">
                                            Unlock Your Potential
                                            with Eduspace
                                        </h1>
                                        <p data-animation="fadeInUp" data-delay="1.7s">
                                            Education is the cornerstone of personal and societal development, providing
                                            individuals with the knowledge, skills, and tools needed
                                        </p>
                                        <div className="hero-button">
                                            <Link href="/courses-details" data-animation="fadeInUp" data-delay="1.9s" className="theme-btn red-btn">Find Your Best Courses</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>                 
                <div className="array-button">
                    <button className="array-prev"><i className="far fa-chevron-left"></i></button>
                    <button className="array-next"><i className="far fa-chevron-right"></i></button>
                </div>
            </Swiper>
            <div className="feature-section-3 style-margin-top section-padding pb-0">
                <div className="container">
                    <div className="feature-wrapper-3">
                        <div className="row">
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                <div className="feature-card-items">
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
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                <div className="feature-card-items">
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
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                <div className="feature-card-items">
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
                            <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                <div className="feature-card-items">
                                    <div className="icon">
                                        <i className="flaticon-school"></i>
                                    </div>
                                    <div className="content">
                                        <h5>Graduate Admissions</h5>
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
        </section>
    </>
  );
};

export default HeroHomeThree;