import React,{useEffect} from "react";
import "../../style/style.css"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import AOS from 'aos';
import 'aos/dist/aos.css';
import  {ParkAvenju}  from "./mySites/parkAvenju";

const HomepageAbout = () => {
    useEffect(()=>{
      AOS.init();
    },[])

    return (
        <div className="homepage_about" id="homepage_about">
            <h1 className="typing flux">MY PROJECTS </h1>
            <h4 class="typing-demo">I'm at the beginning of my journey, because it's so dreary here</h4>
            <Carousel 
                style={{height:'500px'}}showArrows={true} autoFocus={true} autoPlay swipeable={true} 
                emulateTouch={true} infiniteLoop width={'95vw'} stopOnHover={true} showThumbs={false}
                transitionTime={'1200' }dynamicHeight={false} interval={'3500'}
            >  
                <ParkAvenju/>
                <ParkAvenju/>
                <ParkAvenju/>
            </Carousel>
        </div>
    ) 
}
export default HomepageAbout