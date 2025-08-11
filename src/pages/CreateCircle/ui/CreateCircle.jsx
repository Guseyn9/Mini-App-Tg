import React from 'react'
import { styled, keyframes } from 'styled-components'
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import copyIcon from '../config/copyIcon.svg'
import iconTg from '../config/Icon_social.svg'
import warningIcon from '../config/warningIcon.svg'

export const CreateCircle = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <TopMenu img={arrowIcon} text='Назад' />
      <Styled.content>
        <Styled.title>Создать новый круг</Styled.title>
        <Styled.addBotBlock>
          <Styled.addTextBlock>
            <CustomText fz={16} fw={500} style={{ marginBottom: '4px' }}>Добавь Nahuy бота в роли админа</CustomText>
            <CustomText fz={14} color='#898989'>@Nahuy_bot</CustomText>
          </Styled.addTextBlock>
          <img src={copyIcon} alt="" />
        </Styled.addBotBlock>
        <Styled.addBlock>
          <Styled.tgBlock>
            <Styled.tgIcon src={iconTg} />
            <CustomText fz={16} fw={500}>Телеграм</CustomText>
          </Styled.tgBlock>
          <Styled.addInput type='text' placeholder='t.me/' />
          <CustomText fz={14} color='#898989'>Чат или канал, где ты являешься админом</CustomText>
        </Styled.addBlock>

        {isLoading && (
          <Styled.LoaderWrapper>
            <Styled.Loader />
          </Styled.LoaderWrapper>
        )}

        <Styled.ContentWrapper isVisible={!isLoading}>
          <Styled.warningBlock>
            <Styled.warningImg src={warningIcon} />
            <CustomText fz={16} color='#a7a7a7'>Вы можете удалить нашего бота из процесса проверки после успешного создания.</CustomText>
          </Styled.warningBlock>
        </Styled.ContentWrapper>

        <CustomButton width='100%' padding='15px 0' fz='18px' fw='500'>Создать</CustomButton>
      </Styled.content>
    </>
  )
}

const rotate = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
    height: 86vh;
  `,
  title: styled.h2`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 24px;
    color: #fcfcfc;
  `,
  addBotBlock: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 32px;
  `,
  addTextBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
  addBlock: styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: auto;
  `,
  tgBlock: styled.div`
    display: flex;
    margin-bottom: 8px;
    align-items: center;
  `,
  tgIcon: styled.img`
    margin-right: 8px;
  `,
  addInput: styled.input`
    width: 100%;
    background-color: #fff;
    margin-bottom: 8px;
    border-radius: 100px;
    padding: 12px 20px;
    color: #898989;
  `,
  warningBlock: styled.div`
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 32px;
    padding: 32px 30px;
    display: flex;
    align-items: center;
  `,
  warningImg: styled.img`
    margin-right: 16px;
  `,
  LoaderWrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
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
