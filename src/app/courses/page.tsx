
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import Courses from '@/components/courses';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Courses - Mir Global Academy - Online Course, Education & University",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Courses />      
    </Wrapper>
  );
};

export default index;