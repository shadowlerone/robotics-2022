import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
// import Helmet from 'react-helmet';
// import Background from '../content/media/images/BG_0.png';
// import title from '../content/media/images/Items_5.png';

export default function Landing() {

    return (
        <div className="Landing">
            {/* <img className="title" alt="title here" src={require("../content/media/images/title1.png")}/> */}
            <div className="landingWrapper content-wrapper">
                <Link to="/transition" className="vial">
                    <img alt="vial here" src={require("../content/media/images/vial.png")} />
                    {/* <img className="en" alt="en here" src={require("../content/media/images/en.png")} /> */}
                    <span className="lang en">english</span>
                </Link>
                <div>
                    <div id="title">
                        <span className="alice">ALICE </span><span className="wonderland">IN<br />VANIERLAND</span><br/>
                        <div className="subtitle">VANIER ROBOTICS 2022</div>
                    </div>
                </div>
                <Link to="/transition">
                    <span className="lang en">french</span>
                    <img className="cake" alt="cake here" src={require("../content/media/images/cake.png")} />
                </Link>
            </div>
        </div>

    );
}


// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])