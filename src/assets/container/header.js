import React, { useState } from "react";
import "../style/style.css"
import {Link}  from 'react-router-dom'

const Header = () => {
    const [check, setCheck] = useState(false);
    return(
        <div className="header">
            <div className="header_text">
                Alex Gurski
            </div>
            <div className="menu-wrap">
                <input type="checkbox" className="toggler" checked={check} onClick={()=>setCheck(!check)}/>
                <div className="hamburger"><div></div></div>
                <div className="menu">
                    <div>
                        <div>
                            <ul>
                                <li><Link to="/" onClick={()=>setCheck(!check)}>Home</Link></li>
                                <li><Link to="#">About me</Link></li>
                                <li><Link to="/hobby" onClick={()=>setCheck(!check)}>Hobby</Link></li>
                                <li><Link to="#">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;