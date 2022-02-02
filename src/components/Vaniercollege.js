import React from "react";
import './Vaniercollege.css'
import { withNamespaces } from "react-i18next";

function Vaniercollege({t}) {
	return (
		<div className="Vaniercollege">
      		<h1>{t('VC')}</h1>
            <div className="content">
                <p>{t('placeholder')}</p>
            </div>
    	</div>
  	);
}
export default withNamespaces()(Vaniercollege);