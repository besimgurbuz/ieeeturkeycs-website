import React from 'react'
import './Landing.css'
import photo from '../assets/landing2.jpg';
function Landing() {
  return (
    <div>
        <section id="main">
          <div className="container">
            <div className="landing">
              <div className="row justify-content-end">
                <div className="col-md-8 text-right">
                  <h1 style={{fontSize: '27px', marginBottom: '8%'}}>
                    Welcome to Turkey's largest technical student community!
                  </h1>
                </div>
              </div>
              <div className="row justify-content-end">
                <div className="col-md-8 text-right">
                  <h1 style={{fontSize: '42px'}}>IEEE Turkey Computer Society</h1>
                </div>
              </div>
              <div className="row align-items-end">
                <div className="col text-center" style={{marginTop: '20%'}}>
                  <a href="#about-us"><i className="arrow down-arrow" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="about-us">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 text-center">
                <h2 className="text-center" id="who-we">Who We Are?</h2>
                <p>We have been operating as IEEE Turkey Computer Society since March 27, 1991. Every year, we regularly provide CSCON, IEEE Turkey Xtreme Camp, Computer Society Camp and student branchs with technical support.</p>
                <p>IEEE Turkey Computer Society participates in MadC, IEEEXtreme and similar competitions organized globally every year.</p>
                <p>We also announce all the events organized by the Computer Society in Turkey. Don't forget to follow us to avoid these events. Contact us for any questions or comments.</p>
              </div>
              <div className="col-lg-6 text-center">
                <img id="lanPht" src={photo} width="100%" height="100%" style={{borderRadius:"10px",marginTop:"20px"}} />
              </div>
            </div>
          </div>
        </section>
      </div>
  )
}
export default Landing;
