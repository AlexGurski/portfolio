import React,{useEffect, useState} from "react";
import "../style/about.css"
import {SiVk, SiTelegram, SiLinkedin, SiInstagram, SiMaildotru} from 'react-icons/si'

export const Contacts = () => {
    const [mail,setMail] = useState({opacity:0})
    const [vk,setVk] = useState({opacity:0})
    const [tele,setTele] = useState({opacity:0})
    const [linked,setLinked] = useState({opacity:0})
    const [inst,setInst] = useState({opacity:0})

    return (
    <div className="about_about" id='contacts'>
         <div className="about_container about_contacts" >
         <div className="about__contacts">
                <div><SiVk onClick={()=>setVk({opacity:1})}/><a href='https://vk.com/id54471278'target='_blank' style={vk}>id54471278</a></div>
                <div><SiTelegram onClick={()=>setTele({opacity:1})}/><a href='https://t.me/+375298209524'target='_blank' style={tele}>@alexgurski</a></div>
                <div><SiLinkedin onClick={()=>setLinked({opacity:1})}/><a href='http://www.linkedin.com/in/alexandr-gurski-b2ab21195/'target='_blank' style={linked}>alexandr-gurski-b2ab21195</a></div>
                <div><SiInstagram onClick={()=>setInst({opacity:1})}/><a  href='https://www.instagram.com/alex7gurski' target='_blank' style={inst}>@alex7gurski</a></div>
                <div><SiMaildotru onClick={()=>setMail({opacity:1})}/><a  href="https://mailto:etosolo322@yandex.ru" target='_blank' style={mail}>etosolo322@yandex.ru</a></div>
            </div>
        </div>
    </div>
    )
    
}
