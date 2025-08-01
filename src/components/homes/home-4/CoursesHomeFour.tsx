
import Link from 'next/link';
import React from 'react';

const CoursesHomeFour = () => {
  return (
    <>
      <section className="popular-program-section fix section-padding">
            <div className="frame-shape">
                <img src="assets/img/program/frame-shape.png" alt="img" />
            </div>
            <div className="star-shape">
                <img src="assets/img/program/star.png" alt="img" />
            </div>
            <div className="container">
                <div className="section-title text-center color-pink">
                    <h6 className="wow fadeInUp">
                        Popular Courses
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Explore Our Kids Programs
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="popular-program-box-items">
                            <div className="thumb">
                                <img src="assets/img/program/01.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$80</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Nursery Class</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="popular-program-box-items">
                            <div className="thumb">
                                <img src="assets/img/program/02.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$89</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Preschool</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="popular-program-box-items">
                            <div className="thumb">
                                <img src="assets/img/program/03.jpg" alt="img" />
                            </div>
                            <div className="content">
                                <h2 className="price">$99</h2>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <span>(4.8)</span>
                                </div>
                                <h3><Link href="/program-details">Kindergarten</Link></h3>
                                <p>A nursery class is essential stage early childhood education, designed</p>
                                <ul className="list">
                                    <li>
                                        <i className="far fa-user"></i>
                                        5-6 Years
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        8-12am
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        30 Students
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn">Enroll Now</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesHomeFour;