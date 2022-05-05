import React,{useEffect} from "react";
import "./style/about.css"
import {MyStory} from "./container/about";
import {MyWork} from "./container/work";
import { Contacts } from "./container/contacts";
import AboutHeader from "./container/header";

const AboutMe = () => {
    useEffect(()=>{
        window.scrollTo(0, 1);
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