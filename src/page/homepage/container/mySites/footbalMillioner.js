import React,{useEffect} from "react";
import "../../style/homepageResume.css"

import { MdDeveloperBoard } from 'react-icons/md';

export  const FootbalMillioner = () => {


    return (
        <div className="mySite_container"> 
            <div className="my_site">            
                <form className="frameworks">
                <span className="flare"></span>
                <h2>FOOTVALL QUIZ</h2>
                <MdDeveloperBoard fontSize={'3em'}/>                
                <h5>I couldn't find a good football quiz in the market. If you can't find it, do your own.</h5>
                <h5>The application is completed at 60 percent</h5>
                <h3>LANGUAGES I SPEAK:</h3>
                <p>React Native</p> 
                <p>Firebase</p> 
                <p>JavaScript</p> 
                <h3>DEV TOOLS</h3>   
                <p>VS Code</p>
                <p>Android</p>
                <p>NPM</p>
                <p>Guthub</p>
                <section>Link: <span>Coming soon</span></section>
                </form>
                <div className="mySite_images">
                <div id='phone' className="toHiden"><img src={require('../../../../assets/image/sites/parkaveniu/footbal.png')}/></div>   
                  <div id='phone'><img src={require('../../../../assets/image/sites/parkaveniu/football.png')}/></div>   
               </div>
            </div>
            
        </div>
        
    ) 
}
