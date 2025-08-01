"use client"
import Link from 'next/link';
import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

 

const RealatedProducts = () => {
  return (
    <>
      <section className="shop-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        related products
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3S">related book</h2>
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
                      slidesPerView: 4,
                  },
                  991: {
                      slidesPerView: 3,
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
                className="swiper related-product-slider"> 
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/01.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">A Prayer for Owen Meany</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/02.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">All the Light We Cannot See</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/03.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Don’t forget the girl</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/04.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Love in the Time of Cholera</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/03.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Don’t forget the girl</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="shop-box-items">
                                <div className="book-thumb center">
                                    <Link href="/shop-details"><img src="assets/img/shop/04.jpg" alt="img" /></Link>
                                    <ul className="shop-icon d-grid justify-content-center align-items-center">
                                        <li>
                                            <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-cart">
                                                <i className="far fa-bookmark"></i>
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Love in the Time of Cholera</Link></h3>
                                    <ul className="price-list">
                                        <li>$39.00</li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            3.4 (25)
                                        </li>
                                    </ul>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                    </div>
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

export default RealatedProducts;