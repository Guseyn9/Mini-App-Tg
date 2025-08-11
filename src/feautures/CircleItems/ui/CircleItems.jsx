import React from 'react'
import circleIcon1 from '../common/size=m, State=Filled.png'
import circleIcon2 from '../common/Icon_Tribe.svg'
import { CircleItem } from '../../../enteties/CircleItem/ui/CircleItem'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'

export const CircleItems = ({ items, children }) => {
  const defaultCircles = [
    {
      id: 1,
      image: circleIcon1,
      name: 'Nahuy',
      countNp: '123,457,804,674 NP',
      rank: '#39,636',
      participants: 76,
      privileges: 'x9% фарминг'
    },
    {
      id: 2,
      image: circleIcon2,
      name: 'BlumVND',
      countNp: '123,457,804,674 NP',
      rank: '#52,854',
      participants: 36,
      privileges: 'x3% фарминг'
    },
    {
      id: 3,
      image: circleIcon2,
      name: 'Discussion Cryptodrop',
      countNp: '123,457,804,674 NP',
      rank: '#74,454',
      participants: 21,
      privileges: 'x5% фарминг'
    },
    {
      id: 4,
      image: circleIcon2,
      name: 'Discussion Cryptodrop',
      countNp: '123,457,804,674 NP',
      rank: '#74,454',
      participants: 21,
      privileges: 'x5% фарминг'
    },
    {
      id: 5,
      image: circleIcon2,
      name: 'Discussion Cryptodrop',
      countNp: '123,457,804,674 NP',
      rank: '#32,444',
      participants: 43,
      privileges: 'x7% фарминг'
    },
  ] 

  const circlesArr = items || defaultCircles;
  localStorage.setItem('circleItems', JSON.stringify(defaultCircles));
  return (
    <Styled.circlesList>
      {circlesArr.map((item) => (
        <CircleItem key={item.id} {...item}>
          {item.medal && <img src={item.medal} alt="medal" style={{ marginLeft: 'auto' }} />}
          {item.showId && <CustomText fz={20} style={{ marginLeft: 'auto' }}>#{item.id}</CustomText>}
          {typeof children === 'function' ? children(item) : children}
        </CircleItem>
      ))
      }
    </Styled.circlesList>
  )
}

const Styled = {
  circlesList: styled.ul`
    display: flex;
    flex-direction: column;
  `
}
