import React,{useEffect, useState} from "react";
import "./contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flag-icons'
const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 1);
    },[])

    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
    const [text,setText]=useState('')

    const clear = () =>{
        setName('');
        setEmail('');
        setText('');
    }
    return (
        <div className="contact">
          <div className="login-box">
            <h2>Thanks for taking the time to reach out.</h2>
            <form>
                <div className="user-box">
                    <input type="text" id='username' name="username" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor='username'>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <textarea cols="30" rows="5" value={text} onChange={(e) => setText(e.target.value)}/>
                    <label>Message</label>
                </div>
                <a href="#" onClick={()=>clear()}>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Submit
                </a>
            </form>
            </div>
        </div>
    ) 
}
export default Contact