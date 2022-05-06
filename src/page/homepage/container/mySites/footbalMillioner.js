import React,{useState, useEffect} from "react";
import "../../style/homepageResume.css"

import { MdDeveloperBoard } from 'react-icons/md';

export  const FootbalMillioner = () => {
    const [rotate,setRotate] = useState()
    const [counter,setCounter] = useState(0)
  
    useEffect(()=>{
        if (counter % 2){setRotate({transform: 'rotateY(180deg)'})}
        else{setRotate({transform: 'rotateY(0deg)'})}
    },[counter])
    

    return (
        <div className="mySite_container"> 
         <div className="flip-container" onClick={()=>setCounter(counter+1)}>
                <div className="card" style={rotate}>
                    <img src={require('../../../../assets/image/sites/parkaveniu/footbal.png')} className="back" alt="Card Back" />
                    <form className="frameworks front">
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
                </div>
            </div>
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
                <div id='phone' className="toHiden"><img   alt=" " src={require('../../../../assets/image/sites/parkaveniu/footbal.png')}/></div>   
                  <div id='phone'><img    alt=" " src={require('../../../../assets/image/sites/parkaveniu/football.png')}  /></div>   
               </div>
            </div>
            
        </div>
        
    ) 
}
