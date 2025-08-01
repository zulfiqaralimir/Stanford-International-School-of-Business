 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Pricing from '@/components/pricing';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Pricing - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Pricing />
    </Wrapper>
  );
};

export default index;