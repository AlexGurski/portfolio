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
                <h1>Snowboarding</h1>
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
            <div className="p fixed">
                
            </div>
            </div>
            <div className="section">
            <div className="trevel fixed p">
            <h1>Traveling</h1>
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
            <div className="p fixed">For my wife and me, she was like a little child. Our world revolved around her. We used to play with her, tease her. We even celebrated her 80th birth day with a grand cake cutting ceremony attended by my wife’s friends in Kolkata. It was a moment of happiness for her as she kept smiling at every one greeting her on her birth day without knowing whose birth day it was. So when one of the guests greeted her with a “wish you a happy birth day”, she promptly responded by wishing her the same!</div>
            </div>
            <div className="section">
            <div className="p fixed">It was interesting to know that even after destroying her brain cells; the disease could not take away the basic courtesies from her, acquired during her training as a Telephone Operator long long ago. They remained entrenched in her till her last breath. She never forgot to express her sincere thanks whenever we help her with little things.</div>
            </div>
            
            <div className="section">
            <p className="fixed white">Thanks for watching</p>
            </div>
        </div>
    ) 
}
export default Hobby