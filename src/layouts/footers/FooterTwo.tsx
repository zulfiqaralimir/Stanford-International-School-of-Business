
import Link from 'next/link';
import React from 'react';

const FooterTwo = () => {
  return (
    <>
       <footer className="footer-section fix footer-bg">
            <div className="big-circle">
                <img src="assets/img/footer/big-circle.png" alt="img" />
            </div>
            <div className="circle-shape-2">
                <img src="assets/img/footer/circle-2.png" alt="img" />
            </div>
            <div className="Vector-shape-2">
                <img src="assets/img/footer/Vector-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="footer-banner-items">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="footer-banner">
                                <div className="content">
                                    <h3 className="wow fadeInUp">Become a Instructors?</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        Becoming an instructor requires the combination of expertise, passion.
                                    </p>
                                    <Link href="/register" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Get Started</Link>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/boy-img-2.png" alt="img" className="wow fadeInUp"  data-wow-delay="0.7s" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="footer-banner style-2">
                                <div className="content">
                                    <h3 className="wow fadeInUp">Become a Students?</h3>
                                    <p className="wow fadeInUp" data-wow-delay=".3s">
                                        Becoming a student is a transformative that opens the door.
                                    </p>
                                    <Link href="/register" className="theme-btn wow fadeInUp" data-wow-delay=".5s">Get Started</Link>
                                </div>
                                <div className="thumb">
                                    <img src="assets/img/boy-img-3.png" alt="img" className="wow img-custom-anim-left" data-wow-duration="1.5s" data-wow-delay="0.3s" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-widget-wrapper">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="assets/img/logo/white-logo.svg" alt="img" />
                                    </Link>
                                </div>
                                <div className="footer-content">
                                    <p>
                                        Education the foundation personal and societal growth, empowering individuals with knowledge.
                                    </p>
                                    <div className="social-icon">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Online Platform</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/courses">Coursera</Link></li>
                                    <li><Link href="/courses">MasterClass</Link></li>
                                    <li><Link href="/courses">Skillshare</Link></li>
                                    <li><Link href="/courses">LinkedIn Learning</Link></li>
                                    <li><Link href="/courses">FutureLearn</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".6s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Quick Link</h3>
                                </div>
                                <ul className="list-area">
                                    <li><Link href="/about">About Eduspace</Link></li>
                                    <li><Link href="/instructor">Instructors</Link></li>
                                    <li><Link href="/courses">Best Courses</Link></li>
                                    <li><Link href="/contact">Student Reviews</Link></li>
                                    <li><Link href="/faq">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Contact Us</h3>
                                </div>
                                <div className="footer-content">
                                    <ul className="contact-info">
                                        <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            55 Main Street, 2nd block
                                            Malborne, Australia
                                        </li>
                                        <li>
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+0001238899">+000 (123) 88 99</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom style-2">
                    <p>Copyright © <Link href="/">Eduspace</Link>, all rights reserved.</p>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterTwo;