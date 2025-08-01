"use client"

import Link from 'next/link';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const InstagramHomeFour = () => {
  return (
    <>
       <div className="instagram-section-2 fix section-padding">
            <Swiper 
            spaceBetween={10}
            speed={1500}
            loop={true}
            breakpoints={{
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 4,
              },
              767: {
                  slidesPerView: 3,
              },
              575: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          }}
            className="swiper instagram-slider-2">
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/06.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/07.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/08.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/09.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/10.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                 
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/06.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/07.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/08.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/09.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="instagram-image style-2">
                            <img src="assets/img/instagram/10.jpg" alt="img" />
                            <Link href="/courses-details" className="icon"><i className="fab fa-instagram"></i></Link>
                        </div>
                    </SwiperSlide>
                 
            </Swiper>
        </div>
    </>
  );
};

export default InstagramHomeFour;