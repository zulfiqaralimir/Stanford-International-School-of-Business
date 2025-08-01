
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

const category_data = [
  { title: "UX/UI Design", icon: "graphic-design", coursesCount: "05", delay: ".3s" },
  { title: "Business Sales", icon: "cooperation", coursesCount: "05", delay: ".5s" },
  { title: "SEO Marketing", icon: "megaphone", coursesCount: "04", delay: ".7s" },
  { title: "Medical & Health", icon: "healthcare", coursesCount: "03", delay: ".3s" },
  { title: "Computer & Tech", icon: "pc", coursesCount: "04", delay: ".5s" },
  { title: "Insurance & Bank", icon: "insurance", coursesCount: "02", delay: ".7s" },
  { title: "Video Grapy", icon: "video-files", coursesCount: "05", delay: ".3s" },
  { title: "Development", icon: "coding", coursesCount: "05", delay: ".5s" },
  { title: "Art & Fashion", icon: "color-palette", coursesCount: "05", delay: ".7s" }
];

 

const CategoryHomeFive = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  return (
    <>
        <section className="courses-section fix section-padding">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Top Category
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Explore Coach Categories
                    </h2>
                </div>
                <div className="row">
                  {category_data.map((item, i) => (
                    <div key={i} className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={item.delay}  
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(i)}>
                      <div className={`top-category-items ${activeIndex === i ? "active" : ""}`}>
                          <div className="icon">
                              <i className={`flaticon-${item.icon}`}></i>
                          </div>
                          <div className="content">
                              <h4><Link href="/courses-details">{item.title}</Link></h4>
                              <span>( {item.coursesCount} Courses)</span>
                          </div>
                      </div>
                  </div>
                  ))} 
                </div>
            </div>
        </section>
    </>
  );
};

export default CategoryHomeFive;