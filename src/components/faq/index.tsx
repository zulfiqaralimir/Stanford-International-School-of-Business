
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import FaqArea from './FaqArea';

const Faq = () => {
  return (
    <>
      <HeaderOne />
			<BreadcrumbEvent title="Faq" subtitle="Faq" />
			<FaqArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
    </>
  );
};

export default Faq;