
import Timer from '@/common/Timer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import React from 'react';

const MyTimer = dynamic(() => import("../../common/Timer"), { ssr: false });

const EventDetailsArea = () => {
  return (
    <>
        <section className="event-details-section section-padding pt-0">
            <div className="container">
                <div className="event-details-wrapper">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="event-details-items">
                                <div className="details-image">
                                    <img src="assets/img/event/details-1.jpg" alt="img" />
                                </div>
                                <div className="event-details-content">
                                    <h3>Event Description</h3>
                                    <p className="mb-4">
                                        Are you looking for ways to improve your study habits and boost your academic performance? Join us for an engaging workshop where we’ll explore effective study techniques that will help you excel in your studies. This session will cover proven method note-taking, time management, memory enhancement, and exam preparation. Whether you're in high school or college, these skills.
                                    </p>
                                    <p className="mb-5">
                                        UI (User Interface) Design is the process of creating the visual elements of a product, including layout, color schemes, typography, and interactive features like buttons and icons.
                                    </p>
                                    <h3>
                                        What You Will Learn
                                    </h3>
                                    <p>
                                        Together, UX and UI design ensure that digital products are not only functional and accessible but also engaging and visually coherent, enhancing both usability and overall user satisfaction.
                                    </p>
                                    <ul className="details-list">
                                        <li><i className="fas fa-check-circle"></i>How to create a personalized study plan that works for you.</li>
                                        <li><i className="fas fa-check-circle"></i>Techniques to manage your time more effectively</li>
                                        <li><i className="fas fa-check-circle"></i>Strategies to improve focus and avoid distractions.</li>
                                        <li><i className="fas fa-check-circle"></i>Memory-boosting methods to retain information longer.</li>
                                        <li><i className="fas fa-check-circle"></i>Tips on reducing stress during exam preparation..</li>
                                    </ul>
                                    <h3>
                                        Event Location
                                    </h3>
                                    <p>
                                        This event is open to students of all levels looking to improve their study skills and academic performance.
                                    </p>
                                    <div className="map-area">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6678.7619084840835!2d144.9618311901502!3d-37.81450084255415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4758afc1d%3A0x3119cc820fdfc62e!2sEnvato!5e0!3m2!1sen!2sbd!4v1641984054261!5m2!1sen!2sbd" style={{border: "0px"}} allowFullScreen={true} loading="lazy"></iframe>
                                    </div>
                                    <h3>
                                        Event Speaker
                                    </h3>
                                    <p>
                                        Join us for an exciting event designed to help students enhance their academic performance through proven study techniques and strategies. This interactive session will provide valuable insights into time management, note-taking, memory retention, and exam preparation.
                                    </p>
                                    <div className="row g-0">
                                        <div className="col-md-4">
                                            <div className="event-image-items border-right-none">
                                                <div className="event-image">
                                                    <img src="assets/img/event/details-2.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link href="/event-details">Shawn M. Sanchez</Link>
                                                    </h4>
                                                    <span>Leadership Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="event-image-items border-right-none">
                                                <div className="event-image">
                                                    <img src="assets/img/event/details-3.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link href="/event-details">Michael C. Polak</Link>
                                                    </h4>
                                                    <span>English Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="event-image-items">
                                                <div className="event-image">
                                                    <img src="assets/img/event/details-4.png" alt="img" />
                                                </div>
                                                <div className="event-content">
                                                    <h4>
                                                        <Link href="/event-details">Paul G. Bergeron</Link>
                                                    </h4>
                                                    <span>UX/UI Speakers</span>
                                                    <div className="social-icon">
                                                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                                                        <a href="#"><i className="fab fa-instagram"></i></a>
                                                        <a href="#"><i className="fab fa-dribbble"></i></a>
                                                        <a href="#"><i className="fab fa-behance"></i></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="event-details-information sticky-style">
                                <h4>Event Information</h4>
                                <ul className="information-list">
                                    <li>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                            Start Date
                                        </span>
                                        <span className="text">15 October 2024</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="fas fa-calendar-alt"></i>
                                            End Date
                                        </span>
                                        <span className="text">20 October 2024</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                            Start Time
                                        </span>
                                        <span className="text">08:00 am</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-clock"></i>
                                            End Time
                                        </span>
                                        <span className="text">05:00 pm</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-map-marker-alt"></i>
                                            Location
                                        </span>
                                        <span className="text">New York</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-money-bill-wave"></i>
                                            Ticket Price
                                        </span>
                                        <span className="text color-2">$170.00</span>
                                    </li>
                                    <li>
                                        <span>
                                            <i className="far fa-loveseat"></i>
                                            Total Seat
                                        </span>
                                        <span className="text color-3">50</span>
                                    </li>
                                </ul>
                                <Link href="/event-details" className="theme-btn">Book your seat</Link>
                              <MyTimer />
                                <Link href="/event-details" className="share-btn"><i className="fas fa-share"></i> Share this events</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default EventDetailsArea;