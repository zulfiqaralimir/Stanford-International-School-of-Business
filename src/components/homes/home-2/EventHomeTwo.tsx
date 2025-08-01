
"use client";
import Link from 'next/link';
import React, { useState } from 'react';


const event_data = [
  {
    id: '.1s', 
    date: "Sep 13, 2024",
    title: "Pathways to Success College and Career Planning Event",
    location: "New York",
    image: "/assets/img/event/01.jpg", 
  },
  {
    id: '.2s', 
    date: "Sep 14, 2024",
    title: "Pathways to Success College and Career Planning Event",
    location: "New York",
    image: "/assets/img/event/01.jpg", 
  },
  {
    id: '.4s', 
    date: "Sep 15, 2024",
    title: "Pathways to Success College and Career Planning Event",
    location: "New York",
    image: "/assets/img/event/01.jpg", 
  },
  {
    id: '.6s', 
    date: "Sep 16, 2024",
    title: "Pathways to Success College and Career Planning Event",
    location: "New York",
    image: "/assets/img/event/01.jpg", 
  },
  {
    id: '.8s', 
    date: "Sep 17, 2024",
    title: "Pathways to Success College and Career Planning Event",
    location: "New York",
    image: "/assets/img/event/01.jpg", 
  }, 
]

const EventHomeTwo = () => {
  
    // State to track the active index
    const [activeIndex, setActiveIndex] = useState(0);

    // Function to handle setting the active index
    const handleActive = (index: any) => {
      setActiveIndex(index === activeIndex ? null : index); // Toggle active class
    };
 
  return (
    <>
      <section className="event-section fix section-padding section-bg pb-0">
            <div className="container">
                <div className="section-title text-center">
                    <h6 className="wow fadeInUp">
                        Upcoming Events
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">Webinar on Emerging Trends</h2>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                      {event_data.map((item, index) => (
                         <div key={index} 
                         onClick={() => handleActive(index)}
                         className="event-box-items wow fadeInUp" data-wow-delay={item.id}>
                            <div className={`accordion-single ${index === activeIndex ? 'active' : ''}`}>
                                <div className="header-area">
                                    <div className="accordion-btn">
                                        <div className="content-items">
                                            <div className="post-date">
                                                  {item.date}
                                            </div>
                                            <div className="content">
                                                <h5><Link href="/event-details">{item.title}</Link></h5>
                                            </div>
                                        </div>
                                        <div className="event-image">
                                            <img src="assets/img/event/01.jpg" alt="img" />
                                        </div>
                                        <ul className="button-list">
                                            <li>
                                                <i className="far fa-map-marker-alt"></i>
                                                {item.location}
                                            </li>
                                            <li>
                                                <Link href="/event-details" className="theme-btn">View Events</Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>                        
                      ))} 
                    </div>
                </div>
                <div className="event-button text-center mt-5 wow fadeInUp" data-wow-delay=".3s">
                    <Link href="/event" className="theme-btn yellow-btn">View All Events</Link>
                </div>
            </div>
            <div className="mycustom-marque style-two">
                <div className="scrolling-wrap style-2">
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Upcoming</div>
                        <div className="cmn-textslide stroke-text">Events</div>
                        <div className="cmn-textslide stroke-text">&</div>
                        <div className="cmn-textslide stroke-text">Program</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Upcoming</div>
                        <div className="cmn-textslide stroke-text">Events</div>
                        <div className="cmn-textslide stroke-text">&</div>
                        <div className="cmn-textslide stroke-text">Program</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Upcoming</div>
                        <div className="cmn-textslide stroke-text">Events</div>
                        <div className="cmn-textslide stroke-text">&</div>
                        <div className="cmn-textslide stroke-text">Program</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Upcoming</div>
                        <div className="cmn-textslide stroke-text">Events</div>
                        <div className="cmn-textslide stroke-text">&</div>
                        <div className="cmn-textslide stroke-text">Program</div>
                    </div>
                    <div className="comm">
                        <div className="cmn-textslide stroke-text">Upcoming</div>
                        <div className="cmn-textslide stroke-text">Events</div>
                        <div className="cmn-textslide stroke-text">&</div>
                        <div className="cmn-textslide stroke-text">Program</div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default EventHomeTwo;