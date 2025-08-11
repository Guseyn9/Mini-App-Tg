import React from 'react'
import { styled } from 'styled-components'
import { ReferralItems } from '../../../feautures/ReferralItems/ui/ReferralItems'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import closeSvg from '../../HomePage/config/Close_round.svg'

export const ReferralsPage = () => {
  return (
    <>
      <FriendsMenu img={closeSvg} text='Закрыть' />
      <Styled.title>Рефералы</Styled.title>
      <ReferralItems />
    </>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
  `,
  title: styled.h2`
    font-size: 22px;
    font-weight: 500;
    color: #fcfcfc;
    margin-bottom: 24px;
  `
}

const FriendsMenu = styled(TopMenu)`
  margin-bottom: 32px;
`
