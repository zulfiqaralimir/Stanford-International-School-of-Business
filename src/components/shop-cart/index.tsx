import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import ShopCartArea from './ShopCartArea';

const ShopCart = () => {
  return (
    <>
       <HeaderOne />
      <BreadcrumbShop title="Shop Cart" subtitle="Shop Cart" />
      <ShopCartArea />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default ShopCart;