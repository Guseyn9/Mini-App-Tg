import React from 'react'
import { styled } from 'styled-components';
import { TasksCategoryItem } from '../../../enteties/TasksCategoryItem/ui/TasksCategoryItem';

export const TasksCategoryItems = ({ value, onClickCategory, className }) => {
  const itemsArr = [
    {
      name: "Daily",
    }, 
    {
      name: "Social",
    }, 
    {
      name: "Refs",
    },
    {
      name: "Claim",
    }
  ];
  return (
    <Styled.list className={className}>
      {itemsArr.map((item, i) => (
        <TasksCategoryItem key={i} nameBtn={item.name} onClick={() => onClickCategory(i)} selected={value === i} />
      ))
      }
    </Styled.list>
  )
}

const Styled = {
  list: styled.ul`
    width: 100%;
    display: flex;
    justify-content: space-between;
  `
}
