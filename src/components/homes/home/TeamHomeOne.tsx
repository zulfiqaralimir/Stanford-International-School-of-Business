"use client";

import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

const setting = {
  spaceBetween: 0,
  speed: 2000,
  loop: true,

  navigation: {
      nextEl: ".array-prev",
      prevEl: ".array-next",
  },
  breakpoints: {
      1399: {
          slidesPerView: 5,
      },
      1199: {
          slidesPerView: 4,
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
      475: {
          slidesPerView: 1,
      },
      0: {
          slidesPerView: 1,
      },
  },
}

const TeamHomeOne = () => {
  return (
    <>
       <section className="team-section fix ">
            <Swiper 
            {...setting}
            className="swiper team-slider"> 
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/01.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/02.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/03.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/04.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/05.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                {/* repite for swiper slide  */}
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/01.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/02.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/03.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/04.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide className="swiper-slide">
                    <div className="team-box-items">
                        <div className="team-image">
                            <img src="assets/img/team/05.jpg" alt="img" />
                            <div className="team-content">
                                <h3>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h3>
                                <p>Senior Instructor</p>
                            </div>
                            <div className="social-profile">
                                <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                <ul>
                                    <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                    <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                    <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>  
            </Swiper>
        </section>
    </>
  );
};

export default TeamHomeOne;