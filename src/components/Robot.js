import React from "react";
import { withNamespaces } from "react-i18next";

function Robot({t}) {
    return (
        <div className="Robot">
            <div className="content">
                <h1>{t('Robot')}</h1>
                <p>{t('placeholder')}</p>
            </div>
        </div>
    );
}
export default withNamespaces()(Robot);