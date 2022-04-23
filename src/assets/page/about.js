import React,{useEffect, useState} from "react";
import "../style/about.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {Menu} from "../container/header"

const stylesheet = {
    about:{
        display:'flex',
        flexDirection:'column',
        fontSize:'4.2vw',
        cursor:'pointer'
    }
}

const About = () => {

        useEffect(()=>{
          AOS.init();
        },[])

       setTimeout(()=>{
        setDelay({transitionDelay:'0ms', transition:'all 400ms'})
       },0)

    const [delay,setDelay] = useState()
    const [hello,setHello] = useState({text:'Hello.',style:{color:'white'}})
    const [iam,setIam]= useState({text:'I am',style:{color:'red'}})
    const [alex,setAlex]= useState({text:'Alex',style:{color:'red'}})
   
    
      const  onHover = (id)=>{
        if (id==="hello") {setHello({text:'About',style:{color:'white',transform: "translate(25px,0)"}})}
        if (id==="iam") {setIam({text:'Work',style:{color:'red',transform: "translate(25px,0)"}})}
        if (id==="alex") {setAlex({text:'Contact',style:{color:'red',transform: "translate(25px,0)"}})}
    }
    const onLeave = (id)=>{
        if (id==="hello") {setHello({text:'Hello.',style:{color:'white',transform: "translate(0px,0)"}})}
        if (id==="iam") {setIam({text:'I am',style:{color:'red',transform: "translate(0px,0)"}})}
        if (id==="alex") {setAlex({text:'Alex',style:{color:'red',transform: "translate(0px,0)"}})}
    }

    const [menuName, setMenuName] = useState('Alex Gurski')
    const [menuStyle, setMenuStyle] = useState({color:'white', position:'fixed', top:'3%', right:'3.5%', zIndex:1 })
    return (
       <div className="about">
           <div className="about_photo" ></div>
           <div className="about_menu" style={menuStyle}
           onMouseEnter={()=>{setMenuName('Menu'); setMenuStyle({...menuStyle,  color:'red'})}} 
           onMouseLeave={()=>{setMenuName('Alex Gurski'); setMenuStyle({...menuStyle, color:'white'})}} 
           > 
             <Menu name={menuName} /> 
           </div>
           <div style={stylesheet.about} className="about_header_text" >
            <h1 style={{...hello.style, ...delay }}className="about_header" id="hello" data-aos="fade-up"  data-aos-duration="1000"  
                onMouseEnter={(el)=>{onHover(el.target.id)}} 
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{hello.text}
            </h1>
            <h1 style={{...iam.style, ...delay }}className="about_header" id="iam" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="500"
                onMouseEnter={(el)=>{onHover(el.target.id)}}
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{iam.text}
            </h1>
            <h1 style={{...alex.style, ...delay }}className="about_header" id="alex" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="1000"
                onMouseEnter={(el)=>{onHover(el.target.id)}}
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{alex.text}
            </h1>
           </div>
       </div>
    ) 
}
export default About