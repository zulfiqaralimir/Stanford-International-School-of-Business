import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import SignInForm from "./SignInForm";

const SignIn = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbCourses title="Sign In" subtitle="Sign In" />
			<SignInForm />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default SignIn;
