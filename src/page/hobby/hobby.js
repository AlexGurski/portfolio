import React,{useEffect} from "react";
import "./style/hobby.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flag-icons'
const Hobby = () => {
    useEffect(()=>{
        window.scrollTo(0, 1);
      AOS.init();
    },[])

    return (
        <div className="hobby">
          <div className="section">
            <div className="oop"></div>
            <div className="fixed">
                <h1>I'm Alexandr</h1>
                <p>And these are my hobbies</p>
            </div>
            </div>
            <div className="section">
            <div className="p fixed">
                <h1>TRAVELING</h1>
                <h3>Only two things we will regret on deathbed – that we are a little loved and little traveled.</h3>
            </div>
            </div>
            <div className="section">
            <div className="p fixed hobby_frame" style={{display:"flex", justifyContent:'center'}}>
                <div className="travel_container">            
                    <div><img src={require('../../assets/image/travel/barca.jpg')} alt=""/><span className="fi fi-es"></span></div>
                    <div><img src={require('../../assets/image/travel/lviv.jpg')}  alt=""/><span className="fi fi-ua"></span></div>
                    <div><img src={require('../../assets/image/travel/innsbruck.jpg')}  alt=""/><span className="fi fi-at"></span></div>
                    <div><img src={require('../../assets/image/travel/it.jpg')}  alt=""/><span className="fi fi-it"></span></div>   
                    <div><img src={require('../../assets/image/travel/fr.jpg')}  alt=""/><span className="fi fi-fr"></span></div>  
                    <div><img src={require('../../assets/image/travel/girona.jpg')}  alt=""/><span className="fi fi-es"></span></div>
                    <div><img src={require('../../assets/image/travel/pl.jpg')}  alt=""/><span className="fi fi-pl"></span></div>
                    <div><img src={require('../../assets/image/travel/ger.jpg')}  alt=""/><span className="fi fi-de"></span></div>
                    <div><img src={require('../../assets/image/travel/vilna.jpg')}  alt=""/><span className="fi fi-lv"></span></div>
                    <div><img src={require('../../assets/image/travel/cat.jpg')}  alt=""/><span className="fi fi-es-ct"></span></div>                   
                    <div><img src={require('../../assets/image/travel/cz.jpg')}  alt=""/><span className="fi fi-cz"></span></div>  
                    <div><img src={require('../../assets/image/travel/gervy.jpg')}  alt=""/><span className="fi fi-by"></span></div>  
                    <div><img src={require('../../assets/image/travel/uk.jpg')} alt="" /><span className="fi fi-ua"></span></div>
                    <div><img src={require('../../assets/image/travel/mald.jpg')}  alt=""/><span className="fi fi-by"></span></div>
                    <div><img src={require('../../assets/image/travel/thrones.jpg')}  alt=""/><span className="fi stark"></span></div>
                </div> 
            </div>
            </div>
            <div className="section">
            <div className="trevel fixed p">
            <h1>GASTRO TRIP</h1>
            <h3>What's the point of traveling if you don't taste their food</h3>
            </div>
            </div>
            <div className="section">
            <div className="p fixed hobby_frame" >
            <div className="gastro_container">
                <div className="box">
                    <img src={require('../../assets/image/gastro/barca.jpg')} alt=""/>
                    <span>Barcelona</span>
                </div>               
                <div className="box">
                    <img  src={require('../../assets/image/gastro/vilna.jpg')} alt="" />
                    <span>Vilnius</span>
                </div>
                <div className="box">
                    <img src={require('../../assets/image/gastro/lviv1.jpg')} alt=""/>
                    <span>Lviv</span>
                </div>
                <div className="box">
                    <img src={require('../../assets/image/gastro/venezia.jpg')} alt=""/> 
                    <span>Venezia</span>
                </div>
                <div className="box">
                    <img src={require('../../assets/image/gastro/mir.jpg')} alt=""/> 
                    <span>Mir</span>
                </div>
            </div>
            </div>
            </div>
            <div className="section">
            <div className="fixed">
                <h1>SNOWBOADRING</h1>
                <h3>The board makes you fall in love with winter and look forward to its arrival.</h3>
            </div>
            </div>
            <div className="section">
            <div className="snow">
                <ul className="img-list">                        
                        <li><img src={require('../../assets/image/snow/snowboard6.jpg')} alt=""/></li>
                        <li><img src={require('../../assets/image/snow/snowboard1.jpg')} alt=""/></li>
                        <li><img src={require('../../assets/image/snow/snowboard3.jpg')} alt=""/></li>                       
                        <li><img src={require('../../assets/image/snow/snowboard5.jpg')} alt=""/></li>                        
                        <li><img src={require('../../assets/image/snow/snowboard2.jpg')} alt=""/></li>
                        <li><img src={require('../../assets/image/snow/snowboard4.jpg')} alt=""/></li>
                </ul>
            </div>
            </div>
            <div className="section">
            <p className="fixed white">Thanks for watching</p>
            </div>
        </div>
    ) 
}
export default Hobby