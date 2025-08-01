
import Link from 'next/link';
import React from 'react';

const PopularCoursesHomeTwo = () => {
  return (
    <>
      <section className="popular-courses-section fix section-padding section-bg">
            <div className="container">
                <div className="section-title-area align-items-end">
                    <div className="section-title">
                        <h6 className="wow fadeInUp">
                            Popular Courses
                        </h6>
                        <h2 className="wow fadeInUp" data-wow-delay=".3s">Explore Top Courses</h2>
                    </div>
                    <ul className="nav">
                        <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                            <a href="#All" data-bs-toggle="tab" className="nav-link active">
                                All Courses 
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                            <a href="#Design" data-bs-toggle="tab" className="nav-link">
                                Design
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                            <a href="#Business" data-bs-toggle="tab" className="nav-link">
                                Business
                            </a>
                        </li>
                        <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                            <a href="#Marketing" data-bs-toggle="tab" className="nav-link">
                                Marketing
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="All" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/09.jpg" alt="img" />
                                            <h3 className="courses-title">Web Design</h3>
                                            <h4 className="topic-title">Advance Web Design</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/10.jpg" alt="img" />
                                            <h3 className="courses-title">Business Finance</h3>
                                            <h4 className="topic-title">Finance and Business</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Business</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Finance Management Building
                                                    Wealth Security Business
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/11.jpg" alt="img" />
                                            <h3 className="courses-title">Programming</h3>
                                            <h4 className="topic-title">Advance Machine <br /> Learning</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Programming</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Introduction to Data Science and Machine Learning
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/12.jpg" alt="img" />
                                            <h3 className="courses-title">Digital Marketing</h3>
                                            <h4 className="topic-title">Advance Digital <br /> Marketing</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Marketing</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Digital Marketing for Business
                                                    Grow and Success Sales
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/13.jpg" alt="img" />
                                            <h3 className="courses-title">Graphic Design</h3>
                                            <h4 className="topic-title">Graphic Design <br /> Masterclass</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Graphics</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Complete to Advance Graphic
                                                    Design Masterclass
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/14.jpg" alt="img" />
                                            <h3 className="courses-title">Leadership</h3>
                                            <h4 className="topic-title">Communication Skills</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Leadership</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Effective Communication and
                                                    Leadership Skills
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Design" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/09.jpg" alt="img" />
                                            <h3 className="courses-title">2. Web Design</h3>
                                            <h4 className="topic-title">Advance Web Design</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/10.jpg" alt="img" />
                                            <h3 className="courses-title">Business Finance</h3>
                                            <h4 className="topic-title">Finance and Business</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Business</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Finance Management Building
                                                    Wealth Security Business
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/11.jpg" alt="img" />
                                            <h3 className="courses-title">Programming</h3>
                                            <h4 className="topic-title">Advance Machine <br /> Learning</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Programming</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Introduction to Data Science and Machine Learning
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/12.jpg" alt="img" />
                                            <h3 className="courses-title">Digital Marketing</h3>
                                            <h4 className="topic-title">Advance Digital <br /> Marketing</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Marketing</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Digital Marketing for Business
                                                    Grow and Success Sales
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/13.jpg" alt="img" />
                                            <h3 className="courses-title">Graphic Design</h3>
                                            <h4 className="topic-title">Graphic Design <br /> Masterclass</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Graphics</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Complete to Advance Graphic
                                                    Design Masterclass
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/14.jpg" alt="img" />
                                            <h3 className="courses-title">Leadership</h3>
                                            <h4 className="topic-title">Communication Skills</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Leadership</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Effective Communication and
                                                    Leadership Skills
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Business" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/09.jpg" alt="img" />
                                            <h3 className="courses-title">3. Web Design</h3>
                                            <h4 className="topic-title">Advance Web Design</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/10.jpg" alt="img" />
                                            <h3 className="courses-title">Business Finance</h3>
                                            <h4 className="topic-title">Finance and Business</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Business</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Finance Management Building
                                                    Wealth Security Business
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/11.jpg" alt="img" />
                                            <h3 className="courses-title">Programming</h3>
                                            <h4 className="topic-title">Advance Machine <br /> Learning</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Programming</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Introduction to Data Science and Machine Learning
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/12.jpg" alt="img" />
                                            <h3 className="courses-title">Digital Marketing</h3>
                                            <h4 className="topic-title">Advance Digital <br /> Marketing</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Marketing</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Digital Marketing for Business
                                                    Grow and Success Sales
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/13.jpg" alt="img" />
                                            <h3 className="courses-title">Graphic Design</h3>
                                            <h4 className="topic-title">Graphic Design <br /> Masterclass</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Graphics</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Complete to Advance Graphic
                                                    Design Masterclass
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/14.jpg" alt="img" />
                                            <h3 className="courses-title">Leadership</h3>
                                            <h4 className="topic-title">Communication Skills</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Leadership</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Effective Communication and
                                                    Leadership Skills
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Marketing" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/09.jpg" alt="img" />
                                            <h3 className="courses-title">4. Web Design</h3>
                                            <h4 className="topic-title">Advance Web Design</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Design</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/10.jpg" alt="img" />
                                            <h3 className="courses-title">Business Finance</h3>
                                            <h4 className="topic-title">Finance and Business</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Business</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Finance Management Building
                                                    Wealth Security Business
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/11.jpg" alt="img" />
                                            <h3 className="courses-title">Programming</h3>
                                            <h4 className="topic-title">Advance Machine <br /> Learning</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Programming</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Introduction to Data Science and Machine Learning
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/12.jpg" alt="img" />
                                            <h3 className="courses-title">Digital Marketing</h3>
                                            <h4 className="topic-title">Advance Digital <br /> Marketing</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Marketing</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Digital Marketing for Business
                                                    Grow and Success Sales
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/13.jpg" alt="img" />
                                            <h3 className="courses-title">Graphic Design</h3>
                                            <h4 className="topic-title">Graphic Design <br /> Masterclass</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Graphics</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Complete to Advance Graphic
                                                    Design Masterclass
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items style-2">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/14.jpg" alt="img" />
                                            <h3 className="courses-title">Leadership</h3>
                                            <h4 className="topic-title">Communication Skills</h4>
                                            <div className="arrow-items">
                                                <div className="GlidingArrow">
                                                    <img src="assets/img/courses/a1.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay1">
                                                    <img src="assets/img/courses/a2.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay2">
                                                    <img src="assets/img/courses/a3.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay3">
                                                    <img src="assets/img/courses/a4.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay4">
                                                    <img src="assets/img/courses/a5.png" alt="img" />
                                                </div>
                                                <div className="GlidingArrow delay5">
                                                    <img src="assets/img/courses/a6.png" alt="img" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Leadership</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h3>
                                                <Link href="/courses-details">
                                                    Effective Communication and
                                                    Leadership Skills
                                                </Link>
                                            </h3>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-books"></i>
                                                    Lessons
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                                <li>
                                                    <Link href="/courses-details" className="theme-btn">Enroll Now</Link>
                                                </li>
                                            </ul>
                                        </div>
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

export default PopularCoursesHomeTwo;