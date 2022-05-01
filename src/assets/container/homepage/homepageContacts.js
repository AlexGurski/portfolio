import React,{useEffect} from "react";
import "../../style/style.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram} from 'react-icons/si'

import AOS from 'aos';
import 'aos/dist/aos.css';



const HomepageContacts = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_contacts">
           <SiVk/>
           <SiTelegram/>
           <SiLinkedin/>
           <SiInstagram/>
        </div>
    ) 
}
export default HomepageContacts