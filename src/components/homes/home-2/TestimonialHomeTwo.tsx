"use client";
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 
const TestimonialHomeTwo = () => {
  return (
    <>
      <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="testimonial-wrapper">
                    <div className="row g-4 justify-content-between">
                        <div className="col-xxl-6 col-xl-6 col-lg-6">
                            <div className="testimonial-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">
                                        Students Reviews
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Students Say About <br />
                                        Our Courses
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
                                modules={[Pagination]}
                                className="swiper testimonial-slider-2 mt-3 mt-md-0">
                                     
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Best Quality</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "The course content was and easy to follow instructors were
                                                    available answer questions "
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Richard C. Andre</h4>
                                                    <p>Web Designer</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Best Quality</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "The course content was and easy to follow instructors were
                                                    available answer questions "
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Richard C. Andre</h4>
                                                    <p>Web Designer</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Best Quality</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "The course content was and easy to follow instructors were
                                                    available answer questions "
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Richard C. Andre</h4>
                                                    <p>Web Designer</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                        <SwiperSlide className="swiper-slide">
                                            <div className="content">
                                                <div className="icon-top">
                                                    <div className="icon">
                                                        <i className="flaticon-double-quotes"></i>
                                                    </div>
                                                </div>
                                                <div className="star">
                                                    <span>Best Quality</span>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                                <h3>
                                                    "The course content was and easy to follow instructors were
                                                    available answer questions "
                                                </h3>
                                                <div className="client-info">
                                                    <h4>Richard C. Andre</h4>
                                                    <p>Web Designer</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                   
                                    <div className="swiper-dot pt-5 ps-1">
                                        <div className="dot"></div>
                                    </div>
                                </Swiper>
                            </div>
                        </div>
                        <div className="col-xxl-4 col-xl-5 col-lg-5 d-none d-md-block">
                            <div className="testimonial-image-items">
                                <div className="box-shape">
                                    <img src="assets/img/testimonial/box-shape.png" alt="img" />
                                </div>
                                <div className="row g-4">
                                    <div className="col-md-6 col-sm-6">
                                        <div className="client-img-1 bg-cover" style={{background: `url(/assets/img/testimonial/01.jpg)`}}></div>
                                        <div className="client-img-2 bg-cover" style={{background: `url(/assets/img/testimonial/02.jpg)`}}></div>
                                        <div className="client-img-3 bg-cover" style={{background: `url(/assets/img/testimonial/03.jpg)`}}></div>
                                    </div>
                                    <div className="col-md-6 col-sm-6">
                                        <div className="client-img-4 bg-cover" style={{background: `url(/assets/img/testimonial/04.jpg)`}}></div>
                                        <div className="client-img-5 bg-cover" style={{background: `url(/assets/img/testimonial/05.jpg)`}}></div>
                                        <div className="client-img-6 bg-cover" style={{background: `url(/assets/img/testimonial/06.jpg)`}}></div>
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

export default TestimonialHomeTwo;