"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const EventLisrArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
        <section className="event-list-section fix section-padding pt-0">
            <div className="container">
                <div className="event-list-wrapper">
                    <div className="event-list-top-area">
                        <div className="search-widget">
                            <input type="text" placeholder="Find event" />
                            <div className="sub-icon"><i className="fal fa-search"></i></div>
                        </div>
                        <div className="form-clt"> 

                            <NiceSelect
                          className="category"
                          options={[
                            { value: "01", text: "Event Location" },
                            { value: "02", text: "Finland" },
                            { value: "03", text: "India" },
                            { value: "04", text: "Japan" }, 
                            { value: "05", text: "Denmark" }, 
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                        </div>
                        <div className="form-clt"> 

                            <NiceSelect
                          className="category"
                          options={[
                            { value: "01", text: "Category" },
                            { value: "02", text: "Category 02" },
                            { value: "03", text: "Category 03" },
                            { value: "04", text: "Category 04" }, 
                            { value: "05", text: "Category 05" }, 
                          ]}
                          defaultCurrent={0}
                          onChange={selectHandler}
                          name=""
                          placeholder="" />
                        </div>
                        <div className="event-button-top">
                            <button type="submit" className="theme-btn">Find Event</button>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>18</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Outdoor Games and Nature Exploration</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/01.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>20</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Time Management Skills for Learning</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/02.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>22</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Interactive Study Collaborate Conquer</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/03.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>24</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Boost Memory Study Hacks Work</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/04.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>26</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Study Smart Efficiency in Learning</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/05.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>28</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Note-Taking Mastery Best Techniques</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/06.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>30</h2>
                                    <span>Sep 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Exam Strategies to Ace Your Finals</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/07.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-list-items">
                        <div className="event-content">
                            <div className="content">
                                <div className="date">
                                    <h2>01</h2>
                                    <span>Oct 2024</span>
                                </div>
                                <div className="title-text">
                                    <h4><Link href="/event-details">Mastering Techniques Workshop</Link></h4>
                                    <ul className="post-time">
                                        <li><i className="far fa-map-marker-alt"></i>Ronald D. Birt</li>
                                        <li><i className="far fa-map-marker-alt"></i> New York</li>
                                        <li><i className="far fa-clock"></i> 09:30am</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="event-image">
                            <img src="assets/img/event/list/08.jpg" alt="img" />
                        </div>
                        <div className="event-btn"> 
                            <Link href="/event-details" className="theme-btn">
                                Book A Seat
                            </Link>
                        </div>
                    </div>
                    <div className="event-button">
                        <Link href="/event-details" className="theme-btn">View All Events</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default EventLisrArea;