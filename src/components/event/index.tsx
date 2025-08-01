
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import MarqueeOne from '@/common/MarqueeOne';
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import EventLisrArea from './EventLisrArea';

const Event = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Event List" subtitle="Event List" />
      <EventLisrArea />
			<MarqueeOne style_2={true} />
      <FooterOne />
    </>
  );
};

export default Event;