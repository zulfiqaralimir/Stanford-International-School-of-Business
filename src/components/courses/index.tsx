
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import MarqueeOne from '@/common/MarqueeOne';
import CoursesArea from './CoursesArea';

const Courses = () => {
  return (
		<>
			<HeaderOne />
			<BreadcrumbCourses title="All Courses" subtitle="Courses" />
			<CoursesArea />
			<MarqueeOne style_2={true} />
			<FooterOne />
		</>
	);
};

export default Courses;