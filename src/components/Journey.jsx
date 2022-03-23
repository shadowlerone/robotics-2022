import React from 'react';
import './Journey.css';
import { withNamespaces } from 'react-i18next';
import MediaContent from './MediaContent';

function Journey({t}) {
    var pairs = [
        {
            content: t('placeholder-medium'),
            media: require("../assets/media/images/teapot.png"),
            alt: "Media here",
        },
        {
            content: t('placeholder-small'),
            media: require("../assets/media/images/teapot.png"),
            alt: "Media here",
        },
        {
            content: t('placeholder-small'),
            media: require("../assets/media/images/teapot.png"),
            alt: "Media here",
        },
    ]
    
    return (
        <>
            <div className="Journey">
                <span className="span" >
                    <h1>{t('Journey')}</h1>
                </span>
                {
                    pairs.map((i) => {
                        return <MediaContent media={i.media} alt={i.alt} content={i.content} />
                    })
                }
                <button onClick={() => {console.log("clicked!")}} >
                    <img width="100px" src={require("../assets/media/images/rabbit.png")} alt="Rabbit"/>
                </button>
            </div>
        </>
    );
}

export default withNamespaces()(Journey);