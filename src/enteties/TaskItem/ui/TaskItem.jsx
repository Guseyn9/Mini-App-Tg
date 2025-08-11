import React, { useState } from 'react'
import { styled, keyframes } from 'styled-components'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import timeIcon from '../config/time_Loader.svg'
import checkIcon from '../config/Check_ring_duotone.svg'
import checkIcon2 from '../config/check_ring_round_light.svg'

export const TaskItem = ({ img, taskName, countNp, stateBtn }) => {
  const [localState, setLocalState] = useState(stateBtn);
  const [showToast, setShowToast] = useState(false)
  const [toastLeaving, setToastLeaving] = useState(false)

  const handleClick = () => {
    if (localState === 'start') {
      setLocalState('progress')
    }
    if (localState === 'collect') {
      setLocalState('success')
      setShowToast(true)

      setTimeout(() => {
        setToastLeaving(true)
      }, 2000)

      setTimeout(() => {
        setShowToast(false)
        setToastLeaving(false)
      }, 2600)
    }
  }

  const renderBtnContent = () => {
    switch (localState) {
      case 'start':
        return 'Старт';
      case 'progress':
        return <img src={timeIcon} alt="В процессе" />;
      case 'collect':
        return 'Собрать';
      case 'success':
        return <img src={checkIcon} alt="Завершено" />;
      default:
        return null;
    }
  }

  const getBtnBgColor = () => {
    switch (localState) {
      case 'start':
        return '#FFFFFF12';
      case 'collect':
        return '#B77FFF';
      default:
        return '#FFFFFF12';
    }
  }
  return (
    <>
      {showToast && 
      <>
      <Styled.Toast $leaving={toastLeaving}>
      <img src={checkIcon2} alt="" style={{ marginRight: '8px' }} />
        {countNp} получено!
       </Styled.Toast>
      </>
      }
      <Styled.item>
        <Styled.itemIcon src={img} />
        <Styled.textBlock>
          <CustomText fz={16} fw={500} style={{ marginBottom: '4px' }}>{taskName}</CustomText>
          <CustomText fz={16} fw={500} color='#898989' style={{ marginBottom: '4px' }}>{countNp}</CustomText>
        </Styled.textBlock>
        <Styled.itemBtn $bg={getBtnBgColor()} onClick={handleClick}>
          {renderBtnContent()}
        </Styled.itemBtn>
      </Styled.item>
    </>
  )
}

const fadeIn = keyframes`
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0px);
    opacity: 1;
  }
`

const fadeOut = keyframes`
  from {
    transform: translateY(0);
    opacity: 1;
  }
  to {
    transform: translateY(-20px);
    opacity: 0;
  }
`

const Styled = {
  item: styled.li`
    width: 100%;
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: 16px;
    }

    &:nth-child(3n) {
      padding-bottom: 16px;
      border-bottom: 1px solid #2B2B2B;
    }
  `,
  itemIcon: styled.img`
    margin-right: 8px;
  `,
  textBlock: styled.div`
    display: flex;
    flex-direction: column;
  `,
  itemBtn: styled.button`
    background-color: ${(props) => props.$bg};
    border-radius: 100px;
    padding: 10px 14px;
    margin-left: auto;
    font-size: 14px;
    font-weight: 500;
    color: #fcfcfc;
    transition: all .3s ease-in-out;
  `,
  Toast: styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    top: 90px;
    transform: translateX(-50%);
    background-color: #2B2B2B;
    color: #fff;
    padding: 8px 12px;
    border-radius: 16px;
    font-size: 16px;
    font-weight: 400;
    z-index: 1000;
    animation: ${(props) => props.$leaving ? fadeOut : fadeIn} 0.6s ease forwards;
  `
}
