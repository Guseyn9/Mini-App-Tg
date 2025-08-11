import React from 'react'
import { styled } from 'styled-components'
import CheckInBlock from '../../../feautures/CheckInBlock/ui/CheckInBlock'
import NPCountBlock from '../../../feautures/NPCountBlock/ui/NPCountBlock'
import { StarBlockContent } from '../../../feautures/StarBlockContent/ui/StarBlockContent'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import { UserBlock } from '../../../widgets/UserBlock/ui/UserBlock'
import closeSvg from '../config/Close_round.svg'
import { Navigation } from '../../../widgets/Navigation/ui/Navigation'

export const HomePage = () => {
  return (
    <Styled.content>
      <TopMenu img={closeSvg} text='Закрыть' />
      <UserBlock homeModal={true} />
      <Styled.countNp>233, 014 NP</Styled.countNp>
      <Styled.starContent>
        <StarBlockContent />
      </Styled.starContent>
      <CheckInBlock />
      <NPCountBlock />
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  countNp: styled.span`
    display: inline-block;
    margin-bottom: 35px;
    font-size: 26px;
    color: #fcfcfc;
    font-weight: 600;
  `,
  starContent: styled.div`
    width: 100%;
    margin-bottom: 32px;
  `
}
