import React from 'react'
import { styled } from 'styled-components'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import arrowIcon from '../config/arrowIcon.svg'
import contentIcon from '../config/Image.png'
import arrowIcon2 from '../config/Close.svg'
import medalIcon from '../config/Icon_medal.svg'
import medalIcon2 from '../config/Icon_medal2.svg'
import medalIcon3 from '../config/Icon_medal3.svg'
import { CircleItems } from '../../../feautures/CircleItems/ui/CircleItems'
import { useNavigate } from 'react-router-dom'

export const JoinCircle = () => {
  const navigate = useNavigate()
  const fullList = JSON.parse(localStorage.getItem('circleItems')) || [];

  const shortList = fullList.slice(0, 3).map((item, index) => {
    const icons = [medalIcon, medalIcon2, medalIcon3];
    return {
      ...item,
      medal: icons[index] // добавим отдельное поле medal
    };
  });

  const goFindCircle = () => {
    navigate('/findcircle')
  }

  const goTopCircle = () => {
    navigate('/topcircle')
  }

  const goCreateCircle = () => {
    navigate('/createcircle')
  }
  return (
    <>
      <TopMenuBlock img={arrowIcon} text='Назад' />
      <Styled.content>
        <Styled.bgIcon src={contentIcon} />
        <Styled.joinTitle>Вступай в круг и начни своё путешествие!</Styled.joinTitle>
        <Styled.joinDescr>Фарми на 9% быстрее, став участником круга или владельцем</Styled.joinDescr>
        <JoinBtn onClick={goFindCircle} width='100%' fz='18px' fw='500' padding='15px 0'>Присоединиться к кругу</JoinBtn>
        <CreateBtn width='100%' fz='18px' fw='500' padding='15px 0' bgColor='inherit' border='1px solid #B77FFF' onClick={goCreateCircle}>Создать новый</CreateBtn>
        <Styled.topBlock>
          <CustomText fz={18} fw={500}>Топ кругов</CustomText>
          <Styled.allCirclesBtn onClick={goTopCircle}>
            <CustomText fz={16} fw={500}>Все</CustomText>
            <Styled.arrowImg src={arrowIcon2} />
          </Styled.allCirclesBtn>
        </Styled.topBlock>
        <Styled.topCircles>
          <CircleItems items={shortList} />
        </Styled.topCircles>
      </Styled.content>
    </>
  )
}

const Styled = {
  content: styled.div`
    padding-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  bgIcon: styled.img`
    position: absolute;
    width: 100%;
    left: 0;
    top: 10px;
    max-height: 480px;
  `,
  joinTitle: styled.h1`
    max-width: 300px;
    font-size: 32px;
    font-weight: 600;
    margin-bottom: 30px;
    text-align: center;
    color: #fcfcfc;
    z-index: 2;
  `,
  joinDescr: styled.p`
    max-width: 200px;
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 32px;
    text-align: center;
    color: #fcfcfc;
    z-index: 2;
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
  topCircles: styled.div`
    width: 100%;
    padding: 22px 20px;
    background-color: #FFFFFF12;
    border-radius: 24px;
  `,
  circleIcon: styled.img`
    margin-left: auto;
  `
}

const TopMenuBlock = styled(TopMenu)`
  position: relative;
  margin-bottom: 0;
  z-index: 2;
`

const JoinBtn = styled(CustomButton)`
  margin-bottom: 16px;
`

const CreateBtn = styled(CustomButton)`
  margin-bottom: 56px;
`
