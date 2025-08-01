"use client";
import React from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const TestimonialHomeOne = () => {
  return (
    <>
      <section className="testimonial-section fix section-padding">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        8500+ Students Say About Our <br /> Courses and Instructors
                    </h2>
                </div>
                <Swiper 
                spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    el: ".dot",
                    clickable: true,
                }}
                modules={[Pagination]}
                breakpoints={{
                  1199: {
                      slidesPerView: 2,
                  },
                  991: {
                      slidesPerView: 1,
                  },
                  767: {
                      slidesPerView: 1,
                  },
                  575: {
                      slidesPerView: 1,
                  },
                  0: {
                      slidesPerView: 1,
                  },
              }}
                className="swiper testimonial-slider"> 
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p>
                                    "The course content was and easy to follow instructors were
                                    available answer questions "
                                </p>
                                <div className="client-info">
                                    <h4>Richard C. Andre</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img src="assets/img/testimonial/01.png" alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items bg-2">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p>
                                    "The course content was and easy to follow instructors were
                                    available answer questions "
                                </p>
                                <div className="client-info">
                                    <h4>Richard C. Andre</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img src="assets/img/testimonial/02.png" alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p>
                                    "The course content was and easy to follow instructors were
                                    available answer questions "
                                </p>
                                <div className="client-info">
                                    <h4>Richard C. Andre</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img src="assets/img/testimonial/01.png" alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="testimonial-box-items bg-2">
                            <div className="testimonial-content">
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                </div>
                                <p>
                                    "The course content was and easy to follow instructors were
                                    available answer questions "
                                </p>
                                <div className="client-info">
                                    <h4>Richard C. Andre</h4>
                                    <span>Web Designer</span>
                                </div>
                            </div>
                            <div className="testimonial-image">
                                <img src="assets/img/testimonial/02.png" alt="img" />
                            </div>
                        </div>
                    </SwiperSlide>
                     
                    <div className="swiper-dot text-center mt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeOne;