import React from "react";
import { withNamespaces } from 'react-i18next';
import './ErrorPage.css'


function ErrorPage(props) {
    
    return (
        <>
            <img className="Cheshire" alt="cheshire" src={require("../assets/media/images/cat_landing.jpg")}/>
            <h1 className="error" >{props.t('error')}</h1>
            <h2 className="lost" >{props.t('lost')}</h2>
        </>
    );
}
export default withNamespaces()(ErrorPage);