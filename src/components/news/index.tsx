import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import NewsArea from "./NewsArea";

const News = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Blog" subtitle="Blog" />
			<NewsArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default News;
