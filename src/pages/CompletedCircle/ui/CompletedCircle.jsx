import React from 'react'
import { styled } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import checkIcon from '../config/Image_success.png'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'

export const SuccessCircle = () => {
  return (
    <Styled.content>
      <TopMenu img={arrowIcon} text='Назад' />
      <Styled.checkBlock>
        <Styled.checkImg src={checkIcon} />
        <CustomText fz={22} fw={500} style={{ marginBottom: '8px' }} textAlign='center'>Круг создан</CustomText>
        <CustomText fz={18} color='#898989' textAlign='center'>Пора собирать единомышленников</CustomText>
      </Styled.checkBlock>
      <CustomButton width='100%' fz='18px' fw='500' padding='15px 0'>Открыть круг</CustomButton>
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
}
