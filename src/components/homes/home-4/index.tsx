import HeaderFour from '@/layouts/headers/HeaderFour';
import React from 'react';
import HeroHomeFour from './HeroHomeFour';
import ChooseHomeFour from './ChooseHomeFour';
import AboutHomeFour from './AboutHomeFour';
import CoursesHomeFour from './CoursesHomeFour';
import FunfactHomeFour from './FunfactHomeFour';
import MarqueeThree from '@/common/MarqueeThree';
import TeamHomeFour from './TeamHomeFour';
import EventHomeThree from './EventHomeThree';
import TestimonialHomeFour from './TestimonialHomeFour';
import InstagramHomeFour from './InstagramHomeFour';
import BlogHomeFour from './BlogHomeFour';
import CtaHomeFour from './CtaHomeFour';
import FooterOne from '@/layouts/footers/FooterOne';

const HomeFour = () => {
  return (
    <>
    <HeaderFour />
    <HeroHomeFour />
    <ChooseHomeFour />
    <AboutHomeFour />
    <CoursesHomeFour />
    <FunfactHomeFour />
    <MarqueeThree />
    <TeamHomeFour />
    <EventHomeThree />
    <TestimonialHomeFour />
    <InstagramHomeFour />
    <BlogHomeFour />
    <CtaHomeFour />  
    <FooterOne style_2={true} />    
    </>
  );
};

export default HomeFour;