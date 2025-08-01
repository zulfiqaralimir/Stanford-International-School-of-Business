"use client"
import React from 'react';
import Link from 'next/link';
import NiceSelect from '@/ui/NiceSelect';

const CoursesListArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
      <section className="courses-section section-padding">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-3 col-lg-4">
                        <div className="courses-main-sidebar-area sticky-style">
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
                            <div className="col-lg-12">
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/01.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$80</span>
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
                                                Learn With Advance Web Design (UX/UI) Course
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/02.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$98</span>
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
                                                Finance Management Building Wealth Security
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/03.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$45</span>
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
                                                Introduction Data Science and Machine Learning
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/04.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$35</span>
                                        <ul className="post-cat">
                                            <li>
                                                <Link href="/courses">Graphic Design</Link>
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
                                                The Complete Graphic Design Masterclass
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/05.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$44</span>
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
                                        <h3>
                                            <Link href="/courses-details">
                                                Foundations of Artificial Intelligence (AI)
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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
                                <div className="courses-list-items">
                                    <div className="thumb">
                                        <img src="assets/img/courses/list/06.jpg" alt="img" />
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
                                    <div className="content">
                                        <span className="price">$93</span>
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
                                                Effective Communication and Leadership Skills
                                            </Link>
                                        </h3>
                                        <p>
                                            UX/UI design courses offer comprehensive introduction to the world
                                            experience and user interface design, equipping students.
                                        </p>
                                        <ul className="post-class">
                                            <li>
                                                <div className="client-items">
                                                    <div className="client-img bg-cover" style={{background: `url(/assets/img/courses/client-1.png)`}}></div>
                                                    <p>Paul C. Deleon</p>
                                                </div>
                                            </li>
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

export default CoursesListArea;