import React,{useEffect} from "react";
import "../style/about.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram, SiMaildotru} from 'react-icons/si'

export const Contacts = () => {
    return (
    <div className="about_about" id='contacts'>
         <div className="about_container about_contacts" >
         <div className="about__contacts">
                <div><SiVk/><span>id54471278</span></div>
                <div><SiTelegram/><span>@alexgurski</span></div>
                <div><SiLinkedin/><span>alexandr-gurski-b2ab21195</span></div>
                <div><SiInstagram/><span>@alex7gurski</span></div>
                <div><SiMaildotru/><span>etosolo322@yandex.ru</span></div>
                
            </div>
        </div>
    </div>
    )
    
}
