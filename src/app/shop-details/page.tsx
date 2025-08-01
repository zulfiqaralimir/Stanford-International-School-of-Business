 
import React from 'react';
import Wrapper from '@/layouts/Wrapper';
import ShopDetails from '@/components/shop-details';



import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop Details - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};


const index = () => {
  return (
    <Wrapper>
      <ShopDetails />
    </Wrapper>
  );
};

export default index;