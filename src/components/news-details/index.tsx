import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import NewsDetailsArea from "./NewsDetailsArea";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";

const NewsDetails = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Blog Details" subtitle="Blog Details" />
			<NewsDetailsArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default NewsDetails;
