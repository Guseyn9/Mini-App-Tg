import React from 'react'
import { styled } from 'styled-components'
import { navigation_item } from '../constants/NAVIGATION_ITEM'
import { NavigationItem } from '../../../enteties/NavigationItem/ui/NavigationItem'

export const Navigation = () => {
  const NAVIGATION_ITEM = navigation_item();
  return (
    <Styled.container>
      <Styled.content>
      <Styled.navigation>
        <Styled.navList>
          {NAVIGATION_ITEM.map((item) => (
            <NavigationItem {...item} key={item.text} />
          ))}
        </Styled.navList>
      </Styled.navigation>
    </Styled.content>
    </Styled.container>
    
  )
}

const Styled = {
    container: styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      position: fixed;
      bottom: 30px;
      left: 0;
      z-index: 3;
    `,
    content: styled.div`
      min-width: 600px;
      padding: 0 20px;

      @media(max-width: 600px) {
        width: 100%;
        min-width: unset;
      }
    `,
    navigation: styled.div`
      width: 100%;
      padding: 12px 20px;
      background-color: #1e1e1e;
      border-radius: 100px;
    `,
    navList: styled.ul`
      display: flex;
      justify-content: space-between;
    `,
}
