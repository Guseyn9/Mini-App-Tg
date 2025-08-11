import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import checkIcon from '../config/Image_time.png'
import copyIcon from '../../CreateCircle/config/copyIcon.svg'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'

export const CheckCircle = () => {
  return (
    <Styled.content>
      <TopMenu img={arrowIcon} text='Назад' />
      <Styled.checkBlock>
        <Styled.checkImg src={checkIcon} />
        <CustomText fz={22} fw={500} style={{ marginBottom: '8px' }} textAlign='center'>Проверка ссылки чата</CustomText>
        <CustomText fz={18} color='#898989' textAlign='center'>Мы сообщим тебе, как только проверка будет завершена.</CustomText>
      </Styled.checkBlock>
      <Styled.addBlock>
        <Styled.addBotBlock>
          <Styled.addTextBlock>
            <CustomText fz={16} fw={500} style={{ marginBottom: '4px' }}>Добавь Nahuy бота в роли админа</CustomText>
            <CustomText fz={14} color='#898989'>@Nahuy_bot</CustomText>
          </Styled.addTextBlock>
          <img src={copyIcon} alt="" />
        </Styled.addBotBlock>
        <CustomButton width='100%' fz='18px' fw='500' padding='15px 0' style={{ marginBottom: '16px' }}>Присоединиться к кругу</CustomButton>
        <CustomButton width='100%' fz='18px' fw='500' padding='15px 0' bgColor='inherit' border='1px solid #B77FFF'>Создать новый</CustomButton>
      </Styled.addBlock>
    </Styled.content>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: calc(100vh - 60px);
  `,
  checkBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  checkImg: styled.img`
    margin-bottom: 32px;
  `,
  addBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
  `,
  addBotBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 24px;
  `,
  addTextBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
}
