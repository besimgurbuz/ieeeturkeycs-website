import React from 'react';
import './Cscon.css'
import img from '../csconP1.jpg'
import img3 from '../csconP3.jpg'

function Cscon(){
    return(
        <section id="cscon">
            <div className="container">
                <div className="row r-content">
                    <div className="col text-center">
                        <h2>CSCON</h2>
                        <h3>Top International Student Congress of Turkey!</h3>
                    </div>
                </div>
                <div className="row r-content">
                    <div className="col-lg-6 text-right img1">
                        <img src={img} width="500" className="csconIMG"/>
                    </div>
                    <div className="col-lg-6 cscon-text">
                        <p>IEEE Turkey Computer Society Congress - CSCON is arranged for the purpose of giving information about the informatics and software sector to the students who show interest to this segment, contributing their career developments and improving them technically with the trainings that are diversified according to the students' choice in the sector.</p>
                        <p>CSCON, which is organized annually as an international event takes three days, conferences are held on the first day and tranings held on second and thirth day. 5000 people for conference, 3500 people capacity for technical training was created. When appropriate, the training quota can be increased to 5000-7000 people. More than 20 technical training will be selected from popular computer science and engineering.</p>
                    </div>
                </div>
                <div className="row r-content">
                    <div className="col-lg-6 text-right cscon-text">
                        <p>Anyone who wants can participate CSCON. All you need to do is fill out the 1. Registration form. Then a confirmation mail will be sent to you. Registration for CSCON <a target="_blank" href="http://cscon.ieeeturkeycs.org">visit the offical website.</a></p>
                        <p>The planned workshops for CSCON: Artificial Intelligence, Machine Learning, Deep Learning, Data Mining, Big Data and Hadoop, Reverse Engineering, Web Development with PHP, Introduction to Linux, Introduction to Arduino, Introduction to Android, IOS APP Development, Unity, Cryptology, IBM Technologies, Microsoft Technologies, Python 1, Python 2, Internet of Things, Robotics, Cyber Security, Ethical Hacker, Front End, Embedded Systems...etc.</p>
                    </div>
                    <div className="col-lg-6 img1">
                        <img src={img3} width="500" className="csconIMG"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Cscon;