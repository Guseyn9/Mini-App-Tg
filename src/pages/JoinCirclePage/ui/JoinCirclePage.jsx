import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton';
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import arrowSvg from '../config/arrowSvg.svg'
import arrowSvg2 from '../config/arrowSvg2.svg'
import joinIcon from '../config/Icon_buttons.svg'
import addIcon from '../config/User_add_light.svg'
import arrowIcon2 from '../../JoinCircle/config/Close.svg'
import leaveIcon from '../config/Sign_in_squre_light.svg'
import { ModalBlock } from '../../../shared/ModalBlock.jsx/ui/ModalBlock';
import { ModalCloseBtn } from '../../../shared/ModalCloseBtn/ui/ModalCloseBtn';

export const JoinCirclePage = () => {
  const [inviteModal, setInviteModal] = useState(false);
  const [leaveModal, setLeaveModal] = useState(false);
  const [isJoined, setIsJoined] = useState(false);
  const location = useLocation();
  const navigate = useNavigate()
  const circleData = location.state?.circle;

  const goTopCircle = () => {
    navigate('/topcircle')
  }

  const leaveCircle = () => {
    setIsJoined(false)
    setLeaveModal(false)
  }

  return (
    <>
      <TopMenu img={arrowIcon} text='Назад' />
      <Styled.content>
      <ModalBlock transform={inviteModal && 'none'} visibility={inviteModal && 'visible'} opacity={inviteModal && '0.5'}>
        <ModalCloseBtn onClick={() => setInviteModal(false)} />
          <Styled.modalContent>
            <CustomText style={{ marginBottom: '24px' }} fz={20}>Пригласить в круг</CustomText>
            <Buttons width='100%' fz='18px' fw='500' padding='15px 0' style={{ marginBottom: '12px' }}>
              Отправить
            </Buttons>
            <Buttons width='100%' fz='18px' fw='500' padding='15px 0'>
              Скопировать ссылку
            </Buttons>
        </Styled.modalContent>
      </ModalBlock>

      <ModalBlock transform={leaveModal && 'none'} visibility={leaveModal && 'visible'} opacity={leaveModal && '0.5'}>
        <ModalCloseBtn onClick={() => setLeaveModal(false)} />
          <Styled.modalContent>
            <CustomText style={{ marginBottom: '8px' }} fz={20}>Покинуть круг?</CustomText>
            <CustomText fz={14} color='#a7a7a7' style={{ marginBottom: '24px' }}>tribes.leave.popup.message_owner</CustomText>
            <Buttons width='100%' fz='18px' fw='500' padding='15px 0' style={{ marginBottom: '12px' }} onClick={() => leaveCircle()}>
              Покинуть круг
            </Buttons>
            <Buttons width='100%' fz='18px' fw='500' padding='15px 0' bgColor='unset' border='1px solid #B77FFF' onClick={() => setLeaveModal(false)}>
              Отмена
            </Buttons>
        </Styled.modalContent>
      </ModalBlock>


        <Styled.circleBlock>
          <Styled.circleImg src={circleData.image} />
          <CircleName fz={22} fw={500}>{circleData.name}</CircleName>
          <Styled.circleCountBtn>
            <CircleCount fz={14} fw={500} color='#898989'>55,262</CircleCount>
            <img src={arrowSvg} alt="" />
          </Styled.circleCountBtn>
        </Styled.circleBlock>
        <Styled.buttonsBlock>
          {isJoined ? (
            <>
              <Buttons width='100%' fz='18px' fw='500' padding='15px 0' style={{ marginBottom: '16px' }} onClick={() => setInviteModal(true)}>
                <Styled.buttonsIcon src={addIcon} />
                Пригласить
              </Buttons>
              <Buttons width='100%' fz='18px' fw='500' padding='15px 0' bgColor='inherit' border='1px solid #B77FFF' onClick={() => setLeaveModal(true)}>
                <Styled.buttonsIcon src={leaveIcon} />
                Покинуть
              </Buttons>
            </>
          ) : (
            <>
              <Buttons width='100%' fz='18px' fw='500' padding='15px 0' style={{ marginBottom: '16px' }} onClick={() => setIsJoined(true)}>
                <Styled.buttonsIcon src={joinIcon} />
                Присоединиться
              </Buttons>
              <Buttons width='100%' fz='18px' fw='500' padding='15px 0' bgColor='inherit' border='1px solid #B77FFF' onClick={() => setInviteModal(true)}>
                <Styled.buttonsIcon src={addIcon} />
                Пригласить
              </Buttons>
            </>
          )}
        </Styled.buttonsBlock>
        <Styled.topBlock>
          <CustomText fz={18} fw={500}>Твой круг</CustomText>
          <Styled.allCirclesBtn onClick={goTopCircle}>
            <CustomText fz={16} fw={500}>Все</CustomText>
            <Styled.arrowImg src={arrowIcon2} />
          </Styled.allCirclesBtn>
        </Styled.topBlock>
        <Styled.paramsCircle>
          {isJoined ? (
            <>
              <Styled.paramsCircleBlock>
                <CustomText fz={14} color='#898989'>Привилегии</CustomText>
                <CircleCount fz={14}>{circleData.privileges}</CircleCount>
              </Styled.paramsCircleBlock>
              <Styled.paramsCircleBlock>
                <CustomText fz={14} color='#898989'>Твой личный ранг</CustomText>
                <CircleCount fz={14}>Участник</CircleCount>
              </Styled.paramsCircleBlock>
            </>
          ) : <></>}
          <Styled.paramsCircleBlock>
            <CustomText fz={14} color='#898989'>Ранг круга</CustomText>
            <Styled.rankBtn>
              <CircleCount fz={14}>{circleData.rank}</CircleCount>
              <img src={arrowSvg2} alt="" />
            </Styled.rankBtn>
          </Styled.paramsCircleBlock>
          <Styled.paramsCircleBlock>
            <CustomText fz={14} color='#898989'>Собрано кругов</CustomText>
            <CircleCount fz={14}>{circleData.countNp}</CircleCount>
          </Styled.paramsCircleBlock>
          <Styled.paramsCircleBlock style={{ marginBottom: '0' }}>
            <CustomText fz={14} color='#898989'>Участники</CustomText>
            <CircleCount fz={14}>{circleData.participants}</CircleCount>
          </Styled.paramsCircleBlock>
        </Styled.paramsCircle>
        <Styled.topBlock>
          <CustomText fz={18} fw={500}>Лидерборды</CustomText>
          <Styled.allCirclesBtn onClick={goTopCircle}>
            <CustomText fz={16} fw={500}>Все</CustomText>
            <Styled.arrowImg src={arrowIcon2} />
          </Styled.allCirclesBtn>
        </Styled.topBlock>
        <Styled.inviteBlock>
          <InviteText fz={14} color='#898989' textAlign='center'>Приглашай друзей, чтобы начать соревнование! </InviteText>
          <CustomButton bgColor='unset' fz='14px' fw='500' border='1px solid #B77FFF' padding='10px 20px' onClick={() => setInviteModal(true)}>Пригласить</CustomButton>
        </Styled.inviteBlock>
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
  circleBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 32px;
  `,
  circleImg: styled.img`
    width: 106px;
    margin-bottom: 16px;
  `,
  circleCountBtn: styled.button`
    display: flex;
    align-items: center;
  `,
  buttonsIcon: styled.img`
    margin-right: 10px;
  `,
  buttonsBlock: styled.div`
    width: 100%;
    margin-bottom: 56px;
  `,
  topBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
    align-items: center;
  `,
  allCirclesBtn: styled.button`
    display: flex;
    align-items: center;
  `,
  arrowImg: styled.img`
    margin-left: 9px;
  `,
  paramsCircle: styled.div`
    width: 100%;
    padding: 22px 20px;
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 25px;
  `,
  paramsCircleBlock: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 16px;
  `,
  rankBtn: styled.button`
    display: flex;
    align-items: center;
  `,
  inviteBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 29px 0;
    background-color: #FFFFFF12;
    border-radius: 24px;
  `,
  modalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}

const CircleName = styled(CustomText)`
  margin-bottom: 7px;
`

const CircleCount = styled(CustomText)`
  margin-right: 7px;
`

const Buttons = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const InviteText = styled(CustomText)`
  margin-bottom: 16px;
  max-width: 184px;
`