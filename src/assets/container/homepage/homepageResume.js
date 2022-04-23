import React from "react";
import "../../style/style.css"
import 'aos/dist/aos.css';

const HomepageHeader = () => {
    return (
        <div id="resume" className="homepage_resume">
            <div class="lines">
                <div class="line"></div>
                <div class="line"></div>             
            </div>
            <div className="resume_container"> 
                <div className="resume_main">
                    <div className="resume_item">
                        <div className="resume_header">
                            <div className="resume__header">
                                <div className="resume_header_left">
                                    <div className="resume_name">
                                        <div className="resume__name">
                                            <h3 style={{fontSize:'24px', color:'#f9e232',letterSpacing:'1px'}}>Alexandr</h3>
                                            <h2 style={{fontSize:'36px', letterSpacing:'1.5px'}}>Gurski</h2>
                                            <h4 style={{letterSpacing:'2px'}}>Web developer</h4>
                                        </div>
                                        <div className="reume__contacts">
                                            телефон
                                        </div>
                                    </div>
                                    <div className="resume_profile">
                                        <h3 style={{paddingBottom:'3%'}}>PROFILE</h3>
                                        <h5>My name is Alexandr, I was born and live in Baranovichy. Has begin to study programming since 2009 uear when has arrived in college.</h5>
                                        <h5>But us were seperated by army in 2014 year. It has delayed me for 8 years</h5>
                                        <h5>In 2022 I have decide to come back to origin and to become the developer.</h5>
                                    </div>
                                </div>
                                <div className="resume_header_right">
                                    <div class="resume_photo">
                                        <img style={{width:'100%'}}src={require('../../image/photo.jpg')}/>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="resume_middle">
                            <div className="resume_education">
                                <h3>EDUCATION</h3>
                                <div>
                                    <div className="resume_place">
                                        <h4>BARANOVICHY STATE UNIVERSITY</h4>
                                        <h5>2014-2019</h5>
                                    </div>
                                    <p className="resume_text">
                                        Учился на чиле, на расслабоне. Пивасик попивал
                                    </p>
                                </div>
                                <div>
                                    <div className="resume_place">
                                        <h4>BARANOVICHY STATE COLLEGE OF LIGHT INDUSTRY</h4>
                                        <h5>2009-2013</h5>
                                    </div>
                                    <p className="resume_text">
                                        Получал зания
                                    </p>
                                </div>
                            </div>
                            <div className="resume_expiriense">
                                <h3>EXPERIENSE</h3>
                                <div>
                                    <div className="resume_place">
                                        <h4>ARMY</h4>
                                        <h5>2014-present</h5>
                                    </div>
                                    <p className="resume_text">
                                        Чилю, деградирую
                                    </p>
                                </div>
                                <div>
                                    <div className="resume_place">
                                        <h4>GYMNAZY №1 OF BARANOVICHY</h4>
                                        <h5>2013-2014</h5>
                                    </div>
                                    <p className="resume_text">
                                        Чилил, деградировал
                                    </p>
                                </div>
                            </div> 
                        </div>
                        <div className="resume_footer">
                            <div className="resume_reference">
                               <span className="resume__reference">REFERENCE</span> 
                               <h5 style={{paddingTop:'1vw'}}>Alexandr Syrokvash</h5>
                               <h6>BarSU fellow</h6>
                            </div>
                            <div className="resume_skills">
                                <span>SKILLS</span>
                                <div className="resume__skills" >
                                    <h5>#React</h5>
                                    <h5>#HTML</h5>
                                    <h5>#CSS</h5>
                                    <h5>#JavaScript</h5>
                                    <h5>#NoSQL</h5>
                                    <h5>#Node.js</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) 
}
export default HomepageHeader