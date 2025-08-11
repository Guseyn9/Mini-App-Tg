import React from 'react'
import { RatingItems } from '../../../feautures/RatingItems/ui/RatingItems';
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import { TopMenu } from '../../../widgets/TopMenu/ui/TopMenu';
import closeSvg from '../../HomePage/config/Close_round.svg'
import medalIcon from '../../JoinCircle/config/Icon_medal.svg'
import medalIcon2 from '../../JoinCircle/config/Icon_medal2.svg'
import medalIcon3 from '../../JoinCircle/config/Icon_medal3.svg'

export const RatingPage = () => {
  const fullList = JSON.parse(localStorage.getItem('ratingItems')) || [];

  const shortList = fullList.map((item, index) => {
    const icons = [medalIcon, medalIcon2, medalIcon3];
    if (index < 3) {
      return {
        ...item,
        medal: icons[index],
      };
    } else {
      return {
        ...item,
        showId: true,
      };
    }
  });
  return (
    <>
      <TopMenu img={closeSvg} text='Закрыть' />
      <CustomText fz={20} fw={500} style={{ marginBottom: '24px' }}>Топ кругов</CustomText>
      <RatingItems items={shortList} />
    </>
  )
}
