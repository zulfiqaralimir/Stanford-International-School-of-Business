
import BreadcrumbCourses from '@/common/breadcrumb/BreadcrumbCourses';
import FooterOne from '@/layouts/footers/FooterOne';
import HeaderOne from '@/layouts/headers/HeaderOne';
import React from 'react';
import CoursesListArea from './CoursesListArea';

const CoursesList = () => {
  return (
    <>
    <HeaderOne />
    <BreadcrumbCourses title="Courses - List View Style" subtitle="Courses List View" />
    <CoursesListArea />
    <FooterOne />      
    </>
  );
};

export default CoursesList;