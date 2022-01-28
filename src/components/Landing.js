import React from "react";
import './Landing.css';
// import Helmet from 'react-helmet';
import Background from '../content/media/images/BG_0.png';


export default function Landing() {
    return (
        <div style={{ zIndex: "1", height: "100vh", width: "100vw", backgroundImage: `url(${Background})`}}>
            {/* <style>{'body{background-size: 150px 150px;background-image: linear-gradient(45deg, rgb(255, 0, 221) 25%, transparent 25%, transparent), linear-gradient(-45deg, rgb(255, 0, 221) 25%, transparent 25%, transparent), linear-gradient(45deg, transparent 75%, rgb(255, 0, 221) 75%), linear-gradient(-45deg, #ff7cb5 75%, rgb(255, 0, 221) 75%)}'}</style> */}
            <h1>Alice</h1><h1 id="hi">in Vanierland</h1>
            <h3>Content in landing page</h3>
            
        </div>
    );
}
