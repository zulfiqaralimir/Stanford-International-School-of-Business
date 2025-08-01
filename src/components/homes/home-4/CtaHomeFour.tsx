
import React from 'react';

const CtaHomeFour = () => {
  return (
    <>
     <section className="cta-newsletter-section style-2 fix">
            <div className="girl-shape animation__arryLeftRight">
                <img src="assets/img/cta/small-girl.png" alt="img" className="img-custom-anim-left" />
            </div>
            <div className="shape-1">
                <img src="assets/img/cta/shape-1.png" alt="img" />
            </div>
            <div className="shape-2">
                <img src="assets/img/cta/shape-2.png" alt="img" />
            </div>
            <div className="container">
                <div className="cta-newsletter-wrapper style-2">
                    <div className="section-title text-center">
                        <h6 className="text-white wow fadeInUp">
                            Newsletter Subscribe
                        </h6>
                        <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                            Get Started With Eduspace <br />
                            to bright your career!
                        </h2>
                    </div>
                    <form action="#" id="contact-form" method="POST" className="newsletter-input-items mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                        <input type="email" id="email" placeholder="Email Address" />
                        <div className="icon">
                            <i className="fas fa-envelope"></i>
                        </div>
                        <button className="theme-btn yellow-btn" type="submit">
                            Subscribe
                        </button>
                    </form>
                    <ul className="list-items wow fadeInUp" data-wow-delay=".5s">
                        <li>
                            <i className="far fa-check-circle"></i>
                            Positive reviews
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            Professional Instructors
                        </li>
                        <li>
                            <i className="far fa-check-circle"></i>
                            8500+ Happy Student 
                        </li>
                    </ul>
                </div>
            </div>
        </section> 
    </>
  );
};

export default CtaHomeFour;