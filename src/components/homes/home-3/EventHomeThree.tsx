
import Link from 'next/link';
import React from 'react';

const EventHomeThree = () => {
  return (
    <>
       <section className="event-section pt-0 fix section-padding">
            <div className="container">
                <div className="section-title color-red text-center">
                    <h6 className="wow fadeInUp">
                        Upcoming Events
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Webinar on Emerging Trends
                    </h2>
                </div>
                <div className="event-wrapper mt-3 mt-md-0">
                    <div className="row g-0">
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".2s">
                            <div className="event-card-items bg-cover" style={{background: `url(/assets/img/event/02.jpg)`}}>
                                <div className="post-cat">
                                    Sep 13, 2024
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/event-details">
                                            Campus Innovation Day
                                            Exploring Research
                                        </Link>
                                    </h4>
                                    <ul className="date-list">
                                        <li>
                                            <i className="far fa-map-marker-alt"></i>
                                            New York
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            09:30am
                                        </li>
                                    </ul>
                                    <Link href="/event-details" className="theme-btn red-btn">View Events</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".4s">
                            <div className="event-card-items active bg-cover" style={{background: `url(/assets/img/event/11.jpg)`}}>
                                <div className="post-cat">
                                    Sep 13, 2024
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/event-details">
                                            Leadership Summit the
                                            Shaping Tomorrow's
                                        </Link>
                                    </h4>
                                    <ul className="date-list">
                                        <li>
                                            <i className="far fa-map-marker-alt"></i>
                                            New York
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            09:30am
                                        </li>
                                    </ul>
                                    <Link href="/event-details" className="theme-btn red-btn">View Events</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".6s">
                            <div className="event-card-items bg-cover" style={{background: `url(/assets/img/event/12.jpg)`}}>
                                <div className="post-cat">
                                    Sep 13, 2024
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/event-details">
                                            Global Education Expo Study and Programs
                                        </Link>
                                    </h4>
                                    <ul className="date-list">
                                        <li>
                                            <i className="far fa-map-marker-alt"></i>
                                            New York
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            09:30am
                                        </li>
                                    </ul>
                                    <Link href="/event-details" className="theme-btn red-btn">View Events</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay=".8s">
                            <div className="event-card-items bg-cover" style={{background: `url(/assets/img/event/13.jpg)`}}>
                                <div className="post-cat">
                                    Sep 13, 2024
                                </div>
                                <div className="content">
                                    <h4>
                                        <Link href="/event-details">
                                            Global Education Expo Study and Programs
                                        </Link>
                                    </h4>
                                    <ul className="date-list">
                                        <li>
                                            <i className="far fa-map-marker-alt"></i>
                                            New York
                                        </li>
                                        <li>
                                            <i className="far fa-clock"></i>
                                            09:30am
                                        </li>
                                    </ul>
                                    <Link href="/event-details" className="theme-btn red-btn">View Events</Link>
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

export default EventHomeThree;