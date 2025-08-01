"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Thumbs } from 'swiper/modules';

 
const TestimonialHomeFive = () => {
 

  return (
    <>
      <section className="testimonial-section-5 fix section-padding">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Students Reviews
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        What Client’s Say About Us
                    </h2>
                </div>
                  <Swiper
                  spaceBetween={30}
                  speed={1000}
                  loop={true}
                  autoplay={{
                    delay: 2000,
                    disableOnInteraction: false
                  }}
                  pagination={{
                    el: '.dot2',
                    clickable: true
                  }}
                  modules={[Autoplay, Pagination]}
                  breakpoints={{
                    991: {
                        slidesPerView: 2,
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
                   className="swiper testimonial-slider-5">
                      
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                          <div className="testimonial-card-items-2">
                              <div className="bar-shape">
                                  <img src="assets/img/testimonial/bar.png" alt="img" />
                              </div>
                              <div className="icon">
                                  <i className="flaticon-quote"></i>
                              </div>
                              <h3>"I love coming to school every day Coach teachers are so nice, and we get to do fun things like painting and playing"</h3>
                              <div className="star">
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                                  <i className="fas fa-star"></i>
                              </div>
                          </div>
                      </SwiperSlide>
                      
                  </Swiper>
                <div className="testimonial-client-wrapper">
                    <Swiper 
                        spaceBetween={30}
                        speed={1000}
                        loop={true}
                        watchSlidesProgress={true}
                        autoplay={{
                          delay: 2000,
                          disableOnInteraction: false
                        }}
                        pagination={{
                          el: ".dot2",
                          clickable: true
                        }}
                        freeMode={true}   
                        modules={[Autoplay, Pagination, Thumbs]}
                        breakpoints={ {
                          1199: {
                              slidesPerView: 5,
                          },
                          991: {
                              slidesPerView: 3,
                          },
                          767: {
                              slidesPerView: 2,
                          },
                          575: {
                              slidesPerView: 2,
                          },
                          0: {
                              slidesPerView: 1,
                          },
                      }}
                    className="swiper testimonial-client-slider">
                         
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-4.png)`}}></div>
                                <div className="content">
                                    <h3>Johnny C. McIntosh</h3>
                                    <span>Businessman</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-5.png)`}}></div>
                                <div className="content">
                                    <h3>Richard L. Ridge</h3>
                                    <span>Developer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-6.png)`}}></div>
                                <div className="content">
                                    <h3>Mark N. Hankins</h3>
                                    <span>Engineer</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-7.png)`}}></div>
                                <div className="content">
                                    <h3>John A. Rentz</h3>
                                    <span>Businessman</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-8.png)`}}></div>
                                <div className="content">
                                    <h3>Richard B. Burch</h3>
                                    <span>Instructor</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-7.png)`}}></div>
                                <div className="content">
                                    <h3>John A. Rentz</h3>
                                    <span>Businessman</span>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="client-info">
                                <div className="client-img bg-cover" style={{background: `url(/assets/img/testimonial/client-8.png)`}}></div>
                                <div className="content">
                                    <h3>Richard B. Burch</h3>
                                    <span>Instructor</span>
                                </div>
                            </div>
                        </SwiperSlide>
                         
                    </Swiper>
                </div>
                <div className="swiper-dot bg-blue text-center mt-5">
                    <div className="dot2"></div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TestimonialHomeFive;