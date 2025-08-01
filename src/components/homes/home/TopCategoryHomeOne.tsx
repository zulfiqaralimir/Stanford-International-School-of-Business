import Link from 'next/link';
import React from 'react';

const TopCategoryHomeOne = () => {
  return (
    <>
       <section className="top-category section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-5">
                        <div className="section-title">
                            <h6 className="wow fadeInUp">Top Category</h6>
                            <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                Education and Teaching Courses
                                Next Generation
                            </h2>
                        </div>
                        <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                            Education is a vital process that fosters personal growth, societal development, and intellectual advancement.
                        </p>
                        <div className="top-category-button">
                            <Link href="/courses" className="theme-btn yellow-btn mt-40 wow fadeInUp" data-wow-delay=".3s">View All Category</Link>
                        </div>
                        </div>
                    <div className="col-lg-7">
                        <div className="top-category-wrapper">
                            <div className="row g-0">
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items active">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-graphic-design"></i>
                                            </div>
                                            <h6>UX/UI Design</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-cooperation"></i>
                                            </div>
                                            <h6>Business Finance</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-megaphone"></i>
                                            </div>
                                            <h6>SEO & Marketing</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-healthcare"></i>
                                            </div>
                                            <h6>Health & Medical</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-pc"></i>
                                            </div>
                                            <h6>Computer Science</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-insurance"></i>
                                            </div>
                                            <h6>Insurance & Bank</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-video-files"></i>
                                            </div>
                                            <h6>Video & Audio</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                                    <div className="top-category-box-items">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-coding"></i>
                                            </div>
                                            <h6>Development</h6>
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                                    <div className="top-category-box-items border-right-none">
                                        <Link href="/courses">
                                            <div className="icon">
                                                <i className="flaticon-color-palette"></i>
                                            </div>
                                            <h6>Art & Fashion</h6>
                                        </Link>
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

export default TopCategoryHomeOne;