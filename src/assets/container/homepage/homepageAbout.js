import React,{useEffect} from "react";
import "../../style/style.css"
import Carousel from 'nuka-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomepageAbout = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_about">
            <h1 className="typing">My pojects</h1>
            <Carousel wrapAround={true} cellSpacing={20} speed={1000}>
                <div className="bzsp">dfdhdf dfhd fhdf dhd </div>
                <div className="bzsp">dfh df gfdvbcbcvb  y54y4554 445 </div>
                <div className="bzsp">6456 456456 456hgdfgdt 546hdfg d</div>
            </Carousel>
        </div>
    ) 
}
export default HomepageAbout