import React,{useEffect} from "react";
import "../../style/homepageResume.css"

import { MdDeveloperBoard } from 'react-icons/md';

export  const ParkAvenju = () => {


    return (
        <div className="mySite_container"> 
            <div className="my_site">            
                <form className="frameworks">
                    <span className="flare"></span>
                    <h2>PARK AVENIU</h2>
                    <MdDeveloperBoard fontSize={'3em'}/>                
                    <h5>My thesis. A website for an existing cafe, which was in release for a whole year, but then the director did not want to extend the hosting</h5>
                    <h5>Currently unavailable online, but I will restore it soon</h5>
                    <h3>LANGUAGES I SPEAK:</h3>
                    <p>Node.js</p> 
                    <p>MongoDB</p> 
                    <p>JavaScript</p> 
                    <p>CSS</p>
                    <p>HTML</p> 
                    <h3>DEV TOOLS</h3>                 
                    <p>Atom</p>
                    <p>NPM</p>
                    <p>Github</p>
                    <p>Heroku</p>
                    <p>AJAX</p>  
                    <section>Link: <span>Coming soon</span></section>
                </form>
               <div className="mySite_images">
                <div className="toHiden"><img src={require('../../../../assets/image/sites/parkaveniu/park.png')}/></div>
                <div ><img src={require('../../../../assets/image/sites/parkaveniu/parkA.png')}/></div>
               </div>
            </div>
        </div>
    ) 
}
