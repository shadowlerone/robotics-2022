import React from "react";
import { withNamespaces } from "react-i18next";
import './Arcanum.css';

function Arcanum({t}) {
    return (
        <div className="Arcanum">
            <h1>{t('Arcanum')}</h1>
            <div className="content">
                <p>{t('placeholder')}</p>
                <iframe title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed" 
                    width="100%" 
                    height="70%" 
                    allowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameborder="0">
                </iframe>
            </div>
            
        </div>
    );
}
export default withNamespaces()(Arcanum);