import React,{useEffect} from "react";
import "../../style/style.css"
import Carousel from 'nuka-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  {ParkAvenju}  from "./mySites/parkAvenju";

const HomepageAbout = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_about">
            <h1 className="typing flux">MY PROJECTS </h1>
            <h4 class="typing-demo">I'm at the beginning of my journey, because it's so dreary here</h4>
            <Carousel wrapAround={true} speed={1000} style={{width:'99vw'}}>
                
                <ParkAvenju/>
                
                <div className="mySite_container">dfh df gfdvbcbcvb  y54y4554 445 </div>
                <div className="mySite_container">6456 456456 456hgdfgdt 546hdfg d</div>
            </Carousel>
        </div>
    ) 
}
export default HomepageAbout