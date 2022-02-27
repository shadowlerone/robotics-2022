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
                    <Link to="/" className="menuitem">
                    <img className="menuimage" alt="cards here" src={require("../assets/media/images/teapot.png")} width="500px"/>
                        <button className="label" >{t('Landing')}</button>
                    </Link>
                    <Link to="/journey" className="menuitem">
                        <img className="menuimage" alt="cards here" src={require("../assets/media/images/pinkcup.png")} width="500px"/>
                        <button className="label" >{t('Journey')}</button>
                    </Link>
                    <Link to="/robot" className="menuitem">
                    <img className="menuimage" alt="cards here" src={require("../assets/media/images/watch.png")} width="500px"/>
                        <button className="label" >{t('Robot')}</button>
                    </Link>
                    <Link to="/arcanum" className="menuitem">
                        <img className="menuimage" alt="cards here" src={require("../assets/media/images/hat.png")} width="500px"/>
                        <button className="label" >{t('Arcanum')}</button>
                    </Link>
                    <Link to="/characters" className="menuitem">
                        <img className="menuimage" alt="cards here" src={require("../assets/media/images/cards.png")} width="500px"/>
                        <button className="label" >{t('Characters')}</button>
                    </Link>
                    <Link to="/vaniercollege" className="menuitem">
                        <img className="menuimage" alt="cards here" src={require("../assets/media/images/bluecup.png")} width="500px"/>
                        <button className="label" >{t('VC')}</button>
                    </Link>
                    <Link to="/jackpot" className="menuitem">
                    <img className="menuimage" alt="cards here" src={require("../assets/media/images/crown.png")} width="500px"/>
                        <button className="label" >{t('Jackpot')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default withNamespaces()(Menu);