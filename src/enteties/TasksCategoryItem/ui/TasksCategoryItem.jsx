import React from 'react'
import { styled } from 'styled-components'

export const TasksCategoryItem = ({ nameBtn, onClick, selected }) => {
  return (
    <Styled.item>
      <Styled.button onClick={onClick} selected={selected}>{nameBtn}</Styled.button>
    </Styled.item>
  )
}

const Styled = {
  item: styled.li``,
  button: styled.button`
    font-size: 16px;
    color: ${(props) => (props.selected ? '#B77FFF' : '#fcfcfc')};
    padding-bottom: 6px;
    border-bottom: 2px solid ${(props) => (props.selected ? '#B77FFF' : 'transparent')};
    border-width: 50%;
    transition: color .2s ease-in-out, border-color .2s ease-in-out;
  `
}
