import React from "react";
import { withNamespaces } from 'react-i18next';
import "./Characters.css"

function CharacterCard(props) {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.front} alt={props.alt}/>                    
                </div>

                <div className="flip-card-back">
                    <img src={props.back} alt={props.alt}/>
                </div>
            </div>
        </div>
    );
}

function Characters({ t }) {    
    // var captainCards = [];
    // for (var i = 0; i < 6; i++) {
    //     captainCards.push
    //     (
    //         <div className="flip-card">
    //             <div className="flip-card-inner">
    //                 <div className="flip-card-front">
    //                     ♥&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Captains&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;♥
    //                     <img src={require("../assets/media/images/hat.png")} alt="Avatar" style={{width: "175px", borderRadius: "15px"}}/>
    //                     ♥♥♥♥♥♥♥♥♥♥♥
    //                     <h3>Shanmukh Iyer</h3>
    //                 </div>
    //                 <div className="flip-card-back">
    //                     <h1>John Doe</h1> 
    //                     <p>Architect & Engineer</p> 
    //                     <p>We love that guy</p>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // }

    var captains = [
        {
            front: require("../assets/media/images/members/fronts/captains/Sabrinas_TEAM_captain_card.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_build_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_prog_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        // {
        //     front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Emily.png"),
        //     back: require("../assets/media/images/members/backs/b_Emily.png"),
        //     alt: 'Card',
        // },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_web_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        // {
        //     front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Dellen.png"),
        //     back: require("../assets/media/images/members/backs/b_Dellen.png"),
        //     alt: 'Card',
        // },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Tramanh.png"),
            back: require("../assets/media/images/members/backs/b_Tramanh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_journ_Victoria.png"),
            back: require("../assets/media/images/members/backs/b_Victoria.png"),
            alt: 'Card',
        }
    ];
    var build = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_build_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Sabrina.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Eliot.png"),
            back: require("../assets/media/images/members/backs/b_Eliot.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Edelina.png"),
            back: require("../assets/media/images/members/backs/b_Edelina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Minhtri.png"),
            back: require("../assets/media/images/members/backs/b_Minhtri.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Bilal.png"),
            back: require("../assets/media/images/members/backs/b_Bilal.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Nathaniel.png"),
            back: require("../assets/media/images/members/backs/b_Nathaniel.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Saklian.png"),
            back: require("../assets/media/images/members/backs/b_Saklian.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Jonathan.png"),
            back: require("../assets/media/images/members/backs/b_Jonathan.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Massimo.png"),
            back: require("../assets/media/images/members/backs/b_Massimo.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/build/f_build_Leonardo.png"),
            back: require("../assets/media/images/members/backs/b_Leonardo.png"),
            alt: 'Card',
        }
    ];
    var programming = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_prog_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Minhtri.png"),
            back: require("../assets/media/images/members/backs/b_Minhtri.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Eliot.png"),
            back: require("../assets/media/images/members/backs/b_Eliot.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/programming/f_prog_Ethan.png"),
            back: require("../assets/media/images/members/backs/b_Ethan.png"),
            alt: 'Card',
        }
    ];
    var kiosk = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_kiosk_Emily.png"),
            back: require("../assets/media/images/members/backs/b_Emily.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Joy.png"),
            back: require("../assets/media/images/members/backs/b_Joy.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Joriz.png"),
            back: require("../assets/media/images/members/backs/b_Joriz.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Maya.png"),
            back: require("../assets/media/images/members/backs/b_Maya.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Sabrina.png"),
            back: require("../assets/media/images/members/backs/b_Sabrina.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/kiosk/f_kiosk_Gassia.png"),
            back: require("../assets/media/images/members/backs/b_Gassia.png"),
            alt: 'Card',
        }
    ];
    var website = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_web_Shanmukh.png"),
            back: require("../assets/media/images/members/backs/b_Shanmukh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Andrae.png"),
            back: require("../assets/media/images/members/backs/b_Andrae.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Jeanard.png"),
            back: require("../assets/media/images/members/backs/b_Jeanard.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Luca.png"),
            back: require("../assets/media/images/members/backs/b_Luca.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Alex.png"),
            back: require("../assets/media/images/members/backs/b_Alex.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/website/f_web_Adam.png"),
            back: require("../assets/media/images/members/backs/b_Adam.png"),
            alt: 'Card',
        }
    ];
    var video = [
        
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Tramanh.png"),
            back: require("../assets/media/images/members/backs/b_Tramanh.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_vid_Dellen.png"),
            back: require("../assets/media/images/members/backs/b_Dellen.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Anthony.png"),
            back: require("../assets/media/images/members/backs/b_Anthony.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Kalli.png"),
            back: require("../assets/media/images/members/backs/b_Kalli.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/video/f_vid_Miranda.png"),
            back: require("../assets/media/images/members/backs/b_Miranda.png"),
            alt: 'Card',
        }
    ];
    var journalism = [
        {
            front: require("../assets/media/images/members/fronts/captains/f_capt_journ_Victoria.png"),
            back: require("../assets/media/images/members/backs/b_Victoria.png"),
            alt: 'Card',
        },
        {
            front: require("../assets/media/images/members/fronts/journalism/f_journ_Flavia.png"),
            back: require("../assets/media/images/members/backs/b_Flavia.png"),
            alt: 'Card',
        }
    ];


    return (
        <div className="Characters" >
            {/* <h1 style={{margin: `0px`, height: `10%`}} >Our Characters</h1> */}
            <div className="cards">
                {/* {captainCards} */}
                <h1>{t("Captains: ")}</h1>
                {
                    captains.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Build Team: ")}</h1>
                {
                    build.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Programming Team: ")}</h1>
                {
                    programming.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Kiosk Team: ")}</h1>
                {
                    kiosk.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Website Team: ")}</h1>
                {
                    website.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Journalism Team: ")}</h1>
                {
                    journalism.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                <br/><br/><br/>
                <h1>{t("Video Team: ")}</h1>
                {
                    video.map((i) => {
                        return <CharacterCard front={i.front} back={i.back} alt={i.alt} />
                    })
                }
                

            </div>
        </div>
    );

}
export default withNamespaces()(Characters);