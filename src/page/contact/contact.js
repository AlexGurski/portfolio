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
    const [error, setError] = useState('')

    const clear = () =>{
        setName('');
        setEmail('');
        setText('');
    }

    const sendMessage = (text, email, name) =>{
        let rez = '';
        if (text === '' || text === ' ' ) {console.log('oi')}else{
            if (email === '' || email === ' ' ) {console.log('oi')} else{
                if (name === '' || name === ' ' ) {console.log('oi')} else{
                    firebase.database().ref('send/'+name+'_'+email).update({text:text, email:email, name:name});
                    clear();
                    setError('')
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
                    <span> </span>
                    
                </div>
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