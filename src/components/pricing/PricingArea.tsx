
import Link from 'next/link';
import React from 'react';

const PricingArea = () => {
  return (
    <>
       <section className="pricing-section section-padding pt-0 fix">
            <div className="container">
                <div className="section-title text-center">
                    <h6>Pricing Package</h6>
                    <h2>
                        Flexible Pricing for Learner
                    </h2>
                </div>
                <div className="d-flex justify-content-center mt-3 mt-md-0">
                    <div className="pricing-two__tab">
                        <nav>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="pt-1-tab" data-bs-toggle="tab"
                                    data-bs-target="#pt-1" type="button" role="tab" aria-controls="pt-1"
                                    aria-selected="true">Monthly</button>
                                <button className="nav-link" id="pt-2-tab" data-bs-toggle="tab" data-bs-target="#pt-2"
                                    type="button" role="tab" aria-controls="pt-2"
                                    aria-selected="false">Yearly</button>

                            </div>
                        </nav>
                    </div>
                </div>
                <div className="pricing__tab-content">
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="pt-1" role="tabpanel" aria-labelledby="pt-1-tab">
                            <div className="pricing-package-wrapper">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Undergraduate</h5>
                                                <h2>$175.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items style-2">
                                            <Link href="/pricing" className="post-btn">popular</Link>
                                            <div className="pricing-header">
                                                <h5>Graduate Programs</h5>
                                                <h2>$280.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Online Programs</h5>
                                                <h2>$530.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="pt-2" role="tabpanel" aria-labelledby="pt-2-tab">
                            <div className="pricing-package-wrapper">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Undergraduate</h5>
                                                <h2>$275.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items style-2">
                                            <Link href="/pricing" className="post-btn">popular</Link>
                                            <div className="pricing-header">
                                                <h5>Graduate Programs</h5>
                                                <h2>$380.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xl-4 col-lg-6 col-md-6">
                                        <div className="pricing-card-items">
                                            <div className="pricing-header">
                                                <h5>Online Programs</h5>
                                                <h2>$730.00</h2>
                                                <span>per monthly</span>
                                            </div>
                                            <p>
                                                Includes All Standard Plan features, personalized financial guidance.
                                            </p>
                                            <div className="pricing-btn">
                                                <Link href="/pricing" className="theme-btn green-btn">
                                                    Choose Plan
                                                </Link>
                                            </div>
                                            <ul className="pricing-list">
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Individual Course
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Course Learning Checks
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Offline Learning 
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    High Resolution Videos
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    24/7 Dedicated Support
                                                </li>
                                                <li>
                                                    <i className="flaticon-check-mark"></i>
                                                    Interactive practice sessions
                                                </li>
                                            </ul>
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

export default PricingArea;