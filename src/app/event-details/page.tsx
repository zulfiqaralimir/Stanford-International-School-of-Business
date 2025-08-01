
import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import EventDetails from '@/components/event-details';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Event Details - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <EventDetails />      
    </Wrapper>
  );
};

export default index;