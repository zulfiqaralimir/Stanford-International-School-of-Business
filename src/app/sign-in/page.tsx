 
import React from 'react'; 
import Wrapper from '@/layouts/Wrapper';
import SignIn from '@/components/sign-in';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Sign In - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <SignIn />
    </Wrapper>
  );
};

export default index;