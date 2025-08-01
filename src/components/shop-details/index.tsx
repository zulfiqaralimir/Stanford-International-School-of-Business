import React from 'react';
import MarqueeOne from '@/common/MarqueeOne';
import ShopDetailsArea from './ShopDetailsArea';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';
import RealatedProducts from './RealatedProducts';

const ShopDetails = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbShop title="Shop Details" subtitle="Shop Details" />
      <ShopDetailsArea />
      <RealatedProducts />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default ShopDetails;