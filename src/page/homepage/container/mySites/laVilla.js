import React,{useState, useEffect} from "react";
import "../../style/homepageResume.css"
import { MdDeveloperBoard } from 'react-icons/md';

export  const LaVilla = () => {
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
                    <img src={require('../../../../assets/image/sites/parkaveniu/lavillaA.png')} className="back" alt="Card Back" />
                    <form className="frameworks front">
                        <h2>LA VILLA</h2>
                        <MdDeveloperBoard fontSize={'3em'}/>                
                        <h5>First full stack web-project. A website for a pizzeria. Node JS and MongoDB were used for the server side. Frontend on pure HTML+CSS.</h5>
                        <h5>A pen test in web development. And I liked it.</h5>
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
                </div>
            </div> 
            <div className="my_site">            
                <form className="frameworks">
                        <span className="flare"></span>
                        <h2>LA VILLA</h2>
                        <MdDeveloperBoard fontSize={'3em'}/>                
                        <h5>First full stack web-project. A website for a pizzeria. Node JS and MongoDB were used for the server side. Frontend on pure HTML+CSS.</h5>
                        <h5>A pen test in web development. And I liked it.</h5>
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
                    <div className="toHiden"><img src={require('../../../../assets/image/sites/parkaveniu/lavilla.png')}  alt=" "/></div>
                    <div><img src={require('../../../../assets/image/sites/parkaveniu/lavillaA.png')}  alt=" "/></div>
               </div>
            </div>
        </div>
    ) 
}
