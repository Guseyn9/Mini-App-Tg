import React from 'react'
import { styled } from 'styled-components'
import { StarBlock } from '../../../enteties/StarBlock/ui/StarBlock'

export const StarBlockContent = () => {
  const arr = [
    {
      text: 'Текст'
    },
    {
      text: 'Текст'
    },
    {
      text: 'Текст'
    }
  ]
  return (
    <Styled.starsContent>
      {arr.map((obj) => (
        <StarBlock text={obj.text} />
      ))
      }
    </Styled.starsContent>
  )
}

const Styled = {
  starsContent: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
}
