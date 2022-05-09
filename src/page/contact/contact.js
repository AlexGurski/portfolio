import React,{useEffect, useState} from "react";
import "./contact.css"
import firebaseConfig from '../../database/base';
import firebase from 'firebase/compat/app';
import 'firebase/database';
import 'firebase/compat/database';
import 'flag-icons'
firebase.initializeApp(firebaseConfig);
const Contact = () => {
    useEffect(()=>{
        window.scrollTo(0, 1);
    },[])

    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
    const [text,setText]=useState('')
    const [error, setError] = useState({text:'',style:{opacity:1}})

    useEffect(()=>{
        if (error.text==='Thanks for the response') setTimeout(() => {
            setError({style:{opacity:0}})
        }, 1500);
    },[error])



    const clear = () =>{
        setName('');
        setEmail('');
        setText('');
    }
   
    const sendMessage = (text, email, name) =>{
        let rez = [];
        if (name === '' || name === ' ' ) {setError({text: `Fill in the Name field`,style:{opacity:1, color:'red'}})}else{
            if (email === '' || email === ' ' ) {setError({text: `Fill in the Email field`,style:{opacity:1, color:'red'}})}else{
                if (text === '' || text === ' ' ) {setError({text: `Fill in the Text field`,style:{opacity:1, color:'red'}})}else{
                    firebase.database().ref('send/'+name+'_'+email).update({text:text, email:email, name:name});
                    clear();
                    setError({text:'Thanks for the response',
                                style:{
                                    opacity:1,
                                    color:'green'
                                }})
                }
            }
        }
       
    }
    return (
        <div className="contact">
          <div className="login-box">
            <h2>Thanks for taking the time to reach out.</h2>
            <form>
                <div className="user-box">
                    <input type="text" id='username' name="username" value={name}  onChange={(e) => {setName(e.target.value); setError({setyle:{opacity:0}})}}/>
                    <label htmlFor='username'>Name</label>
                </div>
                <div className="user-box">
                    <input type="text" name="" required="" value={email} onChange={(e) => {setEmail(e.target.value); setError({setyle:{opacity:0}})}}/>
                    <label>Email</label>
                </div>
                <div className="user-box">
                    <textarea cols="30" rows="5" value={text} onChange={(e) => {setText(e.target.value); setError({setyle:{opacity:0}})}}/>
                    <label>Message</label>
                    <span> </span>
                    
                </div>
                <div style={{paddingTop:'20px', height:'1em', transition:'all 1s'}}><span style={{...error.style, transition:'opacity 1s'}}>{error.text}</span></div>
                <a href="#" onClick={()=>{sendMessage(text, email, name) }}>
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