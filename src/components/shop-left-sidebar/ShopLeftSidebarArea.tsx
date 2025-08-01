"use client"
import InputRange from '@/ui/InputRange';
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React, { useState } from 'react';

const ShopLeftSidebarArea = () => {
  const selectHandler = (e: any) => { };

  const [priceValue, setPriceValue] = useState([0, 1000]); 
  const handleChanges = (val: number[]) => {
    setPriceValue(val)
  }

  return (
    <>
      <section className="shop-section section-padding">
            <div className="container">
                <div className="shop-wrapper">
                    <div className="row g-5">
                        <div className="col-xl-4 col-lg-4 order-2 order-md-1">
                            <div className="courses-main-sidebar-area sticky-style">
                                <div className="courses-main-sidebar">
                                    <div className="courses-sidebar-items">
                                        <div className="wid-title style-2">
                                            <h5>Search</h5>
                                        </div>
                                        <div className="search-widget">
                                            <form action="#">
                                                <input type="text" placeholder="Search courses" />
                                                <button type="submit"><i className="fal fa-search"></i></button>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="courses-sidebar-items">
                                        <div className="wid-title">
                                            <h5>Category</h5>
                                        </div>
                                        <div className="courses-list">
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" defaultChecked />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Books
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Fiction
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Kids Books
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Non Fiction
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Uncategorized
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Young Adult
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="courses-sidebar-items">
                                        <div className="wid-title">
                                            <h5>Format</h5>
                                        </div>
                                        <div className="courses-list">
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Audio cd
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Book
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Ebook
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Hardback
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Mixed media
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Paperback
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="courses-sidebar-items">
                                        <div className="wid-title">
                                            <h5>Authors</h5>
                                        </div>
                                        <div className="courses-list">
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        John D. Hambly
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Gerald N. Hopkins
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox"/>
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Charles R. Green
                                                    </span>
                                                </span>
                                            </label>
                                            <label className="checkbox-single">
                                                <span className="d-flex gap-xl-3 gap-2 align-items-center">
                                                    <span className="checkbox-area d-center">
                                                        <input type="checkbox" />
                                                        <span className="checkmark d-center"></span>
                                                    </span>
                                                    <span className="text-color">
                                                        Roger C. Byers
                                                    </span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="courses-sidebar-items">
                                        <div className="wid-title">
                                            <h5>Price</h5>
                                        </div> 
                                            <InputRange
                                            MAX={1000}
                                            MIN={0}
                                            STEP={1}
                                            values={priceValue}
                                            handleChanges={handleChanges}
                                            />                                          
                                            <div className="price-text pt-4 d-flex gap-3" onChange={() => handleChanges}>
                                                <label htmlFor="amount">Price:</label> 
                                                <span onChange={() => handleChanges}>
                                                ${priceValue[0]} - ${priceValue[1]}
                                                </span> 
                                            </div> 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 order-1 order-md-2">
                            <div className="coureses-notices-wrapper">
                                <div className="courses-showing">
                                    <div className="icon-items">
                                        <Link href="/shop-grid"><i className="fas fa-th"></i></Link>
                                        <Link href="/shop-list"><i className="fas fa-bars"></i></Link>
                                    </div>
                                    <h5>Showing <span>1-9</span> Of <span>62</span> Results</h5>
                                </div>
                                <div className="form-clt">
                                <NiceSelect
                                className="category"
                                options={[
                                    { value: "01", text: "Sort by : Default" },
                                    { value: "02", text: "Sort by popularity" },
                                    { value: "03", text: "Sort by average rating" },
                                    { value: "04", text: "Sort by latest" }, 
                                ]}
                                defaultCurrent={0}
                                onChange={selectHandler}
                                name=""
                                placeholder="" />
                                 </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/01.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">A Prayer for Owen Meany</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/02.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">All the Light We Cannot See</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/03.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">Don’t forget the girl</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/04.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">Love in the Time of Cholera</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/05.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">Memoirs of a Geisha</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/06.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">Pride and Prejudice</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/07.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">The Catcher in the Rye</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/08.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">The House of the Spirits</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-6">
                                    <div className="shop-box-items">
                                        <div className="book-thumb center">
                                            <a href="shop-details"><img src="assets/img/shop/09.jpg" alt="img" /></a>
                                            <ul className="shop-icon d-grid justify-content-center align-items-center">
                                                <li>
                                                    <Link href="/shop-cart"><i className="far fa-heart"></i></Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-cart">
                                                        <i className="far fa-bookmark"></i>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/shop-details"><i className="far fa-eye"></i></Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="shop-content">
                                            <h3><Link href="/shop-details">The Old Man and the Sea</Link></h3>
                                            <ul className="price-list">
                                                <li>$39.00</li>
                                                <li>
                                                    <i className="fas fa-star"></i>
                                                    3.4 (25)
                                                </li>
                                            </ul>
                                            <div className="shop-button">
                                                <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="page-nav-wrap pt-5">
                                <ul>
                                    <li><a className="page-numbers" href="#">1</a></li>
                                    <li><a className="page-numbers" href="#">2</a></li>
                                    <li><a className="page-numbers" href="#">3</a></li>
                                    <li><a className="page-numbers" href="#">4</a></li>
                                    <li><a className="page-numbers" href="#"><i className="far fa-arrow-right"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default ShopLeftSidebarArea;