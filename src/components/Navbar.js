import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import * as GiIcons from 'react-icons/gi';
import * as Io5Icons from 'react-icons/io5';
import * as HeroIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { IconContext } from 'react-icons';
import i18n from '../i18n';
import { withNamespaces } from 'react-i18next';

function Navbar({t}) {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    const [lang, setLang] = useState(false);
    const toggleLang = () => {
        setLang(!lang);
        if (lang) {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('fr');
        }
    }
    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
            <div className='navbar'>
                <Link to='#' className='menu-bars'>
                    {/* <FaIcons.FaBars onClick={showSidebar} /> */}
                    <img alt='menu bars' src={require('../assets/media/images/bars.png')} width='150px' onClick={showSidebar}/>
                </Link>
            </div>
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
                            <span>{t('Landing')}</span>
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
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default withNamespaces()(Navbar);
