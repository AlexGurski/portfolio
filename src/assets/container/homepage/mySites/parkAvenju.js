import React,{useEffect} from "react";
import "../../../style/style.css"

import { MdDeveloperBoard } from 'react-icons/md';

export  const ParkAvenju = () => {


    return (
        <div className="mySite_container"> 
            <div className="my_site">            
                <form className="frameworks">
                <span class="flare"></span>
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
                <p>Guthub</p>
                <p>Heroku</p>
                <section>Link: <span>Coming soon</span></section>
                
                </form>
               <div className=" parkAveniu mySite_images">
                <img className="img1" src={require('../../../image/sites/parkaveniu/home.jpg')}/>
                <img src={require('../../../image/sites/parkaveniu/auth.jpg')}/> 
                <img src={require('../../../image/sites/parkaveniu/galeryA.jpg')}/>
                <img src={require('../../../image/sites/parkaveniu/menuA.jpg')}/>
                <img src={require('../../../image/sites/parkaveniu/menu.jpg')}/>
                <img src={require('../../../image/sites/parkaveniu/order.jpg')}/>
                <img src={require('../../../image/sites/parkaveniu/orderA.jpg')}/>
                 
               </div>
            </div>
        </div>
    ) 
}
