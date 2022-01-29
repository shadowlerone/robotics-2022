import React from "react";
import { withNamespaces } from "react-i18next";

function Arcanum({t}) {
    return (
        <div className="Arcanum">
            <h1>{t('Arcanum')}</h1>
            <iframe title="Arcanum Playing Field" src="https://myedu11994.autodesk360.com/shares/public/SH35dfcQT936092f0e430c4781ab51ec101b?mode=embed" width="1024" height="600" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
        </div>
    );
}
export default withNamespaces()(Arcanum);