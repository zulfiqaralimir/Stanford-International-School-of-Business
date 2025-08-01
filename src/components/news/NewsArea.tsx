"use client"
import Link from 'next/link';
import React from 'react';

const NewsArea = () => {
  return (
    <>
      <section className="blog-wrapper news-wrapper section-padding pt-0">
            <div className="container">
                <div className="news-area">
                    <div className="row">
                        <div className="col-12 col-lg-8">
                            <div className="blog-posts">
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/post-1.jpg)`}}>
                                       
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-comments"></i>35 Comments</span>
                                            <span><i className="fal fa-calendar-alt"></i>24th March 2024</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                The Complete Web Developer Guideline 2023
                                            </Link>
                                         </h2>
                                         <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered
                                            teration in some form, by injected humour, or randomised words which don't look even slight
                                            believable. If you are going to use a passage of Lorem Ipsum.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/post-2.jpg)`}}>
                                        
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-comments"></i>35 Comments</span>
                                            <span><i className="fal fa-calendar-alt"></i>24th March 2024</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                Branding: How to Brand Yourself and Your Business
                                            </Link>
                                         </h2>
                                         <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered
                                            teration in some form, by injected humour, or randomised words which don't look even slight
                                            believable. If you are going to use a passage of Lorem Ipsum.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post">
                                    <div className="post-featured-thumb bg-cover" style={{background: `url(/assets/img/news/post-3.jpg)`}}>
                                        
                                    </div>
                                    <div className="post-content">
                                        <div className="post-meta">
                                            <span><i className="fal fa-comments"></i>35 Comments</span>
                                            <span><i className="fal fa-calendar-alt"></i>24th March 2024</span>
                                        </div>
                                        <h2 className="title-anim">
                                            <Link href="/news-details">
                                                The Complete Digital Marketing Learning Path
                                            </Link>
                                         </h2>
                                         <p>
                                            There are many variations of passages of Lorem Ipsum available, but majority have suffered
                                            teration in some form, by injected humour, or randomised words which don't look even slight
                                            believable. If you are going to use a passage of Lorem Ipsum.
                                         </p>
                                         <Link href="/news-details" className="theme-btn mt-4 line-height">
                                            Read More
                                         </Link>
                                    </div>
                                </div>
                                <div className="single-blog-post quote-post format-quote">
                                    <div className="post-content text-white bg-cover">
                                        <div className="quote-content">
                                            <div className="icon">
                                                <i className="fas fa-quote-left"></i>
                                            </div>
                                            <div className="quote-text">
                                                <h2 className="title-anim"> Duis vel scelerisque augue, ut vehicula nisl. Curabitur et mollis</h2>
                                                <div className="post-meta">
                                                    <span><i className="fal fa-comments"></i>35 Comments</span>
                                                    <span><i className="fal fa-calendar-alt"></i>24th March 2024</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-nav-wrap pt-5">
                                <ul>
                                    <li><a className="page-numbers" href="#">1</a></li>
                                    <li><a className="page-numbers" href="#">2</a></li>
                                    <li><a className="page-numbers" href="#">3</a></li>
                                    <li><a className="page-numbers" href="#">4</a></li>
                                    <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="main-sidebar sticky-style">
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Search</h3>
                                    </div>
                                    <div className="search_widget">
                                        <form onSubmit={e => e.preventDefault()}>
                                            <input type="text" placeholder="Keywords here...." />
                                            <button type="submit"><i className="fal fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Latest Post</h3>
                                    </div>
                                    <div className="popular-posts">
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/pp1.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">
                                                    The Complete Web Developer Guideline 202</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>24th March 2024
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/pp2.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">Social Media Marketing MASTERY( A-Z ) Journey</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>25th March 2024
                                                </div>
                                            </div>
                                        </div>
                                        <div className="single-post-item">
                                            <div className="thumb bg-cover" style={{background: `url(/assets/img/news/pp3.jpg)`}}></div>
                                            <div className="post-content">
                                                <h5><Link href="/news-details">Branding: How to Brand Yourself and Your</Link></h5>
                                                <div className="post-date">
                                                    <i className="far fa-calendar-alt"></i>26th March 2024
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="widget_categories">
                                        <ul>
                                            <li><Link href="/news">Branding <span>23</span></Link></li>
                                            <li><Link href="/news">Digital Marketing <span>24</span></Link></li>
                                            <li><Link href="/news">Science <span>11</span></Link></li>
                                            <li><Link href="/news">Social Media <span>05</span></Link></li>
                                            <li><Link href="/news">Uncategorized <span>06</span></Link></li>
                                            <li><Link href="/news">Web Development <span>10</span></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Never Miss News</h3>
                                    </div>
                                    <div className="social-link">
                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#"><i className="fab fa-twitter"></i></a>
                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                        <a href="#"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                                <div className="single-sidebar-widget">
                                    <div className="wid-title">
                                        <h3>Popular Tags</h3>
                                    </div>
                                    <div className="tagcloud">
                                        <Link href="/news">Business</Link>     
                                        <Link href="/news-details">Consulting</Link>
                                        <Link href="/news-details">Education</Link>
                                        <Link href="/news-details">Immigration</Link>
                                        <Link href="/news-details">Course</Link>
                                        <Link href="/news-details">Learn</Link>
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

export default NewsArea;