import React from "react";
import { withNamespaces } from "react-i18next";

function Robot({t}) {
    return (
        <div className="Robot">
            <h1>{t('Robot')}</h1>
            <div className="content">
                <p>{t('placeholder')}</p>
            </div>
        </div>
    );
}
export default withNamespaces()(Robot);