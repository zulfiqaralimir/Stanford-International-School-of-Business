"use client"
import NiceSelect from '@/ui/NiceSelect';
import Link from 'next/link';
import React from 'react';

const ShopListArea = () => {
  const selectHandler = (e: any) => { };

  return (
    <>
      <section className="shop-section section-padding">
            <div className="container">
                <div className="shop-wrapper">
                    <div className="coureses-notices-wrapper mb-4">
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
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/01.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">A Prayer for Owen Meany</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/02.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">All the Light We Cannot See</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/03.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Don’t forget the girl</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/04.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Love in the Time of Cholera</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/05.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">Memoirs of a Geisha</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="shop-list-items">
                                <div className="book-thumb">
                                    <a href="shop-details"><img src="assets/img/shop/06.jpg" alt="img" /></a>
                                </div>
                                <div className="shop-content">
                                    <h3><Link href="/shop-details">The Catcher in the Rye</Link></h3>
                                    <h4>$39.00</h4>
                                   <div className="star">
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                   </div>
                                   <p>
                                    Vestibulum consectetur fringilla tellus, et pulvinar massa tempus nec. Fusce nibh nibh, consectetur vitae felis quis, sagittis ullamcorper enim. Nullam maximus vehicula justo, vel vestibulum turpis dictum at. Nam sed laoreet sem. Aliquam urna massa.
                                   </p>
                                    <div className="shop-button">
                                        <Link href="/shop-details" className="theme-btn"><i className="far fa-shopping-basket"></i> Add To Cart</Link>
                                        <ul className="shop-icon d-flex justify-content-center align-items-center">
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
        </section>
    </>
  );
};

export default ShopListArea;