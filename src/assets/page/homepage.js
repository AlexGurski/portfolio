import React from "react";
import "../style/style.css"
import HomepageHeader from '../container/homepage/homepageHeader'
import HomepageResume from '../container/homepage/homepageResume'
import HomepageAbout from '../container/homepage/homepageAbout'

const Homepage = () => {


    return (
       <>
        <HomepageHeader/>
        <HomepageAbout/>  
        <HomepageResume/>
         
       </>
    ) 
}
export default Homepage