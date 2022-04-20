import React,{useEffect} from "react";
import "../style/style.css"
import {Link} from 'react-scroll'
import { BsChevronDown } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomepageHeader = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage">
            <div className="homepage_header">
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
                <Link to="resume" duration={2000} spy={true} smooth={true} className="homepage_footer__item">
                    <BsChevronDown fontSize={'17px'} />
                </Link>
            </div>
           
        </div>
    ) 
}
export default HomepageHeader