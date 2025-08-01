

import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import CoursesDetailsTwoArea from "./CoursesDetailsTwoArea";
import RelatedCourses from "../courses-details/RelatedCourses";
import BreadcrumbCoursesDetailsTwo from "@/common/breadcrumb/BreadcrumbCoursesDetailsTwo";



const CoursesDetailsTwo = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbCoursesDetailsTwo />
			<CoursesDetailsTwoArea />
			<RelatedCourses />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default CoursesDetailsTwo;
