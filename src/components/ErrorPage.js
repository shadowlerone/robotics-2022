import React from "react";
import { withNamespaces } from 'react-i18next';
import './ErrorPage.css'


function ErrorPage({t}) {
    
    return (
        <div className="ErrorPage">
            <h1>{t('error')}</h1>
            <h2>{t('lost')}</h2>
            {/* <img style={{style}} className="CheshireCat" alt="Cat" src={require("../assets/media/images/cat_landing.jpg")}/> */}
        </div>
    );
}
export default withNamespaces()(ErrorPage);