
import React from 'react';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import ShopLeftSidebarArea from './ShopLeftSidebarArea';
import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';

const ShopLeftSidebar = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbShop title="Shop Left Sidebar" subtitle="Shop Left Sidebar" />
      <ShopLeftSidebarArea />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default ShopLeftSidebar;