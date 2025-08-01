
import React from 'react';

const FaqHomeThree = () => {
  return (
    <>
      <section className="faq-section fix section-padding pt-0">
            <div className="container">
                <div className="faq-wrapper style-2">
                    <div className="row g-4 align-items-center">
                        <div className="col-lg-6">
                            <div className="faq-content">
                                <div className="section-title color-red">
                                    <h6 className="wow fadeInUp">
                                        Asked Questions
                                    </h6>
                                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                                        Frequently Asked
                                        Questions   
                                    </h2>
                                </div>
                                <div className="faq-items mt-4 mt-md-0 mb-0">
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
                        <div className="col-lg-6">
                           <div className="faq-image-2">
                                <img src="assets/img/faq/01.png" alt="img" className="wow img-custom-anim-left" />
                                <div className="bg-shape">
                                    <img src="assets/img/faq/bg-shape.png" alt="img" />
                                </div>
                                <div className="quote-shape float-bob-x">
                                    <img src="assets/img/faq/quote-shape.png" alt="img" />
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

export default FaqHomeThree;