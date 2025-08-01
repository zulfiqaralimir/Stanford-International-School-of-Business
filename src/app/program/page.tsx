 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Program from '@/components/program';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Program - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Program />
    </Wrapper>
  );
};

export default index;