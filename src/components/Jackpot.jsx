import React from "react";
import { withNamespaces } from "react-i18next";
import './Jackpot.css';

function Jackpot(props) {
    
    return (
        <div className="Jackpot">
            <h2>{props.t('partners')}</h2>

            <a className="VCSAWrapper" rel="noreferrer" target="_blank" href="https://www.vcsavanier.com/">
                <img className="vcsa" alt="title here" src={require("../assets/media/images/VCSA.png")}/>
            </a>
            <a className="VCWrapper" rel="noreferrer" target="_blank" href="https://www.vaniercollege.qc.ca/">
                <img className="vc" alt="title here" src={require("../assets/media/images/vc.png")}/>
            </a>
            <a className="CRCWrapper" rel="noreferrer" target="_blank" href="https://robo-crc.ca/">
                <img className="crc" alt="title here" src={require("../assets/media/images/crc.png")}/>
            </a>
        </div>
    );
}
export default withNamespaces()(Jackpot);