import React from 'react';
import './About.css';
import chairPhoto from '../assets/fatih-ugurdag.jpg';
import represPhoto from '../assets/halil-korkmaz.jpg';


function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 text-center">
            <img className="about-photo" src={chairPhoto} alt="chair"/>
            <h3>Chair</h3>
            <h5>Hasan Fatih Uğurdağ</h5>
          </div>
          <div className="col-lg-6 text-center">
            <img className="about-photo" src={represPhoto} alt="student-representative" width="400"/>
            <h4>Student Representative</h4>
            <h5>Halil İbrahim Korkmaz</h5>
          </div>
        </div>
      </div>
    </section>
  )
}
export default About;