
import Link from 'next/link';
import React from 'react';

const BreadcrumbCoursesDetails = () => {
  return (
    <>
       <section className="breadcrumb-wrapper style-2">
        <div className="shape-1">
            <img src="assets/img/breadcrumb/shape-1.png" alt="img" />
        </div>
        <div className="shape-2">
            <img src="assets/img/breadcrumb/shape-2.png" alt="img" />
        </div>
        <div className="dot-shape">
            <img src="assets/img/breadcrumb/dot-shape.png" alt="img" />
        </div>
        <div className="vector-shape">
            <img src="assets/img/breadcrumb/Vector.png" alt="img" />
        </div>
        <div className="container">
            <div className="page-heading">
                <ul className="breadcrumb-items">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses-grid">Courses</Link></li>
                    <li className="style-2"> Course Details</li>
                </ul>
                <div className="breadcrumb-content">
                    <h1>Advance UX/UI Design Using Figma</h1>
                    <div className="courses-breadcrumb-items">
                        <div className="client-image-items">
                            <img src="assets/img/courses/client-3.png" alt="img" />
                            <div className="client-content">
                                <span>Instructor</span>
                                <h5>Patrick C. Amore</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Instructor</span>
                                <h5>Web Design</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Price</span>
                                <h5>$100.00</h5>
                            </div>
                        </div>
                        <div className="client-image-items">
                            <div className="client-content">
                                <span>Reviews</span>
                                <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <b>(15)</b>
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

export default BreadcrumbCoursesDetails;