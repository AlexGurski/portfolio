import React,{useEffect} from "react";
import "../style/homepage-style.css"
import { BsChevronDown } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage">
            <div className="homepage_header">
                <div className="homepage_header_text">
                     Alex Gurski
                </div>
                <div className="menu-wrap">
                    <input type="checkbox" className="toggler"/>
                    <div className="hamburger"><div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><a href="#">Home</a></li>
                                    <li><a href="#">About Us</a></li>
                                    <li><a href="#">Merch</a></li>
                                    <li><a href="#">Contact</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="homepage_middle">
                <div className="homepage__middle">
                    <span data-aos="flip-up" data-aos-duration="3000">Programming</span> 
                    <span data-aos="flip-up" data-aos-duration="2000"  data-aos-delay="1000">is not a</span> 
                    <span data-aos="flip-up" data-aos-duration="2000"  data-aos-delay="1750">science </span>
                    <span data-aos="flip-up" data-aos-duration="2000"  data-aos-delay="2500">but a craft</span>
                    <p data-aos="flip-up" data-aos-duration="2500"  data-aos-delay="3000">
                        Get ready to turn your <i style={{fontFamily:'DearLove', fontWeight:300}}>ideas</i> into <i style={{fontFamily:'DearLove', fontWeight:300}}>reality</i>
                    </p>
                </div>
            </div>
            <div className="homepage_footer">
                <div className="homepage_footer__item">
                    <BsChevronDown fontSize={'17px'} />
                </div>
            </div>
            
        </div>
    ) 
}
export default Homepage