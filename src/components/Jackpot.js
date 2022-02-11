import React from "react";
import { withNamespaces } from "react-i18next";
import './Jackpot.css';

function Jackpot({t}) {
    return (
        <div className="Jackpot">
            <h1>{t('Jackpot')}</h1>
            <div className="content">
                <p>{t('placeholder')}</p>
            </div>
            
        </div>
    );
}
export default withNamespaces()(Jackpot);