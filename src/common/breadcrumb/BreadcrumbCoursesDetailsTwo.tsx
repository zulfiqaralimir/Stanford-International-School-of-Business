

import Link from 'next/link';
import React from 'react';

const BreadcrumbCoursesDetailsTwo = () => {
  return (
    <>
       <div className="breadcrumb-wrapper style-2 style-3">
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
            <div className="page-heading" />
                <ul className="breadcrumb-items">
                    <li><Link href="/">Home</Link></li>
                    <li><Link href="/courses-grid">Courses</Link></li>
                    <li className="style-2"> Course Details</li>
                </ul>
            </div>
        </div> 
    </>
  );
};

export default BreadcrumbCoursesDetailsTwo;