import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
    {
      title: 'Landing',
      path: '/',
      icon: <AiIcons.AiFillHome />,
      cName: 'nav-text'
    },
    {
      title: 'Menu',
      path: '/menu',
      icon: <IoIcons.IoIosPaper />,
      cName: 'nav-text'
    },
    {
      title: 'Transition',
      path: '/transition',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Arcanum 2022',
      path: '/arcanum',
      icon: <IoIcons.IoMdPeople />,
      cName: 'nav-text'
    },
    {
      title: 'Characters',
      path: '/characters',
      icon: <FaIcons.FaEnvelopeOpenText />,
      cName: 'nav-text'
    },
    {
      title: 'Vanier College',
      path: '/vaniercollege',
      icon: <IoIcons.IoMdHelpCircle />,
      cName: 'nav-text'
    }
  ];