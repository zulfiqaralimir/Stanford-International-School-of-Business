
import Link from 'next/link';
import React from 'react';

const TeamHomeFive = ({style_2} : any) => {
  return (
    <> 
      <section className={`team-section-5 fix section-padding ${style_2 ? "section-bg" : ""}`}>
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Our Instructors
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Expert Instructors
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team-card-items">
                            <div className="thumb">
                                <img src="assets/img/team/11.jpg" alt="img" />
                                <div className="social-icon">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/instructor-details">William K. Swanson</Link></h4>
                                <p>Business Instructors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team-card-items">
                            <div className="thumb">
                                <img src="assets/img/team/12.jpg" alt="img" />
                                <div className="social-icon">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/instructor-details">Douglas A. Braxton</Link></h4>
                                <p>Business Instructors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team-card-items">
                            <div className="thumb">
                                <img src="assets/img/team/13.jpg" alt="img" />
                                <div className="social-icon">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/instructor-details">Matthew M. Moore</Link></h4>
                                <p>Business Instructors</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team-card-items">
                            <div className="thumb">
                                <img src="assets/img/team/14.jpg" alt="img" />
                                <div className="social-icon">
                                    <a href="#"><i className="fab fa-facebook-f"></i></a>
                                    <a href="#"><i className="fab fa-instagram"></i></a>
                                    <a href="#"><i className="fab fa-behance"></i></a>
                                    <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                </div>
                            </div>
                            <div className="content">
                                <h4><Link href="/instructor-details">Bernard A. McKenzie</Link></h4>
                                <p>Business Instructors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default TeamHomeFive;