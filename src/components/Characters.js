import React from "react";
import { withNamespaces } from 'react-i18next';

function Characters({ t }) {    
    return (
        <div>
            <h1>{t('Welcome to React')}</h1>
            <p>{t('test')}</p>
        </div>
    );

}
export default withNamespaces()(Characters);