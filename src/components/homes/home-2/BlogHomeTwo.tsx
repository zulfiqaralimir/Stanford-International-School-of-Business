
import Link from 'next/link';
import React from 'react';

const BlogHomeTwo = () => {
  return (
    <>
      <section className="news-section fix section-padding section-bg">
            <div className="container">
                <div className="section-title text-center text-center">
                    <h6 className="wow fadeInUp">
                        News & Blog 
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Latest Blog & Insights</h2>
                </div>
                <div className="row">
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/04.jpg" alt="img" />
                                <img src="assets/img/news/04.jpg" alt="img" />
                                <div className="post-cat">
                                    UX/UI Design
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        C. Smith
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        Power Lifelong Learning
                                        Education Never Stops
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/05.jpg" alt="img" />
                                <img src="assets/img/news/05.jpg" alt="img" />
                                <div className="post-cat">
                                    Marketing
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        C. Smith
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        How to Stay Motivated 
                                        During Your Online
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/06.jpg" alt="img" />
                                <img src="assets/img/news/06.jpg" alt="img" />
                                <div className="post-cat">
                                    Business
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        C. Smith
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        The Future of Education <br />
                                        Why Online Learning
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                        <div className="news-card-items">
                            <div className="news-image">
                                <img src="assets/img/news/07.jpg" alt="img" />
                                <img src="assets/img/news/07.jpg" alt="img" />
                                <div className="post-cat">
                                    Figma
                                </div>
                            </div>
                            <div className="news-content">
                                <ul className="post-meta">
                                    <li>
                                        <i className="far fa-calendar-alt"></i>
                                        20 Sep 2024
                                    </li>
                                    <li>
                                        <i className="far fa-user"></i>
                                        C. Smith
                                    </li>
                                </ul>
                                <h5>
                                    <Link href="/news-details">
                                        Interactive Learning way <br />
                                         Benefits of Live Online
                                    </Link>
                                </h5>
                                <Link href="/news-details" className="link-btn">Read More <i className="far fa-chevron-double-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default BlogHomeTwo;