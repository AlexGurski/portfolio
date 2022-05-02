import React,{useEffect, useState} from "react";
import "../style/about.css"
import {MyStory} from "../container/about/about";
import AboutHeader from "../container/about/header";




const AboutMe = () => {
return (
    <>
        <AboutHeader/>
        <MyStory/>
    </>
)
       

}
export default AboutMe