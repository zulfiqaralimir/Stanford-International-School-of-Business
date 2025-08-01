

import Link from 'next/link';
import React from 'react';

const TeamHomeTwo = () => {
  return (
    <>
       <section className="team-section fix section-padding pt-0">
           <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Meet Our Instructors
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">We Have Experience Teachers</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src="assets/img/team/06.jpg" alt="img" />
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h4>
                                    <Link href="/instructor-details">Rolando N. Gordon</Link>
                                </h4>
                                <p>Senior Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src="assets/img/team/07.jpg" alt="img" />
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h4>
                                    <Link href="/instructor-details">William J. Postma</Link>
                                </h4>
                                <p>Senior Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src="assets/img/team/08.jpg" alt="img" />
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h4>
                                    <Link href="/instructor-details">Matthew L. Orndorff</Link>
                                </h4>
                                <p>Senior Instructor</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="team-box-items style-2">
                            <div className="team-image">
                                <img src="assets/img/team/09.jpg" alt="img" />
                                <div className="social-profile">
                                    <span className="plus-btn"><i className="fas fa-share-alt"></i></span>
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-instagram"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content">
                                <h4>
                                    <Link href="/instructor-details">Nicholas M. Davis</Link>
                                </h4>
                                <p>Senior Instructor</p>
                            </div>
                        </div>
                    </div>
                </div>
           </div>
        </section>
    </>
  );
};

export default TeamHomeTwo;