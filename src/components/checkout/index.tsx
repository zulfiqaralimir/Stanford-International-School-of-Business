import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CheckoutArea from './CheckoutArea';

const Checkout = () => {
  return (
    <>
       <HeaderOne />
      <BreadcrumbShop title="Checkout" subtitle="Checkout" />
      <CheckoutArea />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Checkout;