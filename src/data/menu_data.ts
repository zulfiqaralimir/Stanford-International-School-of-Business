import { StaticImageData } from "next/image";

import demo_img_1 from "../../public/assets/img/header/home-1.jpg";
import demo_img_2 from "../../public/assets/img/header/home-2.jpg";
import demo_img_3 from "../../public/assets/img/header/home-3.jpg";
import demo_img_4 from "../../public/assets/img/header/home-4.jpg";
import demo_img_5 from "../../public/assets/img/header/home-5.jpg";
import demo_img_6 from "../../public/assets/img/header/home-6.jpg";
 

 
interface DataType {
	id: number;
	title?: string;
	link: string;
	icon: string;
	img_dropdown?: boolean;
	has_dropdown?: boolean;
	has_dropdown_inner?: boolean;
	sub_menus?: {
		link?: string;
		title?: string;
		title2?: string | any;
		btn_title?: string;
		one_page_link?: string | any;
		one_page_title?: string;
		demo_img?: StaticImageData | any;
    inner_menu?: boolean;   
    inner_menus?: {
       link?: string; title?: string 
    }[];
	}[];
}

// menu data
const menu_data:DataType[] = [
	{
		id: 1,
		title: "Home",
		link: "#",
    icon: "fas fa-home-lg",
		img_dropdown: true,
		sub_menus: [
			{ link: "/", demo_img: demo_img_1, title: "Education", title2: "Education" },
			{ link: "/home-2", demo_img: demo_img_2, title: "Online Course", title2: "Online Course" },
			{ link: "/home-3", demo_img: demo_img_3, title: "University", title2: "University" },
			{ link: "/home-4", demo_img: demo_img_4, title: "Kindergarten", title2: "Kindergarten" },
			{ link: "/home-5", demo_img: demo_img_5, title: "Business Coach", title2: "Business Coach" },
			{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
			{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
			{ link: "#", demo_img: demo_img_6, title2: "Coming Soon" },
		],
	},
	{
		id: 2,
		title: "Courses",
		link: "#",
    icon: "fas fa-book",
		has_dropdown: true,
		sub_menus: [
			{ link: "/courses", title: "Courses" },
			{ link: "/courses-grid", title: "Courses Grid" },
			{ link: "/courses-list", title: "Courses List" },
			{ link: "/courses-details", title: "Courses Details 01" },
			{ link: "/courses-details-2", title: "Courses Details 02" },
		],
	},
	{
		id: 3,
		title: "Events",
		link: "#",
    icon: "fas fa-gift",
		has_dropdown: true,
		sub_menus: [
			{ link: "/event", title: "event" },
			{ link: "/event-details", title: "Event Details" },
		],
	},
	{
		id: 4,
		title: "Shop",
		link: "#",
    icon: "fas fa-shopping-bag",
		has_dropdown: true,
		sub_menus: [
			{ link: "/shop-grid", title: "Shop Grid" },
			{ link: "/shop-list", title: "Shop List" },
			{ link: "/shop-left-sidebar", title: "Shop - Left Sidebar" },
			{ link: "/shop-right-sidebar", title: "Shop -  Right Sidebar" },
			{ link: "/shop-details", title: "Product Details" },
			{ link: "/shop-cart", title: "Shop Cart" },
			{ link: "/checkout", title: "Checkout" },
		],
	},
	{
		id: 5,
		title: "Pages",
		link: "#",
    icon: "fas fa-file-alt",
		has_dropdown: true,
		has_dropdown_inner: true,
		sub_menus: [
			{ link: "/about", title: "About" },
			{ link: "/instructor", title: "Instructor" },
			{ link: "/instructor-details", title: "Instructor Details" },
			{ link: "/program", title: "Program" },
			{ link: "/program-details", title: "Program Details" },
			{
				inner_menu: true,
				title: "Blog",
				inner_menus: [
					{ link: "/news", title: "Blog" },
					{ link: "/news-details", title: "Blog Details" },
				]
			},
			{ link: "/gallery", title: "Gallery" },
			{ link: "/pricing", title: "Pricing Plan" },
			{ link: "/faq", title: "Faqs" },
			{ link: "/sign-in", title: "Sign In" },
			{ link: "/register", title: "register" },
			{ link: "/404", title: "404 Error" },
		],
	},
	{
		id: 6,
		title: "Contact",
		link: "/contact",
    icon: "fas fa-phone-rotary",
		has_dropdown: false,
	},
];
export default menu_data;
