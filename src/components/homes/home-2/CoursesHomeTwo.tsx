"use client";

import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
 

const CoursesHomeTwo = () => {
  return (
    <>
      <section className="live-courses-section section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Live Courses
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Unlock Knowledge in Real-Time <br />
                        Enroll in Our Live Courses
                    </h2>
                </div>
                <Swiper 
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  el: ".dot",
                  clickable: true,
                }}
                modules={[Pagination, Autoplay]}
                breakpoints={ {
                  1199: {
                      slidesPerView: 3,
                  },
                  991: {
                      slidesPerView: 2,
                  },
                  767: {
                      slidesPerView: 2,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper live-courses-slider">
                   
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-1.jpg)`}}>
                                    <div className="live-courses-content">
                                        <h3>
                                            <span>Figma Basic</span>
                                            to Advance
                                        </h3>
                                        <div className="icon">
                                            <img src="assets/img/live-courses/figma.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/01.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4><Link href="/courses-details">Figma Basic to Advance</Link></h4>
                                    <ul className="list">
                                        <li>
                                            <i className="fal fa-user-clock"></i>
                                            Adams
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            3 month
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            50+ Student
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Class</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                        <h3>
                                            <span>Basic HTML</span>
                                            to WordPress
                                        </h3>
                                        <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-2.png)`}}></div>
                                    <h4><Link href="/courses-details">Basic HTML To WordPress</Link></h4>
                                    <ul className="list">
                                        <li>
                                            <i className="fal fa-user-clock"></i>
                                            Adams
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            3 month
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            50+ Student
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Class</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-3.jpg)`}}>
                                    <div className="live-courses-content">
                                        <h3>
                                            <span>Advance </span>
                                            Motion Design
                                        </h3>
                                        <div className="icon">
                                            <img src="assets/img/live-courses/fi.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/03.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-3.png)`}}></div>
                                    <h4><Link href="/courses-details">Advance Motion Design</Link></h4>
                                    <ul className="list">
                                        <li>
                                            <i className="fal fa-user-clock"></i>
                                            Adams
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            3 month
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            50+ Student
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Class</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="live-courses-main-items">
                                <div className="live-courses-items  bg-cover" style={{background: `url(/assets/img/live-courses/bg-2.jpg)`}}>
                                    <div className="live-courses-content">
                                        <h3>
                                            <span>Basic HTML</span>
                                            to WordPress
                                        </h3>
                                        <div className="icon">
                                            <img src="assets/img/live-courses/wp.png" alt="img" />
                                        </div>
                                    </div>
                                    <div className="live-courses-image">
                                        <img src="assets/img/live-courses/02.png" alt="img" />
                                    </div>
                                </div>
                                <div className="content">
                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/live-courses/client-1.png)`}}></div>
                                    <h4><Link href="/courses-details">Basic HTML To WordPress</Link></h4>
                                    <ul className="list">
                                        <li>
                                            <i className="fal fa-user-clock"></i>
                                            Adams
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            3 month
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            50+ Student
                                        </li>
                                    </ul>
                                    <Link href="/courses-details" className="theme-btn">Join Live Class</Link>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeTwo;