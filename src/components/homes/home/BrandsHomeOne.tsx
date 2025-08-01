
"use client";
import React from "react";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
 

const BrandsHomeOne = () => {
	return (
		<>
			<section className="brand-section fix section-padding pt-0">
				<div className="container">
					<div className="brand-wrapper">
						<div className="section-title text-center">
							<h2 className="wow fadeInUp mb-3" data-wow-delay=".3s">
								25m+ Trusted Partners
							</h2>
							<p className="wow fadeInUp" data-wow-delay=".5s mt-3">
								Education is the foundation of personal societal growth,
								empowering <br />
								individuals with knowledge, skills critical thinking.
							</p>
						</div>
						<Swiper
             spaceBetween={30}
             speed={1500}
             loop={true}
             autoplay={{
               delay: 1500,
               disableOnInteraction: false,
             }}
             modules={[Autoplay]}
             breakpoints={{
              1399: {
                  slidesPerView: 6,
              },
              1199: {
                  slidesPerView: 5,
              },
              991: {
                  slidesPerView: 5,
              },
              767: {
                  slidesPerView: 4,
              },
              575: {
                  slidesPerView: 3,
              },
              400: {
                  slidesPerView: 2,
              },
              0: {
                  slidesPerView: 1,
              },
          }}
             className="swiper brand-slider mt-3 mt-md-0">
							 
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/01.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/02.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/03.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/04.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/05.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/06.png" alt="img" />
									</div>
								</SwiperSlide>
            {/* swiper slider repite */}
                <SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/01.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/02.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/03.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/04.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/05.png" alt="img" />
									</div>
								</SwiperSlide>
								<SwiperSlide className="swiper-slide">
									<div className="brand-img text-center">
										<img src="assets/img/brand/06.png" alt="img" />
									</div>
								</SwiperSlide>
						 
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default BrandsHomeOne;
