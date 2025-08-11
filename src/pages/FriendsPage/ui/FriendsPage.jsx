import React from 'react'
import { styled, keyframes, css } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import closeSvg from '../../HomePage/config/Close_round.svg'
import friendsBg from '../config/friendsBg.png'
import userIcon from '../../../widgets/UserBlock/config/userIcon.svg'
import presentIcon from '../config/Icon_Present.svg'
import flashIcon from '../config/Icon_Flash.svg'
import friendsIcon from '../config/Icon_Friends_mini.svg'
import qrImg from '../config/qr.png'
import addIcon from '../config/Icon_buttons.svg'
import arrowIcon2 from '../../JoinCircle/config/Close.svg'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { ModalBlock } from '../../../shared/ModalBlock.jsx/ui/ModalBlock'
import { ModalCloseBtn } from '../../../shared/ModalCloseBtn/ui/ModalCloseBtn'
import { useNavigate } from 'react-router-dom'

export const FriendsPage = () => {
  const [modalVisible, setModalVisible] = React.useState(false)
  const navigate = useNavigate()

  const goReferrals = () => {
    navigate('/friends/referrals')
  }

  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
    <Styled.PageWrapper>
      {isLoading && (
        <Styled.LoaderWrapper>
          <Styled.Loader />
        </Styled.LoaderWrapper>
      )}

      <Styled.ContentWrapper isVisible={!isLoading}>
        <FriendsMenu img={closeSvg} text='Закрыть' />
        <Styled.bgImg src={friendsBg} />
        <Styled.content>
          <Styled.userContent>
            <Styled.userIcon src={userIcon} />
            <CustomText fz={18}>Иван Иванов</CustomText>
          </Styled.userContent>
          <img src={presentIcon} alt="" style={{ marginBottom: '8px' }} />
          <Styled.friendsTitle>Зарабатывай поинты, приглашая друзей!</Styled.friendsTitle>
          <Styled.npBlock>
            <Styled.blockImg src={presentIcon} />
            <Styled.npBlockContent>
              <CustomText fz={22} fw={500} style={{ marginBottom: '6px' }}>0 NP</CustomText>
              <CustomText fz={16} color='#898989'>Собрать</CustomText>
            </Styled.npBlockContent>
            <CustomButton fz='18px' fw='500' padding='10px 16px' bgColor='#FFFFFF12'>Собрать</CustomButton>
          </Styled.npBlock>
          <Styled.npBlock>
            <Styled.blockImg src={flashIcon} />
              <CustomText fz={16} fw={500}>
                Зарабатывай 9%  от заработанных друзьями NP и 3% с их рефералов!
              </CustomText>
          </Styled.npBlock>
          <Styled.topBlock>
            <CustomText fz={20} fw={500}>Рефералы</CustomText>
            <Styled.allCirclesBtn onClick={goReferrals}>
              <Styled.arrowImg src={arrowIcon2} />
            </Styled.allCirclesBtn>
          </Styled.topBlock>
          <Styled.invitedBlock>
            <img src={friendsIcon} alt="" style={{ marginRight: '15px' }} />
            <CustomText fz={18} fw={500} style={{ marginRight: 'auto' }}>Приглашённые друзья</CustomText>
            <CustomText fz={18} fw={500}>0</CustomText>
          </Styled.invitedBlock>
          <InviteBtn fz='18px' fw='500' padding='15px 0' width='100%' onClick={() => setModalVisible(true)}>
            <img src={addIcon} alt="" />
            Пригласить друга
          </InviteBtn>

          <ModalBlock transform={modalVisible && 'none'} visibility={modalVisible && 'visible'} opacity={modalVisible && '0.5'}>
            <ModalCloseBtn onClick={() => setModalVisible(false)} />
            <Styled.modalContent>
              <CustomText fz={20} fw={500} style={{ marginBottom: '32px' }} textAlign='center'>Пригласить друга</CustomText>
              <Styled.qrBlock>
                <img src={qrImg} alt="" />
              </Styled.qrBlock>
              <CustomButton fz='18px' fw='500' padding='15px 0' width='100%' style={{ marginBottom: '16px' }}>Отправить</CustomButton>
              <CustomButton fz='18px' fw='500' padding='15px 0' width='100%'>Скопировать ссылку</CustomButton>
            </Styled.modalContent>
          </ModalBlock>
        </Styled.content>
      </Styled.ContentWrapper>
    </Styled.PageWrapper>
    </>
  )
}

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Styled = {
  content: styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
  `,
  bgImg: styled.img`
    position: absolute;
    width: 100%;
    top: 10px;
    left: 0;
  `,
  userContent: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 24px;
  `,
  userIcon: styled.img`
    width: 32px;
    height: 32px;
    margin-right: 12px;
  `,
  friendsTitle: styled.h2`
    max-width: 250px;
    font-size: 22px;
    font-weight: 500;
    text-align: center;
    color: #fcfcfc;
    margin-bottom: 16px;
  `,
  npBlock: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 16px;
    padding: 8px 20px;
  `,
  blockImg: styled.img`
    margin-right: 16px;
    padding-top: 8px;
  `,
  npBlockContent: styled.div`
    display: flex;
    flex-direction: column;
    margin-right: auto;
  `,
  topBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
  `,
  allCirclesBtn: styled.button`
    display: flex;
    align-items: center;
  `,
  arrowImg: styled.img`
    margin-left: 9px;
  `,
  invitedBlock: styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 16px;
    margin-bottom: 32px;
    padding: 14px 20px;
  `,
  modalContent: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  qrBlock: styled.div`
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 32px;
    padding: 26px;
  `,
  PageWrapper: styled.div`
    position: relative;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    width: 100%;
    background-color: #0F0F0F;
    z-index: 9999;
  `,
  Loader: styled.div`
    border: 4px solid rgba(255, 255, 255, 0.1);
    border-top: 4px solid #B77FFF;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    animation: ${rotate} 1s linear infinite;
  `,
  ContentWrapper: styled.div`
    opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
    pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
    transition: opacity 0.5s ease;
  `
}

const FriendsMenu = styled(TopMenu)`
  position: relative;
  margin-bottom: 32px;
  z-index: 3;
`

const InviteBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
  justify-content: center;
`
