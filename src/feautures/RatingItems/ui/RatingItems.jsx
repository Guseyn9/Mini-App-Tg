import React from 'react'
import icon1 from '../config/Avatar-3.svg'
import icon2 from '../config/Avatar.svg'
import icon3 from '../config/Avatar-1.svg'
import icon4 from '../config/Avatar-2.svg'
import { styled } from 'styled-components'
import { RatingItem } from '../../../enteties/RatingItem/ui/RatingItem'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'

export const RatingItems = ({ items }) => {
  const itemsArr = [
    {
      id: 1,
      img: icon1,
      name: 'Иван Иванов',
      countNp: '233, 014 NP',
    },
    {
      id: 2,
      img: icon2,
      name: 'Вася Пупкин',
      countNp: '200, 030 NP',
    },
    {
      id: 3,
      img: icon3,
      name: 'Анна Петрова',
      countNp: '196, 234 NP',
    },
    {
      id: 4,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 5,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 6,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 7,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 8,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 9,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 10,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    },
    {
      id: 11,
      img: icon4,
      name: 'Анна Петрова',
      countNp: '160, 057 NP',
    }
  ]

  const ratingArr = items || itemsArr;
  localStorage.setItem('ratingItems', JSON.stringify(itemsArr));
  return (
    <Styled.ratingList>
      {ratingArr.map((item) => (
        <RatingItem key={item.id} {...item}>
          {item.medal && <img src={item.medal} alt="medal" style={{ marginLeft: 'auto' }} />}
          {item.showId && <CustomText fz={20} style={{ marginLeft: 'auto' }}>#{item.id}</CustomText>}
        </RatingItem>
      ))

      }
    </Styled.ratingList>
  )
}

const Styled = {
  ratingList: styled.ul`
    display: flex;
    flex-direction: column;
    max-height: 630px;
    overflow-y: scroll;
  `
}
