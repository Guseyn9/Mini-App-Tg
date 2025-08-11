import React from 'react'
import { styled } from 'styled-components'
import { ReferralItem } from '../../../enteties/ReferralItem/ui/ReferralItem'
import icon1 from '../config/icon1.svg'
import icon2 from '../config/icon2.svg'

export const ReferralItems = () => {
  const itemsArr = [
    {
      img: icon1,
      name: 'Иван Иванов',
      referralsCount: 1,
      npCount: '105 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '60 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 2,
      npCount: '150 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '20 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '60 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 2,
      npCount: '150 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '20 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '60 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 2,
      npCount: '150 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '20 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '60 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 2,
      npCount: '150 NP'
    },
    {
      img: icon2,
      name: 'Иван Иванов',
      referralsCount: 0,
      npCount: '20 NP'
    },
  ]
  return (
    <Styled.list>
      {itemsArr.map((item, i) => (
        <ReferralItem key={i} {...item} />
      ))

      }
    </Styled.list>
  )
}

const Styled = {
  list: styled.ul`
    display: flex;
    flex-direction: column;
    max-height: 620px;
    overflow-y: scroll;
  `
}
