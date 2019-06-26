import React from 'react';
import './MadC.css'
import Game from '../components/Game'
class MadC extends React.Component{ 
    render(){
        return (
          <div>
            <section id="madc">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5">
                        <div className="phone">
                            <div className="phone-shade"></div>
                            <div className="phone-speaker"></div>
                            <div className="phone-screen">
                              <div className="phone-header">
                                <div className="phone-menu"></div>
                              </div>
                                <h5 className="text-center" style={{marginTop:"18px",fontSize:"22px",fontFamily:"'Oswald', sans-serif"}}>Tic Tac Toe!</h5>
                                <Game/>
                                <p className="text-center" style={{fontSize:"14px",fontStyle:"italic"}}>A little inspiration for the competition</p>
                            </div>
                            <div className="phone-button"></div>
                        </div>                  
                  </div>
                  <div className="col-lg-7 madc-text">
                    <h2>Mobile Application Development Contest</h2> <br/>
                    <p>MadC is a mobile application competition organized by IEEE Computer Society every year. The main theme of the competition is mobile application ideas in the field of science, technology and education. Anyone with a bachelor's, master's or doctorate degree can participate in the competition.</p>
                    <p>You must create a team of at least 1 and a maximum of 3 persons to apply for the competition.The teams write down the mobile application ideas in detail. The ideas that can pass from the pre-elimination to the next stage will be transformed into code by the teams and will continue the competition. The top 3 teams at the end of the competition meet with their awards! For more informations and participation <a target="_blank" href="https://ieeemadc.org/">visit the offical MadC website.</a></p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        );
    }
}


export default MadC