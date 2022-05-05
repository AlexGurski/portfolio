import React from "react";
import "../style/homepageResume.css"
import {SiCss3, SiHtml5, SiJavascript, SiReact, SiNodedotjs} from 'react-icons/si'
import {RiReactjsFill} from 'react-icons/ri'
const HomepageResume = () => {
    return (
        <div id="resume" className="homepage_resume">
            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>             
            </div>
            <div className="resume_container"> 
                   <h1>I'm <span>Alexandr Gurski</span></h1>
                   <h2>A web developer at the beginning of his journey</h2>
                   <div className="resume_study" >
                       <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">EDUCATION</h1>
                       <div className="resume_education" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                        <h2>BARANOVICHY STATE UNIVERSITY <span>(2013-2019)</span></h2>
                        <h3>Information Technologies</h3>
                       <p></p>
                       </div>
                       <div className="resume_education" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100">
                        <h2>BARANOVICHI STATE COLLEGE OF LIGHT INDUSTRY <span>(2009-2013)</span></h2>
                        <h3>Information Technology software</h3>
                       </div>
                   </div>
                   <div className="resume_study" >
                       <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">EXPIRIENSE</h1>
                       <div className="resume_education" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1000">
                        <h2>ARMY REPUBLIC OF BELARUS <span>(2014-present)</span></h2>
                        <h3>Military</h3>
                        <h4>Immediately there was compulsory military service. At the end of it, there was a difficult economic situation in the country, besides, I had no more knowledge and I stayed on the contract. After some time, I went for a promotion and at the moment I work at the headquarters, where I improve my skills in MS Word and EXCEL</h4>
                       <p></p>
                       </div>
                       <div className="resume_education" data-aos="fade-down" data-aos-easing="linear" data-aos-duration="1100">
                        <h2>GYMNASIUM №1 OF BARANOVICHY <span>(2013-2014)</span></h2>
                        <h3>Engineer-programmer</h3>
                        <h4>Distribution work. My responsibilities included keeping all the equipment in working order, as well as software support. Stopped working because of conscription</h4>
                       </div>
                   </div>
                   <div className="resume_study resume_skills" >
                       <h1 data-aos="fade-down" data-aos-easing="linear" data-aos-duration="700">SKILLS</h1>
                       <div className="skills_type" data-aos="fade-right" data-aos-easing="linear" data-aos-duration="1000">
                           <div data-aos="zoom-in"  data-aos-duration="1000"><SiHtml5/>HTML</div>
                           <div data-aos="zoom-in"   data-aos-duration="1000"><SiCss3/>CSS</div>
                           <div data-aos="zoom-in"   data-aos-duration="1000"><SiJavascript/>JavaScript</div>
                           <div data-aos="zoom-in"   data-aos-duration="1000"><SiReact/>React</div>
                           <div data-aos="zoom-in"   data-aos-duration="1000"><SiNodedotjs/>NodeJS</div>
                           <div data-aos="zoom-in"   data-aos-duration="1000"><RiReactjsFill/>ReactNative</div>
                       </div>
                   </div>
                       
            </div>
           
        </div>
    ) 
}
export default HomepageResume