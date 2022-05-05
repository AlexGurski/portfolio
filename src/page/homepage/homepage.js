import React,{useEffect} from "react";
import "./style/homepage.css"
import HomepageHeader from './container/homepageHeader'
import HomepageResume from './container//homepageResume'
import HomepageAbout from './container/homepageAbout'
import HomepageContacts from './container/homepageContacts'
const Homepage = () => {

    useEffect(()=>{
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