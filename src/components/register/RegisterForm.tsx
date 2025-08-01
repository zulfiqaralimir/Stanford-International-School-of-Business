"use client"
import React from 'react';

const RegisterForm = () => {
  return (
    <>
       <section className="sign-in-section section-padding fix">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8">
                        <div className="sign-in-items">
                            <div className="title text-center">
                                <h2>Create An Account</h2>
                            </div>
                            <form onSubmit={e => e.preventDefault()} id="contact-form">
                                <div className="row g-4">
                                    <div className="col-lg-12">
                                        <div className="form-clt style-2">
                                            <span>First Name *</span>
                                            <input type="text" name="name" id="name" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <span>Last Name *</span>
                                            <input type="text" name="name" id="name12" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <span>Email Address *</span>
                                            <input type="text" name="email" id="email3" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <span>Create Password *</span>
                                            <input id="password" type="password" placeholder="Password" />
                                            <div className="icon">
                                                <i className="far fa-eye-slash"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-clt">
                                            <span>Confirm Password *</span>
                                            <input id="confirm-password" type="password" placeholder="Password" />
                                            <div className="icon">
                                                <i className="far fa-eye-slash"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="from-cheak-items style-2">
                                            <div className="form-check d-flex gap-2 from-customradio">
                                                <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                    Remember Me
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <button type="submit" className="theme-btn">
                                            Sign Up
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

export default RegisterForm;