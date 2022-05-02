import React,{useEffect} from "react";
import "../style/homepageResume.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram, SiMaildotru} from 'react-icons/si'

import AOS from 'aos';
import 'aos/dist/aos.css';



const HomepageContacts = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_contacts">
           <div className="homepage__contacts">
            <div><SiVk/></div>
            <div><SiTelegram/></div>
            <div><SiLinkedin/></div>
            <div><SiInstagram/></div>
            <div><SiMaildotru/></div>
           </div>
        </div>
    ) 
}
export default HomepageContacts