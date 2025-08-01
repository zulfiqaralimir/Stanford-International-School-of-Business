import BreadcrumbEvent from '@/common/breadcrumb/BreadcrumbEvent';
import MarqueeOne from '@/common/MarqueeOne';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import Link from 'next/link';
import React from 'react';

const Error = () => {
  return (
    <>
      <HeaderOne />
      <BreadcrumbEvent title="Error 404" subtitle="Error 404" />

      <div className="error-section fix section-padding pt-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="error-items text-center">
                            <div className="error-image wow fadeInUp" data-wow-delay=".3s">
                                <img src="assets/img/404.png" alt="img" />
                            </div>
                            <Link href="/" className="theme-btn wow fadeInUp" data-wow-delay=".5s">
                                Back To Home
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <MarqueeOne style_2={true} />
        <FooterOne />
    </>
  );
};

export default Error;