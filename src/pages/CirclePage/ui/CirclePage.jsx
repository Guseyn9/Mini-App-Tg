import React from 'react'
import { styled } from 'styled-components'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import closeSvg from '../../HomePage/config/Close_round.svg'
import bgIcon from '../config/comingBg.png'
import comingIcon from '../config/Logo.png'

export const CirclePage = () => {
  return (
    <>
      <CircleMenu img={closeSvg} text='Закрыть' />
      <Styled.bgImg src={bgIcon} />
      <Styled.content>
        <Styled.imgBlock>
          <img src={comingIcon} alt="" />
        </Styled.imgBlock>
        <Styled.comingBlock>
          <Styled.comingText>
            <CustomText fw={500} fz={16} style={{ display: 'inline-block' }}>Nahuy.online -</CustomText>
             платформа ментального благополучия.
          </Styled.comingText>
          <Styled.comingText>
            <CustomText fw={500} fz={16} textAlign='center'>Социальная сеть</CustomText>
            с оригинальным функционалом.
          </Styled.comingText>
          <Styled.comingText>
          Предварительная регистрация 
          на платформе доступна 
          только по <CustomText fw={500} fz={16}  style={{ display: 'inline-block' }}>инвайту</CustomText>
          </Styled.comingText>
          <Styled.addInput type='text' placeholder='Введите инвайт' />
          <CustomButton width='100%' padding='15px 0' fz='18px' fw='500'>Отправить</CustomButton>
        </Styled.comingBlock>
      </Styled.content>
    </>
  )
}

const Styled = {
  content: styled.div`
    position: relative;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  bgImg: styled.img`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100vh;
  `,
  imgBlock: styled.div`
    padding-left: 26px;
    margin-bottom: 16px;
  `,
  comingBlock: styled.div`
    background-color: #131212;
    border-radius: 24px;
    padding: 20px;
  `,
  comingText: styled.p`
    font-size: 16px;
    text-align: center;
    color: #898989;
    margin-bottom: 4px;
  `,
  addInput: styled.input`
    width: 100%;
    background-color: #fff;
    margin-bottom: 16px;
    border-radius: 100px;
    padding: 12px 20px;
    color: #898989;
    margin-top: 24px;
  `,
}

const CircleMenu = styled(TopMenu)`
  position: relative;
  z-index: 3;
`
