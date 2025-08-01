import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import PricingArea from "./PricingArea";

const Pricing = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Pricing" subtitle="Pricing" />
			<PricingArea />       
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Pricing;
