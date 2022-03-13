import React from "react";
import { withNamespaces } from "react-i18next";
import './Jackpot.css';

function Jackpot({t}) {
    
    return (
        <div className="Jackpot">
            <h6>{t('Our sponsor:')}</h6>
            <br/>
            <a className="dotWrapper" rel="noreferrer" target="_blank" href="https://www.vcsavanier.com/">
                {/* <span class="dot">V</span>
                <span class="dot">C</span>
                <span class="dot">S</span>
                <span class="dot">A</span> */}
                <img className="title" alt="title here" src={require("../assets/media/images/VCSA.png")}/>
            </a>
        </div>
    );
}
export default withNamespaces()(Jackpot);