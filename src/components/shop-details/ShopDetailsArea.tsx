"use client"
import Link from 'next/link';
import React from 'react';

const ShopDetailsArea = () => {
  return (
    <>
      <section className="shop-details-section section-padding">
            <div className="container">
               <div className="shop-details-wrapper">
                    <div className="shop-details-items">
                        <div className="row g-4">
                            <div className="col-lg-5">
                                <div className="details-image">
                                    <img src="assets/img/shop/03.jpg" alt="img" />
                                </div>
                                <div className="book-list">
                                    <ul>
                                        <li>
                                            <span className="text-1">Print length</span>
                                            <i className="far fa-book"></i>
                                            <span className="text-2">390 pages</span>
                                        </li>
                                        <li>
                                            <span className="text-1">Language</span>
                                            <i className="fal fa-globe"></i>
                                            <span className="text-2">English</span>
                                        </li>
                                        <li>
                                            <span className="text-1">Publication</span>
                                            <i className="far fa-edit"></i>
                                            <span className="text-2">Modina Books</span>
                                        </li>
                                        <li>
                                            <span className="text-1">ISBN</span>
                                            <i className="far fa-barcode"></i>
                                            <span className="text-2">967678345776</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="details-content">
                                    <span className="post-cut">
                                        29 In Stock
                                    </span>
                                    <h2>
                                        JavaScript from Beginner to Professional Learn
                                    </h2>
                                    <ul className="author-list">
                                        <li>
                                            <span>
                                                Author: 
                                                <b>Gilberto Mills</b>
                                            </span>
                                        </li>
                                        <li>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star color-2"></i>
                                                <span>(5 reviews)</span>
                                            </div>
                                        </li>
                                    </ul>
                                    <div className="price-list">
                                        <h3>$35.76</h3>
                                        <h3>-</h3>
                                        <h3>$51.36</h3>
                                    </div>
                                    <p>
                                        Embodying the raw, wayward spirit of rock n roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
                                    </p>
                                    <div className="format-items">
                                        <h6>Format</h6>
                                        <ul className="format-box-list">
                                            <li>
                                                Audio cd
                                                <span>32.89</span>
                                            </li>
                                            <li>
                                                Ebook
                                                <span>52.89</span>
                                            </li>
                                            <li>
                                                Hardback
                                                <span>22.89</span>
                                            </li>
                                            <li>
                                                Paperback
                                                <span>30.89</span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="cart-quantity">
                                        <p className="qty">
                                            <button className="qtyminus" aria-hidden="true">−</button>
                                            <input type="number" name="qty" id="qty2" min="1" max="10" step="1" defaultValue={1} />
                                            <button className="qtyplus" aria-hidden="true">+</button>
                                        </p>
                                        <Link href="/shop-details" className="shop-btn theme-btn"><i className="fa-regular fa-bag-shopping"></i> Add to cart</Link>
                                        <div className="icon-item">
                                            <Link href="/shop-details" className="icon">
                                                <i className="far fa-heart"></i>
                                            </Link>
                                            <Link href="/shop-details" className="icon">
                                                <i className="far fa-share"></i>
                                            </Link>
                                        </div>
                                    </div>
                                    <button type="submit" className="buy-btn">
                                        Buy It Now
                                    </button>
                                    <ul className="list">
                                        <li>
                                            <i className="fas fa-exchange"></i>
                                            Free Shipping & Exchanges
                                        </li>
                                        <li>
                                            <i className="fas fa-shield-check"></i>
                                            Flexible and secure payment, pay on delivery
                                        </li>
                                        <li>
                                            <i className="fas fa-medal"></i>
                                            600,000 happy customers
                                        </li>
                                    </ul>
                                    <div className="payment-metod">
                                        <p>Guarantee Safe & Secure Checkout</p>
                                        <img src="assets/img/footer/Guarantee-safe.png" alt="img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="single-tab section-padding pb-0">
                        <ul className="nav mb-5" role="tablist">
                            <li className="nav-item" role="presentation">
                                <a href="#description" data-bs-toggle="tab" className="nav-link ps-0 active"
                                    aria-selected="true" role="tab">
                                    <h6>Description</h6>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#additional" data-bs-toggle="tab" className="nav-link" aria-selected="false"
                                    tabIndex={-1} role="tab">
                                    <h6>Additional Information </h6>
                                </a>
                            </li>
                            <li className="nav-item" role="presentation">
                                <a href="#review" data-bs-toggle="tab" className="nav-link" aria-selected="false" tabIndex={-1}
                                    role="tab">
                                    <h6>reviews (1)</h6>
                                </a>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div id="description" className="tab-pane fade show active" role="tabpanel">
                                <div className="description-items">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis erat
                                        interdum, tempor turpis in, sodales ex. In hac habitasse platea dictumst. Etiam
                                        accumsan scelerisque urna, a lobortis velit vehicula ut. Maecenas porttitor dolor a
                                        velit aliquet, et euismod nibh vulputate. Duis nunc velit, lacinia vel risus in,
                                        finibus sodales augue. Aliquam lacinia imperdiet dictum. Etiam tempus finibus
                                        tortor, quis placerat arcu tristique in. Sed vitae dui a diam luctus maximus.
                                        Quisque nec felis dapibus, dapibus enim vitae, vestibulum libero. Aliquam erat
                                        volutpat. Phasellus luctus rhoncus justo. Duis a nulla sit amet justo aliquam
                                        ullamcorper. Phasellus nulla lorem, pretium et libero in, porta auctor dui. In a
                                        ornare purus, et efficitur elit. Etiam consectetur sit amet quam ut tincidunt. Donec
                                        gravida ultricies tellus ac pharetra.
                                        Praesent a pulvinar purus. Proin sollicitudin leo eget mi sagittis aliquam. Donec
                                        sollicitudin ex ac lobortis mollis. Sed eget libero nec mi
                                    </p>
                                    <p className="mt-3">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis erat
                                        interdum, tempor turpis in, sodales ex. In hac habitasse platea dictumst. Etiam
                                        accumsan scelerisque urna, a lobortis velit vehicula ut. Maecenas porttitor dolor a
                                        velit aliquet, et euismod nibh vulputate. Duis nunc velit, lacinia vel risus in,
                                        finibus sodales augue. Aliquam lacinia imperdiet dictum. Etiam tempus finibus
                                        tortor, quis placerat arcu tristique in. Sed vitae dui a diam luctus maximus.
                                        Quisque nec felis dapibus, dapibus enim vitae, vestibulum libero. Aliquam erat
                                        volutpat.
                                    </p>
                                </div>
                            </div>
                            <div id="additional" className="tab-pane fade" role="tabpanel">
                                <div className="table-responsive">
                                    <table className="table table-bordered">
                                        <tbody>
                                            <tr>
                                                <td className="text-1">Stand Up</td>
                                                <td className="text-2">35″L x 24″W x 37-45″H(front to back wheel)</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Folded (w/o wheels)</td>
                                                <td className="text-2">32.5″L x 18.5″W x 16.5″H</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Folded (w/ wheels)</td>
                                                <td className="text-2">32.5″L x 24″W x 18.5″H</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Door Pass Through</td>
                                                <td className="text-2">24</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Frame</td>
                                                <td className="text-2">Aluminum</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Weight (w/o wheels)</td>
                                                <td className="text-2">	
                                                    20 LBS</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Weight Capacity</td>
                                                <td className="text-2">60 LBS</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Width</td>
                                                <td className="text-2">24″</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Handle height (ground to handle)</td>
                                                <td className="text-2">37-45″</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Wheels</td>
                                                <td className="text-2">12″ air / wide track slick tread</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Seat back height</td>
                                                <td className="text-2">21.5″</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Head room (inside canopy)</td>
                                                <td className="text-2">25″</td>
                                            </tr>
                                            <tr>
                                                <td className="text-1">Format</td>
                                                <td className="text-2">	
                                                    Audio cd, Ebook, Hardback, Paperback</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="review" className="tab-pane fade" role="tabpanel">
                                <div className="review-items">
                                    <div className="review-wrap-area d-flex gap-4">
                                        <div className="review-thumb">
                                            <img src="assets/img/shop/comment.jpg" alt="img" />
                                        </div>
                                        <div className="review-content">
                                            <div
                                                className="head-area d-flex flex-wrap gap-2 align-items-center justify-content-between">
                                                <div className="cont">
                                                    <h5><Link href="/news-details">Salman Ahmed</Link></h5>
                                                    <span>February 21, 2024 at 5:37 pm</span>
                                                </div>
                                                <div className="star">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            </div>
                                            <p>
                                                Neque porro est qui dolorem ipsum quia quaed inventor veritatis et quasi
                                                architecto var sed efficitur turpis gilla sed sit amet finibus eros. Lorem
                                                Ipsum is  simply dummy
                                            </p>
                                        </div>
                                    </div>
                                    <div className="review-title mt-5 py-15 mb-30">
                                        <h4>Your Rating*</h4>
                                        <div className="rate-now d-flex align-items-center">
                                            <p>Your Rating*</p>
                                            <div className="star">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="review-form">
                                        <form  id="contact-form" onSubmit={e => e.preventDefault()}>
                                            <div className="row g-4">
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <span>Your Name*</span>
                                                        <input type="text" name="name" id="name" placeholder="Your Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-clt">
                                                        <span>Your Email*</span>
                                                        <input type="text" name="email" id="email" placeholder="Your Email" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".8">
                                                    <div className="form-clt">
                                                        <span>Message*</span>
                                                        <textarea name="message" id="message"
                                                            placeholder="Write Message"></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 wow fadeInUp animated" data-wow-delay=".9">
                                                    <div className="form-check d-flex gap-2 from-customradio">
                                                        <input type="checkbox" className="form-check-input"
                                                            name="flexRadioDefault" id="flexRadioDefault12" />
                                                        <label className="form-check-label" htmlFor="flexRadioDefault12">
                                                            i accept your terms & conditions
                                                        </label>
                                                    </div>
                                                    <button type="submit" className="theme-btn">
                                                        Submit now
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </section>
    </>
  );
};

export default ShopDetailsArea;