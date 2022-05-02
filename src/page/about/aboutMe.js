import React from "react";
import "./style/about.css"
import {MyStory} from "./container/about";
import {MyWork} from "./container/work";
import AboutHeader from "./container/header";

const AboutMe = () => {
return (
    <>  
        <AboutHeader/>
        <MyStory/>
        <MyWork/>
    </>
)
}
export default AboutMe