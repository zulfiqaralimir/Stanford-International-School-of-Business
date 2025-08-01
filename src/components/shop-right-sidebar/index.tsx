import React from 'react'; 
import MarqueeOne from '@/common/MarqueeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import ShopRightSidebarArea from './ShopRightSidebarArea';
import BreadcrumbShop from '@/common/breadcrumb/BreadcrumbShop';

const ShopRightSidebar = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbShop title="Shop Right Sidebar" subtitle="Shop Right Sidebar" />
      <ShopRightSidebarArea />
      <MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default ShopRightSidebar;