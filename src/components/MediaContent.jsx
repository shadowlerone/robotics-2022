import React from 'react';

export default function MediaContent(props) {
    return (
        <div className='pairs'>
            <p className="contentBlurb" >{props.content}</p>
            <div className="mediaBlurb">
                <img src={props.media} alt={props.alt}/>
            </div>

        </div>
    );
}