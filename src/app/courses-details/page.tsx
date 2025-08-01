
import React from 'react';
import Wrapper from '@/layouts/Wrapper'; 
import CoursesDetails from '@/components/courses-details';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses Details - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <CoursesDetails />      
    </Wrapper>
  );
};

export default index;