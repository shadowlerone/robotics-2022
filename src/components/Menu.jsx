import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from 'react-router-dom';
import './Menu.css'


// function hide() {
//     document.getElementById('staticRabbit').style.display = 'none';
//     document.getElementById('downRabbit').style.display = 'block';
// }

// function show() {
//     document.getElementById('staticRabbit').style.display = 'block';
//     document.getElementById('downRabbit').style.display = 'none';
// }

function MenuItem(props) {
    return (
        <Link to={props.to} className="menuitem">
            {/* <img className="menuimage" alt={props.alt} src={props.wsrc} width="300px" /> */}
            <img className="menuimage" alt={props.alt} src={props.src} width="300px" />
            <button className="label" >{props.name}</button>
        </Link>
    );
}

function Menu({ t }) {
    var menu = [
        {
            to: "/",
            name: t('Home'),
            src: require("../assets/media/images/teapot_f.png"),
            wsrc: require("../assets/media/images/teapot_w.png"),
            alt: 'teapot',
        },
        {
            to: "/journey",
            name: t('Journey'),
            src: require("../assets/media/images/pinkcup_f.png"),
            wsrc: require("../assets/media/images/teacup_w.png"),
            alt: "pinkcup"
        },
        {
            to: "/robot",
            name: t('Robot'),
            src: require("../assets/media/images/watch_f.png"),
            wsrc: require("../assets/media/images/watch_w.png"),
            alt: "watch"
        },
        {
            to: "/arcanum",
            name: t("Arcanum"),
            src: require("../assets/media/images/hat_f.png"),
            wsrc: require("../assets/media/images/hat_w.png"),
            alt: "hat"
        },
        {
            to: "/characters",
            name: t('Characters'),
            src: require("../assets/media/images/cards_f.png"),
            wsrc: require("../assets/media/images/cards_w.png"),
            alt: "cards"
        },
        {
            to: "/vaniercollege",
            name: t('VC'),
            src: require("../assets/media/images/bluecup_f.png"),
            wsrc: require("../assets/media/images/teacup_w.png"),
            alt: "blue cup"
        },
        {
            to: "/jackpot",
            name: t('Jackpot'),
            src: require("../assets/media/images/crown_f.png"),
            wsrc: require("../assets/media/images/crown_w.png"),
            alt: "Crown"
        }
    ];
    return (
        <div className="Menu">
            <div className="buttons-container">
                {
                    menu.map((m) => {
                        return <MenuItem name={m.name} to={m.to} src={m.src} wsrc={m.wsrc} alt={m.alt} />
                    })
                }
            </div>
        </div>
    );
}
export default withNamespaces()(Menu);