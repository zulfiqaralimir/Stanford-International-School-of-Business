import React from "react";
import GalleryArea from "./GalleryArea";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";

const Gallery = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Gallery" subtitle="Gallery" />
			<GalleryArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Gallery;
