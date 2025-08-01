import MarqueeOne from "@/common/MarqueeOne";
import HeaderTwo from "@/layouts/headers/HeaderTwo";
import React from "react";
import HeroHomeTwo from "./HeroHomeTwo";
import TopCategoryHomeTwo from "./TopCategoryHomeTwo";
import PopularCoursesHomeTwo from "./PopularCoursesHomeTwo";
import EventHomeTwo from "./EventHomeTwo";
import ChooseHomeTwo from "./ChooseHomeTwo";
import TeamHomeTwo from "./TeamHomeTwo";
import CertificateHomeTwo from "./CertificateHomeTwo";
import CoursesHomeTwo from "./CoursesHomeTwo";
import TestimonialHomeTwo from "./TestimonialHomeTwo";
import FaqHomeTwo from "./FaqHomeTwo";
import BlogHomeTwo from "./BlogHomeTwo";
import FooterTwo from "@/layouts/footers/FooterTwo";

const HomeTwo = () => {
	return (
		<>
			<MarqueeOne />
			<HeaderTwo />
			<HeroHomeTwo />
			<TopCategoryHomeTwo />
			<PopularCoursesHomeTwo />
			<MarqueeOne />
			<EventHomeTwo />
			<ChooseHomeTwo />
			<TeamHomeTwo />
			<CertificateHomeTwo />
			<CoursesHomeTwo />
			<MarqueeOne />
			<TestimonialHomeTwo />
			<FaqHomeTwo />
			<BlogHomeTwo />
			<MarqueeOne />
			<FooterTwo />
		</>
	);
};

export default HomeTwo;
