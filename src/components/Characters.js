import React from "react";
import { withNamespaces } from 'react-i18next';

function Characters({ t }) {    
    return (
        <div>
            <h1>{t('Characters')}</h1>
            
        </div>
    );

}
export default withNamespaces()(Characters);