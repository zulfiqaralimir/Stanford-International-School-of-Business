import React from "react";
import MarqueeOne from "@/common/MarqueeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import BreacrumbEventDetails from "@/common/breadcrumb/BreacrumbEventDetails";
import EventDetailsArea from "./EventDetailsArea";

const EventDetails = () => {
	return (
		<>
			<HeaderOne />
      <BreacrumbEventDetails />
      <EventDetailsArea />
      <MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default EventDetails;
