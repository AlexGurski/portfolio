import React from "react";
import "../style/style.css"
import HomepageHeader from '../container/homepage/homepageHeader'
import HomepageResume from '../container/homepage/homepageResume'
import HomepageAbout from '../container/homepage/homepageAbout'

const Homepage = () => {


    return (
       <>
        <HomepageHeader/>
        <HomepageResume/>
        <HomepageAbout/>   
       </>
    ) 
}
export default Homepage