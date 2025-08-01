

import Link from 'next/link';
import React from 'react';

const BlogHomeThree = () => {
  return (
    <>
       <section className="news-section fix section-padding pt-0">
            <div className="container">
                <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                        News & Blog
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Latest News & Blog
                    </h2>
                </div>
                <div className="row">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-left-items">
                            <div className="news-thumb">
                                <img src="assets/img/news/08.jpg" alt="img" />
                                <Link href="/news-details" className="post-box">
                                    History
                                </Link>
                            </div>
                            <div className="news-content">
                                <ul className="post-cat">
                                    <li>
                                        <i className="fal fa-user"></i>
                                        William R.
                                    </li>
                                    <li>
                                        <i className="fal fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                </ul>
                                <h3>
                                    <Link href="/news-details">Balancing to Academics the Campus Student's Success Stories from Our Graduates</Link>
                                </h3>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="news-right-items">
                            <div className="news-right-box wow fadeInUp" data-wow-delay=".3s">
                                <div className="thumb">
                                    <img src="assets/img/news/09.jpg" alt="img" />
                                    <Link href="/news-details" className="post-box">
                                        Business
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fal fa-user"></i>
                                            Holbrook
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt"></i>
                                            20 Sep 2024
                                        </li>
                                    </ul>
                                    <h5>
                                        <Link href="/news-details">Power Lifelong the Learning
                                            Education Never Stops</Link>
                                    </h5>
                                    <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                </div>
                            </div>
                            <div className="news-right-box wow fadeInUp" data-wow-delay=".5s">
                                <div className="thumb">
                                    <img src="assets/img/news/10.jpg" alt="img" />
                                    <Link href="/news-details" className="post-box">
                                        Community
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fal fa-user"></i>
                                            Nathan C.
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt"></i>
                                            20 Sep 2024
                                        </li>
                                    </ul>
                                    <h5>
                                        <Link href="/news-details">Navigating Your to College Journey Tips for New</Link>
                                    </h5>
                                    <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                                </div>
                            </div>
                            <div className="news-right-box wow fadeInUp" data-wow-delay=".3s">
                                <div className="thumb">
                                    <img src="assets/img/news/09.jpg" alt="img" />
                                    <Link href="/news-details" className="post-box">
                                        Finance
                                    </Link>
                                </div>
                                <div className="content">
                                    <ul className="post-cat">
                                        <li>
                                            <i className="fal fa-user"></i>
                                            Ryan S.
                                        </li>
                                        <li>
                                            <i className="fal fa-calendar-alt"></i>
                                            20 Sep 2024
                                        </li>
                                    </ul>
                                    <h5>
                                        <Link href="/news-details">Balancing to Academics the
                                            Campus Student's Guide</Link>
                                    </h5>
                                    <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
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

export default BlogHomeThree;