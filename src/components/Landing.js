import React from "react";
import './Landing.css';
// import Helmet from 'react-helmet';
// import Background from '../content/media/images/BG_0.png';
// import title from '../content/media/images/Items_5.png';

export default function Landing() {
    
    return (
        <>
            
            <img className="title" alt="title here" src={require("../content/media/images/Items_5.png")}/>
                                   
        </>
        
    );
}


// useEffect(() => {
// 	if(someStateYouExpectToChangeToTriggerTheBackgroundChange === 'what you expect it to be to trigger the bg change') {
// 		document.body.style.backgroundImage = 'url(path/img.png)' // double check my quotes
// 	}
// }, [someStateYouExpectToChangeToTriggerTheBackgroundChange])