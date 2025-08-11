import React from 'react'
import { styled } from 'styled-components'
import { TasksCategoryItems } from '../../../feautures/TasksCategoryItems/ui/TasksCategoryItems'
import closeSvg from '../../HomePage/config/Close_round.svg'
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu'
import { TaskItems } from '../../../feautures/TaskItems/ui/TaskItems'

export const TasksPage = () => {
  const [categoryId, setCategoryId] = React.useState(0);
  return (
    <>
      <TopMenu img={closeSvg} text='Закрыть' />
      <Styled.title>Задания</Styled.title>
      <Categories value={categoryId} onClickCategory={(id) => setCategoryId(id)} />
      <TaskItems />
    </>
  )
}

const Styled = {
  content: styled.div`
    display: flex;
    flex-direction: column;
  `,
  title: styled.h2`
    font-size: 22px;
    font-weight: 500;
    margin-bottom: 16px;
    color: #fcfcfc;
  `
}

const Categories = styled(TasksCategoryItems)`
  margin-bottom: 24px;
`
