
"use client"
import Link from 'next/link';
import React, { useState } from 'react';

interface DataType {
  id: number;
  name: string;
  designatio: string;
  avatar: string;
}
const team_data:DataType[] = [
  {
    id: 1,
    name: "Michael M. Wallace",
    designatio: "Bangla Instructors",
    avatar: "/assets/img/team/10.jpg",
  },
  {
    id: 2,
    name: "Alan L. Kessler",
    designatio: "Math Instructors",
    avatar: "/assets/img/team/10.jpg",
  },
  {
    id: 3,
    name: "Nathan D. Schroeder",
    designatio: "Computer Instructors",
    avatar: "/assets/img/team/10.jpg",
  },
  {
    id: 4,
    name: "Brian C. Morrow",
    designatio: "Physical Instructors",
    avatar: "/assets/img/team/10.jpg",
  },
  {
    id: 5,
    name: "Alan Ln. Kessler",
    designatio: "English Instructors",
    avatar: "/assets/img/team/10.jpg",
  },
]

const TeamHomeFour = () => {

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left; // Get cursor X relative to the item
    const y = e.clientY - rect.top;  // Get cursor Y relative to the item
    setCursorPos({ x, y });
  };



  return (
    <>
       <section className="team-section section-padding">
            <div className="container">
                <div className="section-title text-center color-pink">
                    <h6 className="wow fadeInUp">
                        Our Instructors
                    </h6>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                        Meet Our Expert Instructors
                    </h2>
                </div>
                <div className="team-wrapper">
                  {team_data.map((item, i) => (
                    <div key={i} 
                    className={`team-list-items ${activeIndex === i ? "active" : ""}`}
                    onMouseEnter={() => handleMouseEnter(i)}
                    // onMouseLeave={handleMouseLeave}
                    onMouseMove={handleMouseMove}>
                      <div className="team-content">
                          <div className="content">
                              <span>0{item.id}</span>
                              <h3><Link href="/instructor-details">{item.name}</Link></h3>
                          </div>
                          <p>{item.designatio}</p>
                      </div>
                      <Link href="/instructor-details" className="icon"><i className="far fa-arrow-right"></i></Link>
                      <div className="team-hover d-none d-md-block bg-cover" 
                      style={{background: `url(/assets/img/team/10.jpg)`, 
                        transform: activeIndex === i ? `translate(${cursorPos.x}px, ${cursorPos.y}px)` : "translate(0, 0)",
                        transition: activeIndex === i ? "none" : "transform 0.3s ease",}}></div>
                  </div>
                  ))} 
                </div>
            </div>
        </section>
    </>
  );
};

export default TeamHomeFour;