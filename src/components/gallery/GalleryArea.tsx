
import Link from 'next/link';
import React from 'react';

const GalleryArea = () => {
  return (
    <>
       <section className="gallery-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6>Photo Gallery</h6>
                    <h2>
                        Explore Our Photo Gallery
                    </h2>
                </div>
                <ul className="nav">
                    <li className="nav-item wow fadeInUp" data-wow-delay=".2s">
                        <a href="#All" data-bs-toggle="tab" className="nav-link active">
                            All Courses 
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".4s">
                        <a href="#Design" data-bs-toggle="tab" className="nav-link">
                            Design
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".6s">
                        <a href="#Business" data-bs-toggle="tab" className="nav-link">
                            Business
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".8s">
                        <a href="#Marketing" data-bs-toggle="tab" className="nav-link">
                            Marketing
                        </a>
                    </li>
                    <li className="nav-item wow fadeInUp" data-wow-delay=".9s">
                        <a href="#University" data-bs-toggle="tab" className="nav-link">
                            University
                        </a>
                    </li>
                </ul>
                <div className="tab-content">
                    <div id="All" className="tab-pane fade show active">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/01.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>1. University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/02.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/03.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/04.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/05.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/06.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/07.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/08.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/09.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Design" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/01.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>2. University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/02.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/03.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/04.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/05.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/06.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/07.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/08.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/09.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Business" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/01.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>3. University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/02.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/03.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/04.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/05.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/06.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/07.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/08.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/09.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="Marketing" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/01.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>4. University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/02.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/03.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/04.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/05.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/06.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/07.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/08.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/09.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="University" className="tab-pane fade">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/01.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>5. University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/02.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/03.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/04.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/05.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/06.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/07.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/08.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="portfolio-item">
                                    <div className="portfoio-thumb">
                                        <img src="assets/img/gallery/09.jpg" alt="img" />
                                        <div className="portfolio-arrow">
                                            <Link href="/gallery"><i className="fas fa-long-arrow-alt-right"></i></Link>
                                        </div>
                                        <div className="portfolio-text">
                                            <h3>University Student Write <br />
                                                on the exam Paper</h3>
                                            <p>Student _ Gallery</p>
                                        </div>
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

export default GalleryArea;