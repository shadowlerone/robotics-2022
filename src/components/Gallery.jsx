import React from "react";
import { withNamespaces } from 'react-i18next';
import './Gallery.css'


function Gallery({t}) {
    
    return (
        <div className="Gallery">
            <iframe title="embed" style={{borderRadius:`20px`}} src="https://open.spotify.com/embed/playlist/0Kancw0BHelk6f15BCL8ir?utm_source=generator&theme=0" width="50%" height="500" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            
        </div>
    );
}
export default withNamespaces()(Gallery);