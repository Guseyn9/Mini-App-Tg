import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import homeIcon from '../assets/HomeIcon.svg';
import homeIcon2 from '../assets/Home_light.svg';
import taskIcon from '../assets/File_dock.svg';
import taskIcon2 from '../assets/File_dock_light.svg';
import ellipseIcon from '../assets/Logo_Nahuy.svg';
import ellipseIcon2 from '../assets/Logo_Nahuy_Light.svg';
import userAddIcon from '../assets/User_add.svg';
import userAddIcon2 from '../assets/User_add_light.svg';
import userBoxIcon from '../assets/User_box.svg';
import userBoxIcon2 from '../assets/User_box_light.svg';

export const navigation_item = () => {

  const NAVIATION_ITEM = [
    {
        link: '/',
        text: 'Главная',
        icon: homeIcon,
        activeIcon: homeIcon2,
    },
    {
        link: '/tasks',
        text: 'Задания',
        icon: taskIcon2,
        activeIcon: taskIcon,
    },
    {
        link: '/circle',
        icon: ellipseIcon,
        activeIcon: ellipseIcon2,
    },
    {
        link: '/friends',
        text: 'Друзья',
        icon: userAddIcon2,
        activeIcon: userAddIcon,
    },
    {
        link: '/user',
        text: 'Профиль',
        icon: userBoxIcon,
        activeIcon: userBoxIcon2,
    },
  ]
  return NAVIATION_ITEM
}