import Link from 'next/link';
import React from 'react';

const TopCategoryHomeTwo = () => {
  return (
    <>
       <section className="top-category-section-2 pb-0 section-padding fix footer-bg">
            <div className="circle-shape">
                <img src="assets/img/circle-shape.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="text-white wow fadeInUp">
                        Top Category
                    </h6>
                    <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                        Explore Course Category
                    </h2>
                </div>
                <div className="top-category-wrapper-2 mt-4 mt-md-0">
                    <div className="row">
                        <div className="col-xl-4 col-lg-6">
                            <div className="top-category-left-items mb-5 mb-lg-0">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="top-category-box border-left-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>UX/UI Design</h6>
                                                    <p>(05) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box border-left-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Business Finance</h6>
                                                    <p>(08) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box border-left-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Video Editing</h6>
                                                    <p>(03) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box border-left-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>IT & Technology</h6>
                                                    <p>(06) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="courses-image mb-5 mb-lg-0">
                                <img src="assets/img/boy-img.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/boy-bg-shape.png" alt="img" />
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-6">
                            <div className="top-category-left-items">
                                <div className="row g-0">
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="top-category-box border-right-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>SEO & Marketing</h6>
                                                    <p>(05) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="top-category-box border-right-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Medical Health</h6>
                                                    <p>(03) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                                        <div className="top-category-box border-right-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-graphic-design"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Art & Fashion</h6>
                                                    <p>(08) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                                        <div className="top-category-box border-right-none border-bottom-none border-top-none">
                                            <Link href="/courses">
                                                <div className="icon">
                                                    <i className="flaticon-coding"></i>
                                                </div>
                                                <div className="content">
                                                    <h6>Development</h6>
                                                    <p>(04) Courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="category-bottom-title wow fadeInUp" data-wow-delay=".3s">
                    <h3>Find your Best Online Courses?</h3>
                    <Link href="/courses-details" className="theme-btn hover-white">Get Started</Link>
                </div>
            </div>
            <div className="mycustom-marque">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Courses</div>
                        <div className="cmn-textslide stroke-text">Categories</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TopCategoryHomeTwo;