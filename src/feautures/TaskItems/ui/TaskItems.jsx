import React from 'react'
import youtubeIcon from '../config/YouTube.svg'
import npIcon from '../config/Icon_NP.svg'
import instaIcon from '../config/Instagram.svg'
import tgIcon from '../config/Telegram.svg'
import { styled } from 'styled-components'
import { TaskItem } from '../../../enteties/TaskItem/ui/TaskItem'

export const TaskItems = () => {
  const tasksArr = [
    {
      img: youtubeIcon,
      taskName: 'IstanBlum Recap',
      countNp: '+150 NP',
      stateBtn: 'start'
    },
    {
      img: youtubeIcon,
      taskName: 'Degens In The Sky',
      countNp: '+150 NP',
      stateBtn: 'progress'
    },
    {
      img: youtubeIcon,
      taskName: 'Dec 5 Crypto News',
      countNp: '+150 NP',
      stateBtn: 'success'
    },
    {
      img: npIcon,
      taskName: 'S1 Weekly Giveaway',
      countNp: '+250 NP',
      stateBtn: 'success'
    },
    {
      img: npIcon,
      taskName: 'S1 Weekly Giveaway',
      countNp: '+250 NP',
      stateBtn: 'success'
    },
    {
      img: instaIcon,
      taskName: 'Follow Blum CEO on IG',
      countNp: '+90 NP',
      stateBtn: 'success'
    },
    {
      img: npIcon,
      taskName: 'Memepad on Telegram',
      countNp: '+500 NP',
      stateBtn: 'collect'
    },
    {
      img: tgIcon,
      taskName: 'Memepad on Telegram',
      countNp: '+350 NP',
      stateBtn: 'collect'
    },
    {
      img: npIcon,
      taskName: 'Memepad on Telegram',
      countNp: '+200 NP',
      stateBtn: 'start'
    },
  ]
  return (
    <Styled.list>
      {tasksArr.map((item, i) => (
        <TaskItem key={i} {...item} />
      ))
      }
    </Styled.list>
  )
}

const Styled = {
  list: styled.ul`
    max-height: 580px;
    overflow: hidden;
    overflow-y: scroll;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center
  `
}
