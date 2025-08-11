import React from 'react'
import { styled } from 'styled-components'
import closeIcon from '../config/Close_round.svg'

export const ModalCloseBtn = ({ onClick }) => {
  return (
    <Styled.modalCloseBtn onClick={onClick}>
      <Styled.modalCloseIcon src={closeIcon} alt="" />
    </Styled.modalCloseBtn>
  )
}

const Styled = {
  modalCloseBtn: styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 24px;
    height: 24px;
    background-color: #FFFFFF12;
    border-radius: 100%;
  `,
  modalCloseIcon: styled.img`
    width: 16px;
    height: 16px;
  `
}
