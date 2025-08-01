
import React from 'react';
import ProgramArea from './ProgramArea';
import MarqueeOne from '@/common/MarqueeOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne'; 
import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';

const Program = () => {
  return (
    <>
      <HeaderOne />
			<BreadcrumbEvent title="Program" subtitle="Program" />
      <ProgramArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
    </>
  );
};

export default Program;