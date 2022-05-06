import React,{useEffect} from "react";
import "./style/homepage.css"
import HomepageHeader from './container/homepageHeader'
import HomepageResume from './container//homepageResume'
import HomepageAbout from './container/homepageAbout'
import HomepageContacts from './container/homepageContacts'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Homepage = () => {
    useEffect(()=>{
        AOS.init();
        window.scrollTo(0, 1);
    },[])
    
    return (
       <>
        <HomepageHeader/>
        <HomepageResume/>
        <HomepageAbout/> 
        <HomepageContacts/>
       </>
    ) 
}
export default Homepage