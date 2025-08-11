import React, { useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavigationItem = ({ link, text, icon, activeIcon }) => {
  const [isItemActive, setIsItemAvtive] = useState(false)
  return (
    <NavLink
      style={({ isActive }) => {
        if (isActive) {
            setIsItemAvtive(true)
        } else {
            setIsItemAvtive(false)
        }
        return {
            textDecoration: 'none',
        }
      }}
      to={link}>
      <Styled.navItem>
        <Styled.navIcon src={isItemActive ? activeIcon : icon}/>
        <Styled.navName isActive={isItemActive}>{text}</Styled.navName>
      </Styled.navItem>
    </NavLink>
  )
}

const Styled = {
    navItem: styled.div`
      position: relative;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
    `,
    navIcon: styled.img`
      margin-bottom: 6px;
    `,
    navName: styled.span`
      font-size: 8px;
      line-height: 10px;
      font-weight: 400;
      color: ${({ isActive }) => isActive ? '#C19BF2' : '#fcfcfc'};
    `,
  }
