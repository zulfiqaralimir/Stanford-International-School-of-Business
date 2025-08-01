import Link from 'next/link';
import React from 'react';

const FooterFive = () => {
  return (
    <>
      <footer className="footer-section-5 fix">
           <div className="bg-shape-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" viewBox="0 0 1920 939" fill="none">
                <path d="M-0.000381377 0.0929918C103.917 125.458 276.584 189.416 440.349 200.073C603.824 210.351 762.679 173.786 916.548 133.837C1070.42 93.8871 1225.25 49.3071 1387.48 43.4442C1549.71 37.5813 1791.5 78.9174 1920 183.093L1920 938.593L-0.000461254 938.593L-0.000381377 0.0929918Z" fill="#FFD335"/>
              </svg>
           </div>
           <div className="bg-shape-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="1920" viewBox="0 0 1920 1008" fill="none">
                <path d="M1920 0.593408C1816.08 125.958 1643.2 189.417 1479.44 200.073C1315.97 210.351 1157.11 173.787 1003.24 133.837C849.373 93.8878 694.545 49.3077 532.313 43.4448C370.082 37.5818 128.293 78.9178 -0.207674 183.093L-0.206636 1008.59L1920 1008.59L1920 0.593408Z" fill="#553CDF"/>
              </svg>
            </div>
            <div className="circle-shape-3">
                <img src="assets/img/footer/circle-3.png" alt="img" />
            </div>
            <div className="vector-shape-3">
                <img src="assets/img/footer/Vector-3.png" alt="img" />
            </div>
            <div className="cta-section-5">
                <div className="container">
                    <div className="cta-wrapper-5">
                        <div className="section-title text-center">
                            <h6 className="text-white wow fadeInUp">
                                Quality Courses & Program
                            </h6>
                            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                                Register To Get Quality Business <br />
                                Courses with Eduspace
                            </h2>
                        </div>
                        <Link href="/contact" className="theme-btn mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".3s">Get Started Now</Link>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="footer-widget-wrapper style-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="single-footer-widget">
                                <div className="widget-head">
                                    <Link href="/">
                                        <img src="assets/img/logo/white-logo-2.svg" alt="img" />
                                    </Link>
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
                        <div className="col-xl-5 col-lg-5 col-md-6 ps-lg-5 wow fadeInUp" data-wow-delay=".4s">
                            <div className="single-footer-widget style-left">
                                <div className="widget-head">
                                   <h4>Ready to Get started your business <br /> Coach with Eduspace</h4>
                                </div>
                                <div className="contact-list-area">
                                    <ul>
                                        <li>
                                            <span>Get In Touch</span>
                                            <a href="mailto:info@example.com" className="link">info@example.com</a>
                                            <a href="tel:+0001238899">+000 (123) 88 99</a>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>
                                            <span>Location</span>
                                            55 Main Street, 2nd block <br />
                                            Malborne, Australia
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="single-footer-widget style-left">
                                <div className="widget-head">
                                   <h3>Social Link</h3>
                                </div>
                                <div className="footer-content">
                                    <div className="social-icon mb-0">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                        <a href="#"><i className="fab fa-behance"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom style-3 style-5">
                <div className="container">
                    <div className="footer-bottom-wrapper">
                        <p className="wow fadeInUp" data-wow-delay=".3s">Copyright © <Link href="/">Eduspace</Link>, all rights reserved.</p>
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

export default FooterFive;