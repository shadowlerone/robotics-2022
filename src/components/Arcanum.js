import React from "react";
import { withNamespaces } from "react-i18next";
import './Arcanum.css';

function Arcanum({t}) {
    return (
        <div className="Arcanum">
            <span className="span" >
                <h1 className="titleArcanum" >{t('Arcanum')}</h1>
            </span>
            <div className="cadPane" >
                <iframe 
                    className="playingField"
                    title="Arcanum Playing Field" 
                    src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                    allowfullscreen="true" 
                    webkitallowfullscreen="true" 
                    mozallowfullscreen="true" 
                    frameborder="0">
                </iframe>
            </div>

            <div className="contentPane" >
                {/* <h1>{t('Arcanum')}</h1> */}
                
                <p>{t('placeholder')}</p>
            </div>
            
        </div>
    );
}
export default withNamespaces()(Arcanum);