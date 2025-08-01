import React from "react";
import HeroHomeFive from "./HeroHomeFive";
import TeamHomeFive from "./TeamHomeFive";
import AboutHomeFive from "./AboutHomeFive";
import ChooseHomeFive from "./ChooseHomeFive";
import MarqueeFour from "@/common/MarqueeFour";
import CounterHomeFive from "./CounterHomeFive";
import CoursesHomeFive from "./CoursesHomeFive";
import CategoryHomeFive from "./CategoryHomeFive";
import HeaderFive from "@/layouts/headers/HeaderFive";
import EventsHomeFive from "./EventsHomeFive";
import FaqHomeFive from "./FaqHomeFive";
import TestimonialHomeFive from "./TestimonialHomeFive";
import PartnarsHomeThree from "../home-3/PartnarsHomeThree";
import FooterFive from "@/layouts/footers/FooterFive";

const HomeFive = () => {
	return (
		<>
			<HeaderFive />
			<HeroHomeFive />
			<CategoryHomeFive />
			<AboutHomeFive />
			<CounterHomeFive />
			<CoursesHomeFive />
			<ChooseHomeFive />
			<TeamHomeFive />
			<MarqueeFour />
			<EventsHomeFive />
			<FaqHomeFive />
			<TestimonialHomeFive />
			<PartnarsHomeThree style_2={true} />
			<FooterFive />
		</>
	);
};

export default HomeFive;
