import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
// import Helmet from 'react-helmet';
// import Background from '../content/media/images/BG_0.png';
// import title from '../content/media/images/Items_5.png';

export default function Landing() {
    
    return (
        <div className="Landing">
            <img className="title" alt="title here" src={require("../content/media/images/title1.png")}/>
            <br/>
            <Link to="/transition">
                <img className="vial" alt="vial here" src={require("../content/media/images/vial.png")}/>
                <img className="en" alt="en here" src={require("../content/media/images/en.png")}/>
            </Link>
            <Link to="/transition">
                <img className="fr" alt="fr here" src={require("../content/media/images/en.png")}/>
                <img className="cake" alt="cake here" src={require("../content/media/images/cake.png")}/>   
            </Link>
        </div>
        
    );
}


// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])