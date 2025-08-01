"use client"
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const TestimonialHomeFour = () => {
  return (
    <>
      <section className="testimonial-section-4 fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center color-pink">
                    <h6 className="wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        What Students Say Eduspace
                    </h2>
                </div>
                <Swiper
                spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false
                }}
                pagination={{
                  el: '.dot',
                  clickable: true
                }}
                modules={[Pagination, Autoplay]}
                 className="swiper testimonial-slider-4">
                     
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-wrapper-2">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                    <div className="star">
                                        <span>Best Quality</span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3>"I love coming to school every day! My teachers are so nice, and we get to do fun things like painting and playing"</h3>
                                    <div className="client-content">
                                        <h4>Milton J. Scurlock</h4>
                                        <p>Age 5</p>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/testimonial/boy.png" alt="img" />
                                    <div className="bg-shape">
                                        <img src="assets/img/testimonial/bg-shape.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-wrapper-2">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                    <div className="star">
                                        <span>Best Quality</span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3>"I love coming to school every day! My teachers are so nice, and we get to do fun things like painting and playing"</h3>
                                    <div className="client-content">
                                        <h4>Milton J. Scurlock</h4>
                                        <p>Age 5</p>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/testimonial/girl.png" alt="img" />
                                    <div className="bg-shape">
                                        <img src="assets/img/testimonial/bg-shape.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-wrapper-2">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                    <div className="star">
                                        <span>Best Quality</span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3>"I love coming to school every day! My teachers are so nice, and we get to do fun things like painting and playing"</h3>
                                    <div className="client-content">
                                        <h4>Milton J. Scurlock</h4>
                                        <p>Age 5</p>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/testimonial/boy-2.png" alt="img" />
                                    <div className="bg-shape">
                                        <img src="assets/img/testimonial/bg-shape.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="testimonial-wrapper-2">
                                <div className="content">
                                    <div className="icon">
                                        <i className="flaticon-quote"></i>
                                    </div>
                                    <div className="star">
                                        <span>Best Quality</span>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    <h3>"I love coming to school every day! My teachers are so nice, and we get to do fun things like painting and playing"</h3>
                                    <div className="client-content">
                                        <h4>Milton J. Scurlock</h4>
                                        <p>Age 5</p>
                                    </div>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/testimonial/girl-2.png" alt="img" />
                                    <div className="bg-shape">
                                        <img src="assets/img/testimonial/bg-shape.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                   
                    <div className="swiper-dot bg-color-3 text-center pt-5">
                        <div className="dot"></div>
                    </div>
                </Swiper>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeFour;