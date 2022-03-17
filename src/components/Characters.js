import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"

function Characters({ t }) {    
    var captainCards = [];
    for (var i = 0; i < 6; i++) {
        captainCards.push
        (
            <div className="flip-card">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        ♥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Captains&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♥
                        <img src={require("../assets/media/images/hat.png")} alt="Avatar" style={{width: "175px", borderRadius: "15px"}}/>
                        ♥♥♥♥♥♥♥♥♥♥♥
                        <h3>Shanmukh Iyer</h3>
                    </div>
                    <div className="flip-card-back">
                        <h1>John Doe</h1> 
                        <p>Architect & Engineer</p> 
                        <p>We love that guy</p>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <div className="cards">
                {captainCards}
                

            </div>
        </div>
    );

}
export default withNamespaces()(Characters);