import Link from 'next/link';
import React from 'react';

const BlogHomeFour = () => {
  return (
    <>
       <section className="news-section fix section-padding">
            <div className="container">
                <div className="section-title text-center color-pink">
                    <h6 className="wow fadeInUp">
                        News & Blog
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Latest Blog & Insights
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/12.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                    <Link href="/news-details">Importance Play-Based Learning in Early Childhood Education</Link>
                                </h3>
                                <Link href="/news-details" className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/13.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                    <Link href="/news-details">Nurturing Creativity Activities to Boost Your Child’s Imagination</Link>
                                </h3>
                                <Link href="/news-details" className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".7s">
                        <div className="news-box-items-2">
                            <div className="news-image">
                                <img src="assets/img/news/14.jpg" alt="img" />
                            </div>
                            <div className="news-content">
                                <ul className="post-date">
                                    <li><i className="far fa-user"></i> Roy R. Coward</li>
                                    <li><i className="far fa-calendar-alt"></i> 20 Sep 2024</li>
                                </ul>
                                <h3>
                                    <Link href="/news-details">Building Social Skills The Role of Activities in Kindergarten</Link>
                                </h3>
                                <Link href="/news-details" className="theme-btn">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeFour;