import React from "react";
import { Link } from "react-router-dom";
import './Landing.css';
import { withNamespaces } from "react-i18next";

function Landing({t}) {
    
    return (
        <div className="Landing">
            <Link to="/transition">
                <span className="en">ENGLISH</span>
                <img className="cake" alt="Cake here" src={require("../assets/media/images/cookie.png")} />
                
            </Link>

            <a href="https://www.alice-in-wonderland.net/" target="_blank" rel="noreferrer" >
                <img className="title" alt="title here" src={require("../assets/media/images/title1.png")}/>
            </a>

            <Link to="/transition">
                <img className="vial" alt="vial here" src={require("../assets/media/images/bottle.png")}/>
                <span className="fr">FRANÇAIS</span>
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