import React,{useEffect} from "react";
import "../style/style.css"
import HomepageHeader from '../container/homepageHeader'
import HomepageResume from '../container/homepageResume'


const Homepage = () => {


    return (
       <>
        <HomepageHeader/>
        <HomepageResume/>
       </>
    ) 
}
export default Homepage