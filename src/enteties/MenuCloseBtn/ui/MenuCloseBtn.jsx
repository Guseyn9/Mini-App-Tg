import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'

export const MenuCloseBtn = ({ image, text, onClick }) => {
  return (
    <Styled.button onClick={onClick}>
      <Styled.icon src={image} />
      <CustomText>{text}</CustomText>
    </Styled.button>
  )
}

const Styled = {
  button: styled.button`
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    padding: 4px 8px;
    border-radius: 16px;
  `,
  icon: styled.img`
    margin-right: 10px;
  `
}
