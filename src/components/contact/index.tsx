import BreadcrumbEvent from "@/common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import React from "react";
import ContactArea from "./ContactArea";
import MapArea from "./MapArea";
import ContactForm from "./ContactForm";

const Contact = () => {
	return (
		<>
			<HeaderOne />
			<BreadcrumbEvent title="Contact" subtitle="Contact" />
			<ContactArea />
      <MapArea />
      <ContactForm />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Contact;
