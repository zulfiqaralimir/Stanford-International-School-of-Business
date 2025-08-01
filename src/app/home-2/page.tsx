
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import HomeTwo from '@/components/homes/home-2';

import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Online Course - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;