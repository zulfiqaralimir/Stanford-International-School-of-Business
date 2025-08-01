import BreadcrumbCourses from "@/common/breadcrumb/BreadcrumbCourses"; 
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import RegisterForm from "./RegisterForm";

const Register = () => {
	return (
		<>
			<HeaderOne /> 
			<BreadcrumbCourses title="Register" subtitle="Register" />
			<RegisterForm />       
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Register;
