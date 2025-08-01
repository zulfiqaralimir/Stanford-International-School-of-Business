import Link from 'next/link';
import React from 'react';

const ProgramDetailsArea = () => {
  return (
    <>
      <section className="program-details-section section-padding pt-0">
            <div className="container">
                <div className="program-details-wrapper">
                    <div className="row g-5">
                        <div className="col-lg-8">
                            <div className="program-details-items">
                                <div className="details-image">
                                    <img src="assets/img/program/details-1.jpg" alt="img" />
                                </div>
                                <div className="details-content">
                                    <div className="post">
                                        <span>Kindergarten</span>
                                    </div>
                                    <h2 className="mb-0">Drawing Classes</h2>
                                    <div className="details-author-area">
                                        <div className="author-items">
                                            <img src="assets/img/program/author.png" alt="img" />
                                            <p>Savannah Nguyen</p>
                                        </div>
                                        <ul className="class-list">
                                            <li>
                                                <i className="far fa-play-circle me-2"></i>
                                                30 Classes
                                            </li>
                                            <li>
                                                <i className="fas fa-star me-2"></i>
                                                3.4 (36 Review)
                                            </li>
                                        </ul>
                                    </div>
                                    <h2>Descriptions</h2>
                                    <p className="mb-3">
                                        Consectetur adipisicing elit, sed do eiusmod tempor is incididunt ut labore et dolore of magna aliqua. Ut enim ad minim veniam, made of owl the quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea dolor commodo consequat. Duis aute irure and dolor in reprehenderit.
                                    </p>
                                    <p className="mb-4">
                                        The is ipsum dolor sit amet consectetur adipiscing elit. Fusce eleifend porta arcu In hac augu ehabitasse the is platea augue thelorem turpoi dictumst. In lacus libero faucibus at malesuada sagittis placerat eros sed istincidunt augue ac ante rutrum sed the is sodales augue consequat.
                                    </p>
                                    <h2>Requirements for The Classes</h2>
                                    <p>
                                        Nulla facilisi. Vestibulum tristique sem in eros eleifend imperdiet. Donec quis convallis neque. In id lacus pulvinar lacus, eget vulputate lectus. Ut viverra bibendum lorem, at tempus nibh mattis in. Sed a massa eget lacus consequat auctor.
                                    </p>
                                    <ul className="list-items">
                                        <li>
                                            <i className="far fa-check"></i>
                                            Ut viverra bibendum lorem, at tempus nibh mattis 
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            quis nostrud exercitation ullamco laboris nisi 
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            Duis aute irure and dolor in reprehenderit.
                                        </li>
                                        <li>
                                            <i className="far fa-check"></i>
                                            ante rutrum sed the is sodales augue consequat. 
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="details-list-area sticky-style">
                                <h3>Classes includes:</h3>
                                <ul className="details-list">
                                    <li>
                                        <span>
                                            <i className="fa-solid fa-chart-simple me-2"></i>
                                            Age
                                        </span>
                                        3-5 year
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-clock me-2"></i>
                                            Duration:
                                        </span>
                                        9:00-11:00
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fal fa-book-spells me-2"></i>
                                            Lessons:
                                        </span>
                                        15
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-users-class me-2"></i>
                                            Students:
                                        </span>
                                        50
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-certificate me-2"></i>
                                            Certifications:
                                        </span>
                                        Yes
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-globe me-2"></i>
                                            Language
                                        </span>
                                        English
                                    </li>
                                </ul>
                                <Link href="/program-details" className="theme-btn w-100 border-style mb-3">
                                    This course Free $49.00
                                </Link>
                                <Link href="/program-details" className="theme-btn w-100">
                                    Enroll Your Kid <i className="fa-solid fa-arrow-right-long"></i>
                                </Link>
                                <div className="social-icon d-flex align-items-center">
                                    <span>Share: </span>
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-twitter"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="program-author-items">
                                <div className="thumb">
                                    <img src="assets/img/program/p-author.jpg" alt="img" />
                                </div>
                                <div className="content">
                                    <h2>Savannah Nguyen</h2>
                                    <span>Children Diet</span>
                                    <p>
                                        Adipiscing elit. Mauris viverra nisl quis mollis laoreet. Ut eget lacus a felis accumsan pharetra in dignissim enim. In amet odio mollis urna aliquet volutpat. Sed bibendum nisl vehicula imperdiet imperdiet, augue massa fringilla.
                                    </p>
                                    <ul>
                                        <li>
                                            Experience: 10 Years
                                        </li>
                                        <li>
                                            <i className="far fa-user"></i>
                                            188 Students
                                        </li>
                                        <li>
                                            <i className="fas fa-star"></i>
                                            454 (36 Review)
                                        </li>
                                    </ul>
                                    <div className="social-icon d-flex align-items-center">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
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

export default ProgramDetailsArea;