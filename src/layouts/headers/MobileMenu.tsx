
"use client"
import menu_data from "@/data/menu_data";
import Link from "next/link";
import React, { useState } from "react";

const MobileMenu = () => {

  const [navTitle, setNavTitle] = useState("");
  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const [navTitle2, setNavTitle2] = useState("");
  //openMobileMenu
  const openMobileMenu2 = (menu: string) => {
    if (navTitle2 === menu) {
      setNavTitle2("");
    } else {
      setNavTitle2(menu);
    }
  };
	return (
		<>
			<div className="mean-bar">
				<a href="#nav" className="meanmenu-reveal">
					<span>
						<span>
							<span></span>
						</span>
					</span>
				</a>
				<nav className="mean-nav">
					<ul>
            {menu_data.map((item, i) => (
              <li key={i} className={item.has_dropdown ? "has-dropdown" : ""}>								
							<Link href={item.link}>  
								{item.title} 
							</Link>
							<ul className="submenu" style={{ display: navTitle === item.title ? "block" : "none", }}>
                {item?.sub_menus?.map((inner_item, index) => (
                 <React.Fragment key={index}>
									{inner_item.title && 
									<>
									
									<li>
								 <Link href={inner_item.link ?? ""}>{inner_item.title}</Link>
								 {inner_item.inner_menu ? 
									<a className={`mean-expand ${inner_item?.title === navTitle2 ? "mean-clicked" : ""}`} href="#" onClick={() => openMobileMenu2(inner_item?.title ?? "")}>
										<i className="far fa-plus"></i>
									</a>
									: null              
								}
							 </li>
							 {index === 5 &&  item.has_dropdown_inner &&  
							 <li> 
								 <ul className="submenu" style={{ display: navTitle2 === inner_item.title ? "block" : "none", }}>
								 <li><Link href="/news">Blog</Link></li>
								 <li><Link href="/news-details">Blog Details</Link></li>
								 </ul> 
							 </li>
							 }
									
									</>
								
							}
                              
                 </React.Fragment>
                )) } 
							</ul>
              {item.has_dropdown || item.img_dropdown ? 
							<a className={`mean-expand ${item?.title === navTitle ? "mean-clicked" : ""}`} href="#" onClick={() => openMobileMenu(item?.title ?? "")}>
								<i className="far fa-plus"></i>
							</a>
              : null              
            }
						</li>

            ))} 
					</ul>
				</nav>
			</div>
		</>
	);
};

export default MobileMenu;
