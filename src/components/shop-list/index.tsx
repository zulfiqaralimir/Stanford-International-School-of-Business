
import React from 'react';
import ShopListArea from './ShopListArea';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';

const ShopList = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbShop title="Shop Page" subtitle="Shop List View" />
      <ShopListArea />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default ShopList;