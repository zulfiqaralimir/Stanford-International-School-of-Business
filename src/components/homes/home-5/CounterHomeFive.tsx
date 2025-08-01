
import Count from '@/common/Count';
import React from 'react';

const CounterHomeFive = () => {
  return (
    <>
      <div className="counter-section-22 section-padding pt-0">
            <div className="container custom-container">
                <div className="counter-wrapper-2 bg-cover" style={{background: `url(/assets/img/counter-bg-2.jpg)`}}>

                    <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
                        <div className="icon">
                            <i className="flaticon-success"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="48.5"> <Count number={48} text='.5k'  /> </span></h2>
                            <p>Student Enrolled</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
                        <div className="icon">
                            <i className="flaticon-medal"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="100"> <Count number={100} text='+'  /> </span></h2>
                            <p>Awards Winning</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
                        <div className="icon">
                            <i className="flaticon-satisfaction"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="99"> <Count number={99} text='%'  /> </span></h2>
                            <p>Satisfaction Rate</p>
                        </div>
                    </div>
                    <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
                        <div className="icon">
                            <i className="flaticon-instructor"></i>
                        </div>
                        <div className="content">
                            <h2><span className="odometer" data-count="250"> <Count number={250} text='+'  /> </span></h2>
                            <p>Instructors</p>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>
  );
};

export default CounterHomeFive;