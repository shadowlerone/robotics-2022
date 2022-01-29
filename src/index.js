import React from "react";
import ReactDOM from "react-dom";
import './i18n';

import App from "./components/App";

const rootElement = document.getElementById("root");
rootElement.style.cssText = "height:100vh;padding: 0;margin:0;";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);
