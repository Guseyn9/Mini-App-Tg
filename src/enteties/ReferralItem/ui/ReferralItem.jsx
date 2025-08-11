import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import friendsIconMini from '../config/Icon_friends.svg'

export const ReferralItem = ({ img, name, referralsCount, npCount }) => {
  return (
    <Styled.item>
      <Styled.itemImg src={img} />
      <Styled.itemBlock>
        <CustomText fz={20} style={{ marginBottom: '10px' }}>{name}</CustomText>
        <Styled.itemReferralsBlock>
          <img src={friendsIconMini} alt="" style={{ marginRight: '4px' }} />
          <CustomText fz={14} color='#898989'>{referralsCount}</CustomText>
        </Styled.itemReferralsBlock>
      </Styled.itemBlock>
      <CustomText fz={18} fw={500}>{npCount}</CustomText>
    </Styled.item>
  )
}

const Styled = {
  item: styled.li`
    width: 100%;
    display: flex;
    align-items: flex-start;

    &:not(:last-child) {
      margin-bottom: 24px;
    }
  `,
  itemImg: styled.img`
    margin-right: 12px;
  `,
  itemBlock: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
  `,
  itemReferralsBlock: styled.div`
    display: flex;
  `
}
