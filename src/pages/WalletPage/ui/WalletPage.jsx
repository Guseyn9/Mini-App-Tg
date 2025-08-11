import React from 'react'
import { styled } from 'styled-components'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { Navigation } from '../../../widgets/Navigation/ui/Navigation'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import { UserBlock } from '../../../widgets/UserBlock/ui/UserBlock'
import closeSvg from '../../HomePage/config/Close_round.svg'
import activeIcon from '../config/Check_ring_duotone.svg'
import moneyIcon from '../config/Cryptocurrency.svg'

export const WalletPage = () => {
  return (
    <>
      <TopMenu img={closeSvg} text='Назад' />
      <UserBlock walletModal={true}>
        <Styled.modalContent>
          <ModalWalletText color='#B77FFF'>Кошелек</ModalWalletText>
          <Styled.activeWalletBlock>
            <CustomText fz={16}>U8..654</CustomText>
            <Styled.activeBlock>
              <Styled.modalIcon src={activeIcon} />
              <CustomText fz={16}>Активно</CustomText>
            </Styled.activeBlock>
          </Styled.activeWalletBlock>
          <CustomButton width='100%' borderRadius='100px' fz='18px' fw='500' padding='15px 0'>Отключить</CustomButton>
        </Styled.modalContent>
      </UserBlock>
      <Styled.content>
        <Styled.moneyImg src={moneyIcon} />
        <CustomText fz={32} fw={600}>$ 39, 14</CustomText>
      </Styled.content>
    </>
  )
}

const Styled = {
  content: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
  `,
  moneyImg: styled.img`
    margin-bottom: 8px;
  `,
  modalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  activeWalletBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 24px;
    padding: 11px 16px;
  `,
  activeBlock: styled.div`
    display: flex;
    align-items: center;
  `,
  modalIcon: styled.img`
    margin-right: 5px;
  `
}

const ModalWalletText = styled(CustomText)`
  margin-bottom: 16px;
`
