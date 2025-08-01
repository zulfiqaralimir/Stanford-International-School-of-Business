import React from "react"; 
import MarqueeOne from "@/common/MarqueeOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import ProgramDetailsArea from "./ProgramDetailsArea";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import ProgramRelatedArea from "./ProgramRelatedArea";

const ProgramDetails = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Program Details" subtitle="Program Details" />
			<ProgramDetailsArea />
			<ProgramRelatedArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default ProgramDetails;
