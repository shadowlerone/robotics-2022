import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import { withNamespaces } from "react-i18next";

function Landing({t}) {
    
    return (
        <div className="Landing">
            <img className="title" alt="title here" src={require("../content/media/images/title1.png")}/>
            <br/>
            <Link to="/transition">
                <img className="vial" alt="vial here" src={require("../content/media/images/bottle.png")}/>
                {/* <span className="en">ENGLISH</span> */}
            </Link>
            <Link to="/transition">
                <img className="cake" alt="Cake here" src={require("../content/media/images/cookie.png")} />
                {/* <span className="fr">FRANÇAIS</span> */}
            </Link>
        </div>
        
    );
}
export default withNamespaces()(Landing);

// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])