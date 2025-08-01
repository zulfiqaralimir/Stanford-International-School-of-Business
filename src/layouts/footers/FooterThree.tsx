
import Link from 'next/link';
import React from 'react';

const FooterThree = () => {
  return (
    <>
       <footer className="footer-section-3 fix">
            <div className="circle-shape">
                <img src="assets/img/footer/circle.png" alt="img" />
            </div>
            <div className="vector-shape">
                <img src="assets/img/footer/Vector.png" alt="img" />
            </div>
            <div className="container">
                <div className="footer-widget-wrapper style-2">
                    <div className="row">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="assets/img/logo/black-logo-3.svg" alt="img" />
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
                        <div className="col-xl-2 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget style-left">
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
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
                                        </li>
                                        <li>
                                            <a href="tel:+0001238899">+000 (123) 88 99</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 ps-xl-5 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                   <h3>Newsletter</h3>
                                </div>
                                <div className="footer-content">
                                    <p>Get the latest news delivered to you inbox</p>
                                    <div className="footer-input">
                                        <div className="icon">
                                            <i className="far fa-envelope"></i>
                                        </div>
                                        <input type="email" id="email2" placeholder="Email Address" />
                                        <button className="newsletter-btn" type="submit">
                                            Subscribe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-3">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p>Copyright © <Link href="/">Eduspace</Link>, all rights reserved.</p>
                        <ul className="footer-menu wow fadeInUp" data-wow-delay=".5s">
                            <li>
                                <Link href="/courses">
                                    University 
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq">
                                    FAQs 
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/event">
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </>
  );
};

export default FooterThree;