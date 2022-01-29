import React from 'react';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as Io5Icons from 'react-icons/io5';
import * as HeroIcons from 'react-icons/hi';
import * as BsIcons from 'react-icons/bs';

export const MenuData = [
    {
      title: 'Landing',
      path: '/',
      icon: <FaIcons.FaHome size={40} />,
      cName: 'nav-text'
    },
    {
      title: 'Menu',
      path: '/menu',
      icon: <GiIcons.GiTeapot size={40} />,
      cName: 'nav-text'
    },
    {
      title: 'Transition',
      path: '/transition',
    //   icon: <GiIcons.GiTeapot size={40} />,
      cName: 'nav-text'
    },
    {
      title: 'Arcanum 2022',
      path: '/arcanum',
      icon: <BsIcons.BsGearWideConnected size={40} />,
      cName: 'nav-text'
    },
    {
      title: 'Characters',
      path: '/characters',
      icon: <HeroIcons.HiUsers size={40} />,
      cName: 'nav-text'
    },
    {
      title: 'Vanier College',
      path: '/vaniercollege',
      icon: <Io5Icons.IoSchoolSharp size={40} />,
      cName: 'nav-text'
    },
    {
        title: 'French',
        path: '/french',
        icon: <Io5Icons.IoSchoolSharp size={40} />,
        cName: 'nav-text'
    }
  ];