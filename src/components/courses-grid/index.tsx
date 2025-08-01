
import React from 'react';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import CoursesGridArea from './CoursesGridArea';

const CoursesGrid = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbCourses title="Courses - Grid Style" subtitle="Courses Grid" />
    <CoursesGridArea /> 
    <FooterOne />      
    </>
  );
};

export default CoursesGrid;