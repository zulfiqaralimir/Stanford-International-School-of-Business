"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const ProgramRelatedArea = () => {
  return (
    <>
      <section className="popular-courses-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h2 className="wow fadeInUp">Related Courses</h2>
                </div>
                <Swiper 
                spaceBetween={30}
                speed={1500}
                loop={true}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: ".dot",
                  clickable: true
                }}
                modules={[Autoplay, Pagination]}
                breakpoints={{
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
                className="swiper courses-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="popular-program-box-items box-shadow mt-0">
                            <div className="thumb">
                                <img src="assets/img/program/01.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$80</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Nursery Class</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="popular-program-box-items box-shadow mt-0">
                            <div className="thumb">
                                <img src="assets/img/program/02.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$89</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Preschool</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="popular-program-box-items box-shadow mt-0">
                            <div className="thumb">
                                <img src="assets/img/program/03.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$99</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Kindergarten</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </SwiperSlide> 
                    <SwiperSlide className="swiper-slide">
                        <div className="popular-program-box-items box-shadow mt-0">
                            <div className="thumb">
                                <img src="assets/img/program/02.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$89</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Preschool</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </SwiperSlide>                   
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default ProgramRelatedArea;