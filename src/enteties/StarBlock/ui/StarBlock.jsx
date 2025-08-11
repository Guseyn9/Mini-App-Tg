import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import starIcon from '../config/starIcon.svg';

export const StarBlock = ({ text }) => {
  return (
    <Styled.content>
      <Styled.starBlock>
        <img src={starIcon} alt="" />
      </Styled.starBlock>
      <CustomText fz={16}>{text}</CustomText>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  starBlock: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 72px;
    height: 72px;
    border-radius: 100%;
    background-color: #FFFFFF12;
    margin-bottom: 10px;
  `,
}
