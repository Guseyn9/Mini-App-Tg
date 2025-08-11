import React from 'react'
import { styled } from 'styled-components'
import { CircleItems } from '../../../feautures/CircleItems/ui/CircleItems'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import medalIcon from '../../JoinCircle/config/Icon_medal.svg'
import medalIcon2 from '../../JoinCircle/config/Icon_medal2.svg'
import medalIcon3 from '../../JoinCircle/config/Icon_medal3.svg'

export const TopCircles = () => {
  const fullList = JSON.parse(localStorage.getItem('circleItems')) || [];

  const shortList = fullList.map((item, index) => {
    const icons = [medalIcon, medalIcon2, medalIcon3];
    if (index < 3) {
      return {
        ...item,
        medal: icons[index],
      };
    } else {
      return {
        ...item,
        showId: true,
      };
    }
  });
  return (
    <>
      <TopMenu img={arrowIcon} text='Назад' />
      <TopCirclesText fz={20} fw={500}>Топ кругов</TopCirclesText>
      <CircleItems items={shortList} />
    </>
  )
}

const Styled = {
  
}

const TopCirclesText = styled(CustomText)`
  margin-bottom: 24px;
`
