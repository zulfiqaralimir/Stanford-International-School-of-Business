"use client"
import React from 'react';

const SignInForm = () => {
  return (
    <>
       <section className="sign-in-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="sign-in-items">
                            <div className="title text-center">
                                <h2 className="wow fadeInUp">Sign In to your Account</h2>
                            </div>
                            <form onSubmit={e => e.preventDefault()} id="contact-form" method="POST">
                                <div className="row g-4">
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".2s">
                                        <div className="form-clt style-2">
                                            <span>Username *</span>
                                            <input type="text" name="name" id="name" placeholder="Username" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12 wow fadeInUp" data-wow-delay=".4s">
                                        <div className="form-clt">
                                            <span>Password *</span>
                                            <input id="password" type="password" placeholder="Password" />
                                            <div className="icon">
                                                <i className="far fa-eye-slash"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="from-cheak-items">
                                            <div className="form-check d-flex gap-2 from-customradio">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Remember Me
                                                </label>
                                            </div>
                                            <span>Forgot Password?</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 wow fadeInUp" data-wow-delay=".4s">
                                        <button type="submit" className="theme-btn">
                                            Sign In
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default SignInForm;