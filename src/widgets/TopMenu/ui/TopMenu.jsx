import React from 'react'
import { MenuCloseBtn } from '../../../enteties/MenuCloseBtn/ui/MenuCloseBtn'
import { styled } from 'styled-components'
import arrowIcon from '../config/arrowSvg.svg'
import dotsIcon from '../config/Dots.svg'
import { useNavigate } from 'react-router-dom'

export const TopMenu = ({ img, text, className }) => {
  const navigate = useNavigate()

  const back = () => {
    navigate(-1)
  }
  return (
    <Styled.content className={className}>
      <MenuCloseBtn onClick={back} image={img} text={text} />
      <Styled.menuBtn>
        <Styled.menuBtnIcon src={arrowIcon} />
        <img src={dotsIcon} alt="" />
      </Styled.menuBtn>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
  `,
  menuBtn: styled.div`
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    padding: 8px 10px;
    border-radius: 16px;
  `,
  menuBtnIcon: styled.img`
    margin-right: 12px;
  `
}
