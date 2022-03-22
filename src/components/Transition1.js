import React from "react";
// import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';
import { Link } from 'react-router-dom';
import "./Transition.css"

function Transition1({t}) {
    

  return (
    <div className="Transition1">
        <div>
            <div className="continue-text">
                <h1>Are you sure you want to continue?</h1>
                
            </div>
        </div>

        <Link to="/transition-2">
            <p>Continue...</p>
        </Link>

    </div>
  );
}

export default withNamespaces()(Transition1);