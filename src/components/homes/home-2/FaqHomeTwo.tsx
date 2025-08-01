
import React from 'react';

const FaqHomeTwo = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-0">
            <div className="container">
                <div className="faq-wrapper">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-image-items">
                                <div className="row g-4 align-items-center">
                                    <div className="col-md-6 d-none d-md-block">
                                        <div className="faq-image wow img-custom-anim-left">
                                            <img src="assets/img/faq/01.jpg" alt="img" />
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="faq-image style-2 d-none d-md-block wow img-custom-anim-top" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                            <img src="assets/img/faq/02.jpg" alt="img" />
                                        </div>
                                        <div className="faq-image wow img-custom-anim-bottom" data-wow-duration="1.5s" data-wow-delay="0.5s">
                                            <img src="assets/img/faq/03.jpg" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title">
                                    <h6 className="wow fadeInUp">
                                        Question & Answer
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Asked Questions?
                                    </h2>
                                </div>
                                <div className="faq-items mb-0 mt-4 mt-md-0">
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".2s">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    What programs does the university ?
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show"
                                                aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        We offer a wide range of undergraduate, graduate, and professional programs across various fields, including, sciences, business, engineering.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".4s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    How do I apply for admission?
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                                                data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        We offer a wide range of undergraduate, graduate, and professional programs across various fields, including, sciences, business, engineering.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item wow fadeInUp" data-wow-delay=".6s">
                                            <h2 className="accordion-header" id="headingthree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsethree" aria-expanded="false"
                                                    aria-controls="collapsethree">
                                                    What is the student-to-faculty ratio?
                                                </button>
                                            </h2>
                                            <div id="collapsethree" className="accordion-collapse collapse"
                                                aria-labelledby="headingthree" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        We offer a wide range of undergraduate, graduate, and professional programs across various fields, including, sciences, business, engineering.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item mb-0 wow fadeInUp" data-wow-delay=".8s">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                                    data-bs-target="#collapsefour" aria-expanded="false"
                                                    aria-controls="collapsefour">
                                                    What is the student-to-faculty ratio?
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse"
                                                aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p>
                                                        We offer a wide range of undergraduate, graduate, and professional programs across various fields, including, sciences, business, engineering.
                                                    </p>
                                                </div>
                                            </div>
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

export default FaqHomeTwo;