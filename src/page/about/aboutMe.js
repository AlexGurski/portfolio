import React,{useEffect, useState} from "react";
import "./style/about.css"
import {MyStory} from "./container/about";
import {MyWork} from "./container/work";
import { Contacts } from "./container/contacts";
import AboutHeader from "./container/header";
import { Sugar } from 'react-preloaders2';
const AboutMe = () => {
    const [loading,setLoading] = useState(true)
    useEffect(()=>{
        window.scrollTo(0, 1);
        setTimeout(() => {
            setLoading(false)
        }, 800);
    },[])
return (
    <>  
        <AboutHeader/>
        <MyStory/>
        <MyWork/>
        <Contacts/>
    </>
)
}
export default AboutMe