import React,{useEffect} from "react";
import "./contact.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'flag-icons'
const Contact = () => {

    return (
        <div className="contact">
          <div class="login-box">
            <h2>Ыend me</h2>
            <form>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Username</label>
                </div>
                <div class="user-box">
                <input type="text" name="" required=""/>
                <label>Password</label>
                </div>
                <a href="#">
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