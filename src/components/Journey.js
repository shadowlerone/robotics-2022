import React from "react";
import { withNamespaces } from "react-i18next";

function Journey({t}) {
  return (
    <div className="Journey">
        <div className="content">
            <h1>{t('Journey')}</h1>
            <p>{t('placeholder')}</p>
        </div>
    </div>
  );
}

export default withNamespaces()(Journey);