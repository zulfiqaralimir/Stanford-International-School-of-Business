 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import Contact from '@/components/contact';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Contact - Mir Global Academy - Online Course, Education & University",
	description: "Business School",
	keywords: "Business School, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <Contact />
    </Wrapper>
  );
};

export default index;