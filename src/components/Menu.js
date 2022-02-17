import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu({t}) {
    return (
        <div className="Menu">
            {/* <h1>{t('Menu')}</h1> */}
            <div className="navbar">
                <div className="buttons-container">
                    <Link to="/">
                    <img className="menuitems" alt="cards here" src={require("../assets/media/images/teapot.png")} width="500px"/>
                        <button className="label" >{t('Landing')}</button>
                    </Link>
                    <Link to="/journey">
                        <button className="label" >{t('Journey')}</button>
                        <img className="menuitems" alt="cards here" src={require("../assets/media/images/pinkcup.png")} width="500px"/>
                    </Link>
                    <Link to="/robot">
                    <img className="menuitems" alt="cards here" src={require("../assets/media/images/watch.png")} width="500px"/>
                        <button className="label" >{t('Robot')}</button>
                    </Link>
                    <Link to="/arcanum">
                        <button className="label" >{t('Arcanum')}</button>
                        <img className="menuitems" alt="cards here" src={require("../assets/media/images/hat.png")} width="500px"/>
                    </Link>
                    <Link to="/characters">
                        <img className="menuitems" alt="cards here" src={require("../assets/media/images/cards.png")} width="500px"/>
                        <button className="label" >{t('Characters')}</button>
                    </Link>
                    <Link to="/vaniercollege">
                        <button className="label" >{t('VC')}</button>
                        <img className="menuitems" alt="cards here" src={require("../assets/media/images/bluecup.png")} width="500px"/>
                    </Link>
                    <Link to="/jackpot">
                    <img className="menuitems" alt="cards here" src={require("../assets/media/images/crown.png")} width="500px"/>
                        <button className="label" >{t('Jackpot')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default withNamespaces()(Menu);