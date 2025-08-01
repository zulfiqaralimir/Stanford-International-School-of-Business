

import React from 'react';
import ShopGridArea from './ShopGridArea';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';

const ShopGrid = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbShop title="Shop Page" subtitle="Shop" />
      <ShopGridArea />
      <MarqueeOne style_2={true} />
      <FooterOne />

    </>
  );
};

export default ShopGrid;