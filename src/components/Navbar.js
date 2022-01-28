import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as VscIcons from 'react-icons/vsc';
import { Link } from 'react-router-dom';
import { MenuData } from './MenuData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
            <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
            </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
            <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
                <Link to='#' className='menu-bars'>
                <VscIcons.VscClose />
                </Link>
            </li>
            {MenuData.map((item, index) => {
                return (
                <li key={index} className={item.cName}>
                    <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                    </Link>
                </li>
                );
            })}
            </ul>
        </nav>
        </IconContext.Provider>
    </>
    );
}

export default Navbar;

{/* <div className="navbar">
            <div className="buttons-container">
                <Link to="/">
                    <button>Landing</button>
                </Link>
                <Link to="/menu">
                    <button>Menu</button>
                </Link>
                <Link to="/transition">
                    <button>Transition</button>
                </Link>
                <Link to="/journey">
                    <button>Journey</button>
                </Link>
                <Link to="/arcanum">
                    <button>Arcanum 2022</button>
                </Link>
                <Link to="/characters">
                    <button>Characters</button>
                </Link>
                <Link to="/vaniercollege">
                    <button>Vanier College</button>
                </Link>
            </div>
        </div> */}