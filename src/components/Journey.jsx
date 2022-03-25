import React from 'react';
import './Journey.css';
import { withNamespaces } from 'react-i18next';
import MediaContent from './MediaContent';

function hide() {
    document.getElementById('staticRabbit').style.display = 'none';
    document.getElementById('downRabbit').style.display = 'block';
}
function show() {
    document.getElementById('staticRabbit').style.display = 'block';
    document.getElementById('downRabbit').style.display = 'none';
}

function Journey(props) {
    var pairs = [
        {
            content: props.t('placeholder-medium'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            content: props.t('placeholder-small'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
        {
            content: props.t('placeholder-small'),
            media: require("../assets/media/images/teapot_f.png"),
            alt: "Media here",
        },
    ]
    
    return (
        <>
            <div className="Journey">
                <span className="span" >
                    <h1>{props.t('Journey')}</h1>
                </span>
                {
                    pairs.map((i) => {
                        return <MediaContent media={i.media} alt={i.alt} content={i.content} />
                    })
                }
                <button style={{marginBottom: `50px`}} onClick={() => {
                    props.showSidebar();
                    setTimeout(() => {
                        document.getElementById('gallery').style.display = 'block';
                    } , 2500);
                }} >
                    <span onMouseOver={hide} onMouseOut={show} style={{width: `100%`, display: `flex`, flexDirection: `column`, margin: `0`}}>
                        <img id='staticRabbit' width="100px" src={require("../assets/media/images/rabbit.png")} alt="UpRabbit"/>

                        <img id='downRabbit' style={{display: `none`}}  width="100px" src={require("../assets/media/images/drabbit.png")} alt="DownRabbit"/>
                        <img id='hole'  width="100px" src={require("../assets/media/images/hole.png")} alt="hole"/>
                        
                    </span>
                    
                </button>
            </div>
        </>
    );
}

export default withNamespaces()(Journey);