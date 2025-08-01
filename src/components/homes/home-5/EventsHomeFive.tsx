
import Link from 'next/link';
import React from 'react';

const EventsHomeFive = () => {
  return (
    <>
    <section className="event-section fix section-padding">
            <div className="container">
                <div className="section-title color-blue text-center">
                    <h6 className="wow fadeInUp">
                        Our Events
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Events & Programs
                    </h2>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>18</h2>
                                        <span>Sep 2024</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">Outdoor Games and Nature Exploration</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> New York</li>
                                            <li><i className="far fa-clock"></i> 09:30am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/07.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>20</h2>
                                        <span>Sep 2024</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">A Fun Gathering for Kids and Parents</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> New York</li>
                                            <li><i className="far fa-clock"></i> 09:30am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/08.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>25</h2>
                                        <span>Sep 2024</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">Dress-Up as Your Favorite Characters</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> New York</li>
                                            <li><i className="far fa-clock"></i> 09:30am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/09.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                        <div className="event-box-items-2">
                            <div className="event-content">
                                <div className="content">
                                    <div className="date">
                                        <h2>30</h2>
                                        <span>Sep 2024</span>
                                    </div>
                                    <div className="title-text">
                                        <h4><Link href="/event-details">Dress-Up as Your Favorite Characters</Link></h4>
                                        <ul className="post-time">
                                            <li><i className="far fa-map-marker-alt"></i> New York</li>
                                            <li><i className="far fa-clock"></i> 09:30am</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="event-thumb">
                                <img src="assets/img/event/10.jpg" alt="img" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="event-button text-center pt-5 wow fadeInUp" data-wow-delay=".3s">
                    <Link href="/event" className="theme-btn theme-blue-2">View All Events</Link>
                </div>
            </div>
        </section>
      
    </>
  );
};

export default EventsHomeFive;