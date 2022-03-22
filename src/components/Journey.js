import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as GiIcons from 'react-icons/gi';
import * as Io5Icons from 'react-icons/io5';
import * as HeroIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import * as GrIcons from 'react-icons/gr';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';



function Journey({t}) {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const [gallery, setGallery] = useState(false);
    const showGallery = () => setGallery(!gallery);
    var unhidden = {
        display : "block"
    };
    var hidden = {
        display : "none"
    };
    const [lang, setLang] = useState(false);
    const toggleLang = () => {
        setLang(!lang);
        if (lang) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('fr');
        }
    }
    const toggleHidden = () => {
        showSidebar();
        showGallery();
    }

  return (
    <div className="Journey">
        <div className="content">
            <h1>{t('Journey')}</h1>
            <p>{t('placeholder')}</p>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Link to='#'>
                    <button onClick={toggleHidden}>UNHIDE</button>
                </Link>
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    <ul className='nav-menu-items' onClick={showSidebar}>
                        <li className='navbar-toggle'>
                            <Link to='#' className='menu-bars'>
                            <VscIcons.VscClose />
                            </Link>
                        </li>
                        <li className='nav-text'>
                            <Link to='#'>
                                <span onClick={toggleLang}>{t('Language')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/'>
                                <FaIcons.FaHome size={40} />
                                <span>{t('Home')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/menu'>
                                <GiIcons.GiTeapot size={50} />
                                <span>{t('Menu')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/robot'>
                                <FaIcons.FaRobot size={50} />
                                <span>{t('Robot')}</span>
                            </Link>
                        </li>

                        <li className="nav-text">
                            <Link to='/arcanum'>
                                <BsIcons.BsGearWideConnected size={50} />
                                <span>{t('Arcanum')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/journey'>
                                <GiIcons.GiRabbitHead size={80} />
                                <span>{t('Journey')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/characters'>
                                <HeroIcons.HiUsers size={46} />
                                <span>{t('Characters')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/vaniercollege'>
                                <Io5Icons.IoSchoolSharp size={40} />
                                <span>{t('VC')}</span>
                            </Link>
                        </li>
                        <li className="nav-text">
                            <Link to='/jackpot'>
                                <GiIcons.GiHoneypot size={50} />
                                <span>{t('Jackpot')}</span>
                            </Link>
                        </li>
                        <li id='hiddenGallery' className="nav-text" style={gallery ? {hidden} : {unhidden}}>
                            <Link to='/gallery'>
                                <GrIcons.GrGallery style={{filter: `invert(1)`}} size={40} />
                                <span>{t('Gallery')}</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </IconContext.Provider>
        </div>
    </div>
  );
}

export default withNamespaces()(Journey);