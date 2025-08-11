import React from 'react'
import { styled } from 'styled-components'
import { CircleItems } from '../../../feautures/CircleItems/ui/CircleItems'
import { CustomText } from '../../../shared/CustomText/ui/CustomText'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import arrowIcon from '../../JoinCircle/config/arrowIcon.svg'
import arrowIcon2 from '../../JoinCircle/config/Close.svg'
import searchIcon from '../config/Search_alt_light.svg'
import { useNavigate } from 'react-router-dom';

export const FindCircle = () => {
  const navigate = useNavigate();
  const circlesArr = JSON.parse(localStorage.getItem('circleItems')) || [];

  const handleGoToCircle = (circle) => {
    navigate('/circlepage', { state: { circle } });
  };
  return (
    <>
      <TopMenu img={arrowIcon} text='Назад' />
      <Styled.findBlock>
        <CustomText fz={20} fw={500}>Найди свой круг по душе! </CustomText>
        <Styled.searchBtn>
          <img src={searchIcon} alt="" />
        </Styled.searchBtn>
      </Styled.findBlock>
      <CircleItems items={circlesArr}>
        {(item) => (
          <Styled.circleBtn onClick={() => handleGoToCircle(item)}>
            <img src={arrowIcon2} alt="" />
          </Styled.circleBtn>
        )}
      </CircleItems>
    </>
  )
}

const Styled = {
  findBlock: styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
    align-items: center;
  `,
  searchBtn: styled.button`
    width: 44px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #FFFFFF12;
    border-radius: 100%;
  `,
  circleBtn: styled.button`
    margin-left: auto;
  `
}
