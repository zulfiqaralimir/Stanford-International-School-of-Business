"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const CoursesGridArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
      <section className="courses-section section-padding fix">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="courses-main-sidebar-area">
                            <div className="courses-main-sidebar">
                                <div className="courses-sidebar-items">
                                    <div className="wid-title style-2">
                                        <h5>Search</h5>
                                    </div>
                                    <div className="search-widget">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Search courses" />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Category</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" defaultChecked />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    UX/UI Design
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Graphic Design
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Art & Fashion
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Web Development
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Computer Science
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Business Consulting
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Course Level</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    All Level
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Beginner
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Intermediate
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Heigh
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Price</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Free
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Paid
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Instructors</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    John D. Hambly
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Gerald N. Hopkins
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Charles R. Green
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    Roger C. Byers
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div className="courses-sidebar-items">
                                    <div className="wid-title">
                                        <h5>Instructors</h5>
                                    </div>
                                    <div className="courses-list">
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    <span className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                    </span>
                                                    <span className="ratting-text">(22)</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    <span className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                    </span>
                                                    <span className="ratting-text">(15)</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    <span className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                    </span>
                                                    <span className="ratting-text">(03)</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    <span className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                    </span>
                                                   <span className="ratting-text">(00)</span>
                                                </span>
                                            </span>
                                        </label>
                                        <label className="checkbox-single">
                                            <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                <span className="checkbox-area d-center">
                                                    <input type="checkbox" />
                                                    <span className="checkmark d-center"></span>
                                                </span>
                                                <span className="text-color">
                                                    <span className="star">
                                                        <i className="fas fa-star"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                        <i className="fas fa-star color-2"></i>
                                                    </span>
                                                   <span className="ratting-text">(00)</span>
                                                </span>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <Link href="/courses" className="theme-btn"><i className="far fa-times-circle"></i> Clear All Filters</Link>
                        </div>
                    </div>
                    <div className="col-xl-9 col-lg-8">
                        <div className="coureses-notices-wrapper">
                            <div className="courses-showing">
                                <div className="icon-items">
                                    <Link href="/courses-grid"><i className="fas fa-th"></i></Link>
                                    <Link href="/courses-list"><i className="fas fa-bars"></i></Link>
                                </div>
                                <h5>Showing <span>1-9</span> Of <span>62</span> Results</h5>
                            </div>
                            <div className="form-clt">
                            <NiceSelect
                                className="category"
                                options={[
                                    { value: "01", text: "Sort by : Default" },
                                    { value: "02", text: "Sort by popularity" },
                                    { value: "03", text: "Sort by average rating" },
                                    { value: "04", text: "Sort by latest" }, 
                                ]}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                placeholder="" />
                             </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/01.jpg" alt="img" />
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/02.jpg" alt="img" />
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Finance Management Building Wealth Security
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Finance Management Building Wealth Security
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/03.jpg" alt="img" />
                                            <h3 className="courses-title">Programming</h3>
                                            <h4 className="topic-title">Advance Machine Learning</h4>
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Introduction Science
                                                    and Machine Learning
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Introduction Science
                                                    and Machine Learning
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/04.jpg" alt="img" />
                                            <h3 className="courses-title">Marketing</h3>
                                            <h4 className="topic-title">Digital Marketing</h4>
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Digital Marketing for 
                                                    Business Success
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Digital Marketing for 
                                                    Business Success
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/05.jpg" alt="img" />
                                            <h3 className="courses-title">Graphic Design</h3>
                                            <h4 className="topic-title">Graphic Design Masterclass</h4>
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    The Complete Graphic Design Masterclass
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                The Complete Graphic Design Masterclass
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/06.jpg" alt="img" />
                                            <h3 className="courses-title">Foundations AI</h3>
                                            <h4 className="topic-title">Artificial Intelligence</h4>
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
                                                    <Link href="/courses">Tech & AI</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Foundations of Artificial Intelligence (AI)
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Tech & AI</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Foundations of Artificial Intelligence (AI)
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/07.jpg" alt="img" />
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Effective Communication and Leadership Skills
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Effective Communication and Leadership Skills
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/08.jpg" alt="img" />
                                            <h3 className="courses-title">Development</h3>
                                            <h4 className="topic-title">Web Development</h4>
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
                                                    <Link href="/courses">Development</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Basic Web Development 
                                                    Bootcamp WordPress
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
                                        <div className="courses-content">
                                            <ul className="post-cat">
                                                <li>
                                                    <Link href="/courses">Development</Link>
                                                </li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </li>
                                            </ul>
                                            <h5>
                                                <Link href="/courses-details">
                                                    Basic Web Development 
                                                    Bootcamp WordPress
                                                </Link>
                                            </h5>
                                            <h4>$85</h4> 
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="courses-card-main-items">
                                    <div className="courses-card-items">
                                        <div className="courses-image">
                                            <img src="assets/img/courses/01.jpg" alt="img" />
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
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
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="courses-card-items-hover">
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
                                            <h5>
                                                <Link href="/courses-details">
                                                    Learn With Advance Web
                                                    Design (UX/UI) Course
                                                </Link>
                                            </h5>
                                            <h4>$85</h4>
                                            <span>
                                                Education is only empowers
                                                people to pursue career
                                            </span>
                                            <div className="client-items">
                                                <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                <p>Paul C. Deleon</p>
                                            </div>
                                            <ul className="post-class">
                                                <li>
                                                    <i className="far fa-clock"></i>
                                                    7h 40min
                                                </li>
                                                <li>
                                                    <i className="far fa-user"></i>
                                                    80 Students
                                                </li>
                                            </ul>
                                            <Link href="/courses-details" className="theme-btn yellow-btn">Enroll Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="page-nav-wrap pt-5">
                            <ul>
                                <li><a className="page-numbers" href="#">1</a></li>
                                <li><a className="page-numbers" href="#">2</a></li>
                                <li><a className="page-numbers" href="#">3</a></li>
                                <li><a className="page-numbers" href="#">4</a></li>
                                <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default CoursesGridArea;