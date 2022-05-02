import React,{useEffect} from "react";
import "../style/about.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram, SiMaildotru} from 'react-icons/si'

export const Contacts = () => {
    return (
    <div className="about_about" id='contacts'>
         <div className="about_container about_contacts" >
         <div className="homepage__contacts">
                <div><SiVk/></div>
                <div><SiTelegram/></div>
                <div><SiLinkedin/></div>
                <div><SiInstagram/></div>
                <div><SiMaildotru/></div>
                
            </div>
        </div>
    </div>
    )
    
}
