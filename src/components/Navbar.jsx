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


function Navbar(props) {
    
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
                    <img alt='menu bars' src={require('../assets/media/images/bars.png')} width='150px' onClick={props.showSidebar}/>
                </Link>
            </div>
            <nav className={props.sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={props.showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                        <VscIcons.VscClose />
                        </Link>
                    </li>
                    <li className='nav-text'>
                        <Link to='#'>
                            <span onClick={toggleLang}>{props.t('Language')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/'>
                            <FaIcons.FaHome size={40} />
                            <span>{props.t('Home')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/menu'>
                            <GiIcons.GiTeapot size={50} />
                            <span>{props.t('Menu')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/robot'>
                            <FaIcons.FaRobot size={50} />
                            <span>{props.t('Robot')}</span>
                        </Link>
                    </li>

                    <li className="nav-text">
                        <Link to='/arcanum'>
                            <BsIcons.BsGearWideConnected size={50} />
                            <span>{props.t('Arcanum')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/journey'>
                            <GiIcons.GiRabbitHead size={80} />
                            <span>{props.t('Journey')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/characters'>
                            <HeroIcons.HiUsers size={46} />
                            <span>{props.t('Characters')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/vaniercollege'>
                            <Io5Icons.IoSchoolSharp size={40} />
                            <span>{props.t('VC')}</span>
                        </Link>
                    </li>
                    <li className="nav-text">
                        <Link to='/jackpot'>
                            <GiIcons.GiHoneypot size={50} />
                            <span>{props.t('Jackpot')}</span>
                        </Link>
                    </li>
                    <li className="nav-text" id='gallery' style={{display: `none`, borderStyle: `dashed`}}>
                        <Link to='/gallery'>
                            <GrIcons.GrGallery style={{filter: `invert(1)`}} size={40} />
                            <span>{props.t('Gallery')}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    );
}

export default withNamespaces()(Navbar);
