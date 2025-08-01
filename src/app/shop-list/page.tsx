import ShopList from '@/components/shop-list';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';


import { Metadata } from 'next';
export const metadata: Metadata = {
	title: "Shop List - Eduspace - Online Course, Education & University Next JS Template",
	description: "Full Stack Developer",
	keywords: "Full Stack Developer, at rk-theme",
};

const index = () => {
  return (
    <Wrapper>
      <ShopList />
    </Wrapper>
  );
};

export default index;