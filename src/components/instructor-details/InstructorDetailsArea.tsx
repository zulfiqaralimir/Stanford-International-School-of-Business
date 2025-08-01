
import Link from 'next/link';
import React from 'react';

const InstructorDetailsArea = () => {
  return (
    <>
      <section className="team-details-section section-padding pt-0">
            <div className="container">
                <div className="team-details-wrapper">
                    <div className="team-details-items">
                        <div className="details-image">
                            <img src="assets/img/team/details-1.jpg" alt="img" />
                        </div>
                        <div className="team-details-content">
                            <h2>
                                Steven N. Rancourt
                            </h2>
                            <span>UX/UI Instructors</span>
                            <ul className="details-list">
                                <li>
                                    <i className="far fa-user"></i>
                                    50+ Students
                                </li>
                                <li>
                                    <div className="star">
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                        <i className="fas fa-star"></i>
                                    </div>
                                    (320+ Reviews)
                                </li>
                            </ul>
                            <h3>
                                About Me
                            </h3>
                            <p className="mt-4">
                                UX/UI instructors play a crucial role in shaping the next generation of designers by offering expert guidance, practical insights, and personalized feedback. With their deep industry experience, they bring real-world knowledge into the classroom, helping students understand the complexity user experience and interface design. Instructors not only teach the fundamentals of UX/UI, such as user research, wireframing, and prototyping, but also mentor students on how to apply design
                            </p>
                            <div className="details-area">
                                <Link href="/contact" className="theme-btn">Contact Me</Link>
                                <h5>
                                    <Link href="/instructor-details">Follow Me</Link>
                                </h5>
                                <div className="social-icon d-flex align-items-center">
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
        </section>
    </>
  );
};

export default InstructorDetailsArea;