 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Instructor from '@/components/instructor';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Instructor - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Instructor />
    </Wrapper>
  );
};

export default index;