import React,{useEffect} from "react";
import "../style/homepageResume.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram, SiMaildotru} from 'react-icons/si'


const HomepageContacts = () => {


    return (
        <div className="homepage_contacts">
            <div className="homepage__contacts">
                <div><a href='https://vk.com/id54471278'target='_blank'><SiVk/></a></div>
                <div><a href='https://t.me/+375298209524'target='_blank'><SiTelegram/></a></div>
                <div><a href='http://www.linkedin.com/in/alexandr-gurski-b2ab21195/'target='_blank'> <SiLinkedin/></a></div>
                <div><a href='https://www.instagram.com/alex7gurski' target='_blank'><SiInstagram/></a></div>
                <div><a href="https://mailto:etosolo322@yandex.ru" target='_blank'><SiMaildotru/></a></div>
            </div>
        </div>
        
    ) 
}
export default HomepageContacts