import React,{useEffect, useState} from "react";
import "../style/about.css"
const stylesheet = {
    about:{
        display:'flex',
        flexDirection:'column',
        fontSize:'4.2vw',
        cursor:'pointer'
    }
}

const About = () => {
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

    return (
       <div className="about">
           <div className="about_photo"></div>
           <div style={stylesheet.about} className="about_header_text">
            <h1 style={hello.style}className="about_header" id="hello"
                onMouseEnter={(el)=>{onHover(el.target.id)}}
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{hello.text}
            </h1>
            <h1 style={iam.style}className="about_header" id="iam"
                onMouseEnter={(el)=>{onHover(el.target.id)}}
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{iam.text}
            </h1>
            <h1 style={alex.style}className="about_header" id="alex"
                onMouseEnter={(el)=>{onHover(el.target.id)}}
                onMouseLeave={(el)=>{onLeave(el.target.id)}}
            >{alex.text}
            </h1>
           </div>
       </div>
    ) 
}
export default About