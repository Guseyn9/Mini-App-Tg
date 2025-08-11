import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'

export const CircleItem = (props) => {
  return (
    <Styled.item>
      <Styled.itemImg src={props.image} />
      <Styled.itemContent>
        <CustomText fz={16} fw={500}>{props.name}</CustomText>
        <CustomText fz={12} fw={400} color='#898989'>{props.countNp}</CustomText>
      </Styled.itemContent>
      {props.children}
    </Styled.item>
  )
}

const Styled = {
  item: styled.li`
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  `,
  itemImg: styled.img`
    margin-right: 20px;
  `,
  itemContent: styled.div`
    display: flex;
    flex-direction: column;
  `
}
