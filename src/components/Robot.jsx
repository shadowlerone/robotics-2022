import React from "react";
import { withNamespaces } from "react-i18next";
import './Robot.css'

function Robot({t}) {
    return (
        <>
            <div className="ArcanumR">
                <span className="span" >
                    <h1 className="titleR" >{t('Robot')}</h1>
                </span>
                <div className="cadPaneR" >
                    <div className="cadContainer" >
                        <iframe 
                            className="robot1"
                            title="Arcanum Playing Field" 
                            src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                            allowfullscreen="true" 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true" 
                            frameborder="0">
                        </iframe>
                        <iframe 
                            className="robot2"
                            title="Arcanum Playing Field" 
                            src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                            allowfullscreen="true" 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true" 
                            frameborder="0">
                        </iframe>
                        <iframe 
                            className="robot3"
                            title="Arcanum Playing Field" 
                            src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed"
                            allowfullscreen="true" 
                            webkitallowfullscreen="true" 
                            mozallowfullscreen="true" 
                            frameborder="0">
                        </iframe>
                    </div>
                </div>
                
                <div className="contentPaneR" >
                    <p>{t('placeholder')}</p>
                </div>

                
               
            </div>
        </>
    );
}
export default withNamespaces()(Robot);