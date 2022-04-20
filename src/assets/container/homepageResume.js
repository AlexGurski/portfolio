import React,{useEffect} from "react";
import "../style/style.css"
import { BsChevronDown } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomepageHeader = () => {
    return (
        <div id="resume" className="homepage_resume">
            <div class="lines">
                <div class="line"></div>
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
                                            <h3 style={{color:'orange',letterSpacing:'1px'}}>Alexandr</h3>
                                            <h2 style={{letterSpacing:'1.5px'}}>Gurski</h2>
                                            <h4 style={{letterSpacing:'2px'}}>Web developer</h4>
                                        </div>
                                        <div className="reume__contacts">
                                            телефон
                                        </div>
                                    </div>
                                    <div className="resume_profile">
                                        <h3>PROFILE</h3>
                                    </div>
                                </div>
                                <div className="resume_header_right">

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