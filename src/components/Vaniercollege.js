import React from "react";
import './Vaniercollege.css'
import { withNamespaces } from "react-i18next";

function Vaniercollege({t}) {
	return (
		<div className="Vaniercollege">
            <div className="content">

      		    <h1>{t('VC')}</h1>

                <iframe 
                    title="maps" 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3465.511663759468!2d-73.67758488406055!3d45.51597877910156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91840f9cb4ca1%3A0xce7f12be3902472b!2sVanier%20College!5e1!3m2!1sen!2sca!4v1644629004023!5m2!1sen!2sca" 
                    width="100%" 
                    height="600" 
                    loading="lazy">
                </iframe>
                
                <p>{t('placeholder')}</p>
            </div>
    	</div>
  	);
}
export default withNamespaces()(Vaniercollege);