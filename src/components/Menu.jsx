import React from "react";
import { withNamespaces } from "react-i18next";
import { Link } from 'react-router-dom';
import './Menu.css'

function MenuItem(props) {
    return (
        <Link to={props.to} className="menuitem">
            <img className="menuimage" alt={props.alt} src={props.src} width="300px" />
            <button className="label" >{props.name}</button>
        </Link>)
}

function Menu({ t }) {
    var menu = [
        {
            to: "/",
            name: t('Home'),
            src: require("../assets/media/images/teapot.png"),
            alt: 'teapot',
        },
        {
            to: "/journey",
            name: t('Journey'),
            src: require("../assets/media/images/pinkcup.png"),
            alt: "pinkcup"
        },
        {
            to: "/robot",
            name: t('Robot'),
            src: require("../assets/media/images/watch.png"),
            alt: "watch"
        },
        {
            to: "/arcanum",
            name: t("Arcanum"),
            src: require("../assets/media/images/hat.png"),
            alt: "hat"
        },
        {
            to: "/characters",
            name: t('Characters'),
            src: require("../assets/media/images/cards.png"),
            alt: "cards"
        },
        {
            to: "/vaniercollege",
            name: t('VC'),
            src: require("../assets/media/images/bluecup.png"),
            alt: "blue cup"
        },
        {
            to: "/jackpot",
            name: t('Jackpot'),
            src: require("../assets/media/images/crown.png"),
            alt: "Crown"
        }
    ];
    return (
        <div className="Menu">
            <div className="buttons-container">
                {
                    menu.map((m) => {
                        return <MenuItem name={m.name} to={m.to} src={m.src} alt={m.alt} />
                    })
                }
            </div>
        </div>
    );
}
export default withNamespaces()(Menu);