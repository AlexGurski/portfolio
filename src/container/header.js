import React, { useState } from "react";
import "../style/style.css"
import {Link, Outlet}  from 'react-router-dom'
const Menu =(props) =>{
    const [check, setCheck] = useState(false);
    
    return (
                <div className="menu-wrap">                    
                    <input type="checkbox" className="toggler" checked={check} defaultChecked={false} onChange={()=>setCheck(!check)}/>                                      
                    <div className="hamburger">{props.name}<div></div></div>
                    <div className="menu">
                        <div>
                            <div>
                                <ul>
                                    <li><Link to="/" onClick={()=>setCheck(!check)}>Home</Link></li>
                                    <li><Link to="/about" onClick={()=>setCheck(!check)}>About me</Link></li>
                                    <li><Link to="/hobby" onClick={()=>setCheck(!check)}>Hobby</Link></li>
                                    <li><Link to="/contact" onClick={()=>setCheck(!check)}>Contact</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
    )
}
                
const Header = () => {
    return(
        <>
            <div className="header">
                <div className="header_text">
                    Alex Gurski
                </div>
                <Menu/>
            </div>
            <Outlet/>
        </>
    )
}

export {Header} ;
export {Menu} ;