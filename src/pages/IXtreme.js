import React from 'react';
import './IXtreme.css';
class IXtreme extends React.Component {
    render(){
        return(
            <section id="ixtreme">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 text-right">
                            <h2>IEEEXtreme</h2>
                            <p>IEEEXtreme is IEEE’s premier programming competition, bringing thousands of students from around the world together into a 24 hour event. IEEEXtreme is open to all undergraduate and graduate college students who are interested in becoming IEEE student members. The competition is hosted virtually and simultaneously around the world, and competitors are required to be proctored by a local IEEE member and are often supported by a local IEEE Student Branch</p>
                            <p> IEEEXtreme always aims to be a welcoming and international community; we are open to any college student that wishes to join IEEE and compete. No matter their level of expertise, location, or university affiliation.</p>
                            <p>Want to know what IEEEXtreme looks like and <a id="csalink" target="_blank" href="https://csacademy.com/ieeextreme-practice/tasks/">solve some examples?</a></p>
                        </div>
                        <div className="col-lg-6" style={{paddingTop:"40px"}} id="windowT">
                            <div className="fakeMenu">
                                <div className="fakeButtons fakeClose" />
                                <div className="fakeButtons fakeMinimize" />
                                <div className="fakeButtons fakeZoom" />
                            </div>
                            <div className="fakeScreen">
                                <p className="line1 w-p">[&nbsp;“Get ready for IEEEXtreme!”,<span className="cursor1">_</span></p>
                                <p className="line2 w-p">&nbsp;&nbsp;“Challange yourself!”,<span className="cursor2">_</span></p>
                                <p className="line3 w-p">&nbsp;&nbsp;“Improve!”&nbsp;]<span className="cursor3">_</span></p>
                                <p className="line4 w-p">&gt;<span className="cursor4">_</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default IXtreme;