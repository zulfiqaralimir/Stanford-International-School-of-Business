
import React from 'react';
import Event from '@/components/event';
import Wrapper from '@/layouts/Wrapper'; 


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Event - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Event />      
    </Wrapper>
  );
};

export default index;