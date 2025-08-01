 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import InstructorDetails from '@/components/instructor-details';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Instructor Details - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <InstructorDetails />
    </Wrapper>
  );
};

export default index;