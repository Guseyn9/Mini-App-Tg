import React from 'react'
import { styled } from 'styled-components'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import closeSvg from '../../HomePage/config/Close_round.svg'
import userIcon from '../config/userIcon.svg'
import circleIcon from '../config/Icon_Tribe.svg'
import cryptoIcon from '../config/Cryptocurrency.svg'
import fireIcon from '../config/Icon_Fire.svg'
import editIcon from '../config/edit.svg'
import medalIcon from '../config/Icon_medal.svg'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { useNavigate } from 'react-router-dom'
import { ModalBlock } from '../../../shared/ModalBlock.jsx/ui/ModalBlock'
import { ModalCloseBtn } from '../../../shared/ModalCloseBtn/ui/ModalCloseBtn'

export const UserPage = () => {
  const navigate = useNavigate()
  const [gender, setGender] = React.useState('Мужской')
  const [modalVisible, setModalVisible] = React.useState(false)

  const goRating = () => {
    navigate("/user/rating");
  }

  const menGender = () => {
    setModalVisible(false)
    setGender('Мужской')
  }

  const femaleGender = () => {
    setModalVisible(false)
    setGender('Женский')
  }
  return (
    <>
      <TopMenu img={closeSvg} text='Закрыть' />
      <Styled.content>
        <img src={userIcon} alt="" style={{ marginBottom: '8px' }} />
        <Styled.nameBlock>
          <CustomText fz={16} style={{ marginRight: '4px' }}>Иван Иванов</CustomText>
          <img src={circleIcon} alt="" />
        </Styled.nameBlock>
        <CustomText color='#898989' style={{ marginBottom: '35px' }}>@Ivan12345</CustomText>
        <Styled.countBlocks>
          <Styled.countBlock>
            <img src={cryptoIcon} alt="" style={{ marginBottom: '4px' }} />
            <CustomText fz={12} color='#a7a7a7' style={{ marginBottom: '4px' }}>Баланс</CustomText>
            <CustomText fz={18} fw={600}>$ 39, 14</CustomText>
          </Styled.countBlock>
          <Styled.countBlock>
            <img src={fireIcon} alt="" style={{ marginBottom: '4px' }} />
            <CustomText fz={12} color='#a7a7a7' style={{ marginBottom: '4px' }}>Поинты</CustomText>
            <CustomText fz={18} fw={600}>233, 014 NP</CustomText>
          </Styled.countBlock>
        </Styled.countBlocks>
        <Styled.userData>
          <Styled.userDataBlock>
            <Styled.dataTextBlock>
              <CustomText fz={12} color='#B77FFF'>Имя пользователя</CustomText>
              <CustomText fz={16}>Иван Иванов</CustomText>
            </Styled.dataTextBlock>
            <Styled.editBtn>
              <img src={editIcon} alt="" />
            </Styled.editBtn>
          </Styled.userDataBlock>
          <Styled.userDataBlock>
            <Styled.dataTextBlock>
              <CustomText fz={12} color='#B77FFF'>Пол</CustomText>
              <CustomText fz={16}>{gender}</CustomText>
            </Styled.dataTextBlock>
            <Styled.editBtn onClick={() => setModalVisible(true)}>
              <img src={editIcon} alt="" />
            </Styled.editBtn>
          </Styled.userDataBlock>
          <Styled.userDataBlock>
            <Styled.dataTextBlock>
              <CustomText fz={12} color='#B77FFF'>Год рождения</CustomText>
              <CustomText fz={16}>1991</CustomText>
            </Styled.dataTextBlock>
            <Styled.editBtn>
              <img src={editIcon} alt="" />
            </Styled.editBtn>
          </Styled.userDataBlock>
        </Styled.userData>
        <Styled.ratingBlock onClick={goRating}>
          <CustomText fz={18}>Место в рейтинге</CustomText>
          <img src={medalIcon} alt="" />
        </Styled.ratingBlock>

        <ModalBlock transform={modalVisible && 'none'} visibility={modalVisible && 'visible'} opacity={modalVisible && '0.5'}>
            <ModalCloseBtn onClick={() => setModalVisible(false)} />
            <Styled.modalContent>
              <Styled.modalBtn>
                <CustomText color='#B77FFF'>Пол</CustomText>
              </Styled.modalBtn>
              <Styled.modalBtn onClick={() => menGender()}>Мужской</Styled.modalBtn>
              <Styled.modalBtn onClick={() => femaleGender()}>Женский</Styled.modalBtn>
            </Styled.modalContent>
          </ModalBlock>

      </Styled.content>
    </>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  nameBlock: styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  `,
  countBlocks: styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 24px;
    justify-content: space-between;
  `,
  countBlock: styled.div`
    width: 48%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FFFFFF12;
    border-radius: 24px;
    padding: 14px 0;
    flex-direction: column;
  `,
  userData: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF12;
    border-radius: 24px;
    padding: 20px;
    margin-bottom: 40px;
  `,
  userDataBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:not(:last-child) {
      padding-bottom: 10px;
      border-bottom: 1px solid #2B2B2B;
      margin-bottom: 10px;
    }
  `,
  dataTextBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
  ratingBlock: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 16px;
    justify-content: space-between;
    padding: 14px 20px;
  `,
  editBtn: styled.button`
    
  `,
  modalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  modalBtn: styled.button`
    font-size: 16px;
    color: #fcfcfc;
    display: flex;
    width: 100%;
    justify-content: center;
    padding-bottom: 16px;
    border-bottom: 1px solid #2B2B2B;

    &:not(:last-child) {
      margin-bottom: 16px;
    }
  `
}
