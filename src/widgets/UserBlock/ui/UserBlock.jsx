import React, { useState } from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import userIcon from '../config/userIcon.svg';
import tribeIcon from '../config/Icon_Tribe.svg'
import walletIcon from '../config/walletIcon.svg';
import tgIcon from '../config/tgIcon.svg';
import tonIcon from '../config/tonIcon.svg';
import myTonIcon from '../config/myTonIcon.svg';
import tonHubIcon from '../config/tonHubIcon.svg';
import bitgetIcon from '../config/bitgetIcon.svg';
import { ModalBlock } from '../../../shared/ModalBlock.jsx/ui/ModalBlock';
import { ModalCloseBtn } from '../../../shared/ModalCloseBtn/ui/ModalCloseBtn';
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton';
import { useNavigate } from 'react-router-dom';

export const UserBlock = (props) => {
  const [modalVisible, setModalVisible] = useState(false)
  const navigate = useNavigate()

  const goJoinCircle = () => {
    navigate('/joincircle')
  }

  return (
    <Styled.content>
      <Styled.userContent>
        <Styled.userIcon src={userIcon} />
        <CustomText fz={18}>Иван Иванов</CustomText>
        <Styled.addBtn onClick={goJoinCircle}>
          <img src={tribeIcon} alt="" />
        </Styled.addBtn>
      </Styled.userContent>
      <Styled.walletBtn onClick={() => setModalVisible(true)}>
        <Styled.walletIcon src={walletIcon} />
        <CustomText fz={16}>Wallet</CustomText>
      </Styled.walletBtn>
      <ModalWallet transform={modalVisible && 'none'} visibility={modalVisible && 'visible'} opacity={modalVisible && '0.5'}>
        <ModalCloseBtn onClick={() => setModalVisible(false)} />
        {props.homeModal && (
          <Styled.modalContent>
          <CustomText fz={18}>Connect your wallet</CustomText>
          <ModalDescr fz={15} textAlign='center' color='#898989'>Open wallet in Telegram or select your wallet to connect</ModalDescr>
          <ModalBtn fz='15px' width='100%' borderRadius='15px' padding='15px' bgColor='#31A6F5'>
            Open wallet in Telegram
            <Styled.modalIcon src={tgIcon} alt="" />
          </ModalBtn>
          <Styled.modalList>
            <Styled.modalItem>
              <Styled.modalItemIcon src={tonIcon} />
              <CustomText fz={14}>Tonkeeper</CustomText>
            </Styled.modalItem>
            <Styled.modalItem>
              <Styled.modalItemIcon src={myTonIcon} />
              <CustomText fz={14}>MyTonWallet</CustomText>
            </Styled.modalItem>
            <Styled.modalItem>
              <Styled.modalItemIcon src={tonHubIcon} />
              <CustomText fz={14}>TonHub</CustomText>
            </Styled.modalItem>
            <Styled.modalItem>
              <Styled.modalItemIcon src={bitgetIcon} />
              <CustomText fz={14} textAlign='center'>Bitget Wallet</CustomText>
            </Styled.modalItem>
          </Styled.modalList>
        </Styled.modalContent>
        )
        }
        {props.walletModal && (
          props.children
        )
        }
      </ModalWallet>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;

    @media(max-width: 360px) {
      flex-direction: column;
      align-items: center;
    }
  `,
  userContent: styled.div`
    display: flex;
    align-items: center;

    @media(max-width: 360px) {
      margin-bottom: 15px;
    }
  `,
  userIcon: styled.img`
    width: 32px;
    height: 32px;
    margin-right: 12px;
  `,
  addBtn: styled.button`
    margin-left: 8px;
  `,
  walletBtn: styled.button`
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 24px;
    padding: 11px 16px;
  `,
  walletIcon: styled.img`
    margin-right: 12px;
  `,
  modalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  modalIcon: styled.img`
    margin-left: 15px;
  `,
  modalList: styled.ul`
    display: flex;
  `,
  modalItem: styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;

    &:not(:last-child) {
      margin-right: 20px;
    }
  `,
  modalItemIcon: styled.img`
    width: 59px;
    height: 59px;
    margin-bottom: 8px;
  `
}

const ModalWallet = styled(ModalBlock)`
  
`

const ModalDescr = styled(CustomText)`
  max-width: 300px;
  margin-bottom: 20px;
  margin-top: 5px;
`

const ModalBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`