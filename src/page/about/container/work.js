import React,{useEffect} from "react";
import "../style/about.css"


export const MyWork = () => {
    return (
    <div className="about_about" id='work'>
        <div className="about_container" data-aos="fade-up" data-aos-duration="2000">
            <p>My first serious project is a thesis.</p>
            <p>This project was developed for the Baranovichi cafe "Park Avenue". It was a FULL STACK development. Starting from the design and Frontend and ending with the server part (NodeJS) with a database (MongoDB).</p>
        </div>
        <div className="about_container" data-aos="fade-up" data-aos-duration="2000">
            <p>Currently, it is impossible to imagine your life without the Internet. We use it all the time: at home, on the way to and from work, at work. And what are we looking at on the Internet? to websites. All self-respecting companies have them and their number is only increasing. And companies that already have websites will improve, redo and supplement them over time.</p>
            <p>In the army, there is no room for creativity and a sense of admiration for the work done, which gives web development.</p>
        </div>
    </div>
    )
    
}
