import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from 'react-router-dom';
import './Menu.css'

function Menu({t}) {
    return (
        <div className="Menu">
            <h1>{t('Menu')}</h1>
            <div className="navbar">
                <div className="buttons-container">
                    <Link to="/">
                        <button>{t('Landing')}</button>
                    </Link>
                    <Link to="/journey">
                        <button>{t('Journey')}</button>
                    </Link>
                    <Link to="/robot">
                        <button>{t('Robot')}</button>
                    </Link>
                    <Link to="/arcanum">
                        <button>{t('Arcanum')}</button>
                    </Link>
                    <Link to="/characters">
                        <button>{t('Characters')}</button>
                    </Link>
                    <Link to="/vaniercollege">
                        <button>{t('VC')}</button>
                    </Link>
                    <Link to="/jackpot">
                        <button>{t('Jackpot')}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
export default withNamespaces()(Menu);