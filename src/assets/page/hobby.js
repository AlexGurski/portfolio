import React,{useEffect} from "react";
import "../style/style.css"
import { BsChevronDown } from 'react-icons/bs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hobby = () => {
    useEffect(()=>{
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
            <div className="fixed">
                <h1>SNOWBOADRING</h1>
                
                <h3>The board makes you fall in love with winter and look forward to its arrival.</h3>
            </div>
            </div>
            <div className="section">
            <div className="p fixed">
                <ul className="img-list">
                        <li><span className="img-placeholder"></span></li>
                        <li><img src={require('../image/snowboard6.jpg')}/></li>
                        <li><img src={require('../image/snowboard1.jpg')}/></li>
                        <li><img src={require('../image/snowboard3.jpg')}/></li>
                        <li><span className="img-placeholder"></span></li>
                        <li><img src={require('../image/snowboard5.jpg')}/></li>
                        <li><span className="img-placeholder"></span></li>
                        <li><img src={require('../image/snowboard2.jpg')}/></li>
                        <li><img src={require('../image/snowboard4.jpg')}/></li>
                </ul>
            </div>
            </div>
            <div className="section">
            <div className="trevel fixed p">
            <h1>TRAVELING</h1>
            <h3>Only two things we will regret on deathbed – that we are a little loved and little traveled.</h3>
            </div>
            </div>
            <div className="section">
            <div className="p fixed">
            <div className="container">
                <div className="box">
                    <img src={require('../image/Barcelona.jpg')}/>
                    <span>Barcelona</span>
                </div>
                <div className="box">
                    <img src={require('../image/Paris.jpg')}/>
                    <span>Paris</span>
                </div>
                <div className="box">
                    <img src={require('../image/Girona.jpg')}/>
                    <span>Girona</span>
                </div>
                <div className="box">
                    <img src={require('../image/Venezia.jpg')}/>
                    <span>Venezia</span>
                </div>
                <div className="box">
                    <img src={require('../image/Innsbruck.jpg')}/>
                    <span>Innsbruck</span>
                </div>
            </div>
            </div>
            </div>
            <div className="section">
            <div className="p fixed">
            <h1>GASTRO TRIP</h1>
            <h3>What's the point of traveling if you don't taste their food</h3>
            </div>
            </div>
            <div className="section">
            <div className="p fixed" style={{display:"flex", justifyContent:'center'}}>
            <div className="gastro_trip">
            <figure class="snip0016">
                <img src={require('../image/gastro/barca.jpg')} style={{width:'100%', height:'100%'}}/>    
                <figcaption>
                    <h2>Barcelona</h2>
                    <p>Spain</p>                    
                </figcaption>			
            </figure>   
            <figure class="snip0016">
             <img src={require('../image/gastro/girona.jpg')} style={{width:'100%', height:'100%'}}/>        
                <figcaption>
                    <h2>Girona</h2>
                    <p>Spain</p>                    
                </figcaption>			
            </figure>           
            <figure class="snip0016">
            <img src={require('../image/gastro/lloret.jpg')} style={{width:'100%', height:'100%'}}/>        
                <figcaption>
                    <h2>Lloret de Mar</h2>
                    <p>Spain</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/venezia.jpg')} style={{width:'100%', height:'100%'}}/>       
                <figcaption>
                    <h2>Venezia</h2>
                    <p>Italy</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/vilna.jpg')} style={{width:'100%', height:'100%'}}/>       
                <figcaption>
                    <h2>Vilnius</h2>
                    <p>Litvania</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/aus.jpg')} style={{width:'100%', height:'100%'}}/>      
                <figcaption>
                    <h2>Innsbruck</h2>
                    <p>Austria</p>                    
                </figcaption>			
            </figure>  
            <figure class="snip0016">
            <img src={require('../image/gastro/lviv.jpg')} style={{width:'100%', height:'100%'}}/>    
                <figcaption>
                    <h2>Lviv</h2>
                    <p>Ukraine</p>                    
                </figcaption>			
            </figure>  
            <figure class="snip0016">
            <img src={require('../image/gastro/lviv1.jpg')} style={{width:'100%', height:'100%'}}/>    
                <figcaption>
                    <h2>Lviv</h2>
                    <p>Ukraine</p>                    
                </figcaption>			
            </figure> 
            <figure class="snip0016">
            <img src={require('../image/gastro/mir.jpg')} style={{width:'100%', height:'100%'}}/>    
                <figcaption>
                    <h2>Mir</h2>
                    <p>Belarus</p>                    
                </figcaption>			
            </figure> 
            <figure class="snip0016">
            <img src={require('../image/gastro/lida.jpg')} style={{width:'100%', height:'100%'}}/>   
                <figcaption>
                    <h2>Lida</h2>
                    <p>Belarus</p>                    
                </figcaption>			
            </figure> 
            <figure class="snip0016">
            <img src={require('../image/gastro/berlin.jpg')} style={{width:'100%', height:'100%'}}/> 
                <figcaption>
                    <h2>Berlin</h2>
                    <p>Germany</p>                    
                </figcaption>			
            </figure> 
            <figure class="snip0016">
            <img src={require('../image/gastro/home.jpg')} style={{width:'100%', height:'100%'}}/>  
                <figcaption>
                    <h2>Home</h2>
                    <p>Sweet home</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/bar.jpg')} style={{width:'100%', height:'100%'}}/>  
                <figcaption>
                    <h2>Baranovichy</h2>
                    <p>Belarus</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/minsk.jpg')} style={{width:'100%', height:'100%'}}/>  
                <figcaption>
                    <h2>Minsk</h2>
                    <p>Belarus</p>                    
                </figcaption>			
            </figure>
            <figure class="snip0016">
            <img src={require('../image/gastro/grodno.jpg')} style={{width:'100%', height:'100%'}}/>
                <figcaption>
                    <h2>Grodno</h2>
                    <p>Belarus</p>                    
                </figcaption>			
            </figure>  
            </div> 
            </div>
            </div>
            <div className="section">
            <p className="fixed white">Thanks for watching</p>
            </div>
        </div>
    ) 
}
export default Hobby