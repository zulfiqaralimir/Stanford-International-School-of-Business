
 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Gallery from '@/components/gallery';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Gallery - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Gallery />
    </Wrapper>
  );
};

export default index;