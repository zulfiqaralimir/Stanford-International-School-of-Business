import React from "react";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import FooterOne from "@/layouts/footers/FooterOne";
import MarqueeOne from "@/common/MarqueeOne";
import NewsletterHomeOne from "../homes/home/NewsletterHomeOne";
import TestimonialHomeOne from "../homes/home/TestimonialHomeOne";
import BrandsHomeOne from "../homes/home/BrandsHomeOne";
import AboutArea from "./AboutArea";
import FeatureArea from "./FeatureArea";
import TeamHomeFive from "../homes/home-5/TeamHomeFive";
import AboutCounter from "./AboutCounter";

const About = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="About" subtitle="About" />
      <AboutArea />
      <FeatureArea />
      <TeamHomeFive style_2={true} />
      <AboutCounter />
      <TestimonialHomeOne />
			<BrandsHomeOne />
      <NewsletterHomeOne />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default About;
