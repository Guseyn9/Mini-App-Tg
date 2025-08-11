import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { CustomButton } from '../../../shared/CustomButton/ui/CustomButton';
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import checkIcon from '../config/Hourglass.svg';
import fireIcon from '../config/fireIcon.svg'

const CheckInBlock = () => {
  const [count, setCount] = useState(0);
  const [nextAvailable, setNextAvailable] = useState(null);
  const [timeLeft, setTimeLeft] = useState('');

  // Загружаем из localStorage при монтировании
  useEffect(() => {
    const storedCount = localStorage.getItem('checkin_count');
    const storedTime = localStorage.getItem('next_checkin');

    if (storedCount) setCount(parseInt(storedCount, 10));
    if (storedTime) {
      const time = new Date(storedTime);
      setNextAvailable(time);
    }
  }, []);

  // Обновляем localStorage при изменении данных
  useEffect(() => {
    if (nextAvailable) {
      localStorage.setItem('next_checkin', nextAvailable.toISOString());
    }
  }, [count, nextAvailable]);

  // Обновляем таймер каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      if (nextAvailable) {
        const now = new Date();
        const diff = nextAvailable - now;
        if (diff <= 0) {
          setNextAvailable(null);
          setTimeLeft('');
        } else {
          const hours = Math.floor(diff / (1000 * 60 * 60));
          const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
          const seconds = Math.floor((diff % (1000 * 60)) / 1000);
          setTimeLeft(`${hours}h ${minutes}m`);
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [nextAvailable]);

  const handleCheckIn = () => {
    const now = new Date();
    const nextTime = new Date(now.getTime() + 24 * 60 * 60 * 1000); // +24 часа
    setCount(prev => prev + 1);
    const newCount = count + 1;
    localStorage.setItem('checkin_count', newCount.toString());
    setNextAvailable(nextTime);
  };

  return (
    <Styled.container>
      {nextAvailable ? (
        <Styled.content2>
          <Styled.checkImg src={checkIcon} />
          <Styled.stigmaContent>
            <CustomText fz={16}>{count}-дней Check-in</CustomText>
            <CustomText fz={16} color='#898989'>следующий клейм через {timeLeft}</CustomText>
          </Styled.stigmaContent>
        </Styled.content2>
      ) : (
        <Styled.content>
          <CountCheck>{count}-дней Check-in</CountCheck>
          <CheckBtn onClick={handleCheckIn}>
            Отметиться
            <img src={fireIcon} alt="" style={{ margin: '0 0 0 8px' }} />
          </CheckBtn>
        </Styled.content>
      )}
    </Styled.container>
  );
};

const Styled = {
  container: styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 14px 0;
    background-color: #FFFFFF12;
    border-radius: 24px;
    margin-bottom: 32px;
  `,
  content: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  content2: styled.div`
    display: flex;
    align-items: center;
  `,
  stigmaContent: styled.div`
    max-width: 180px;
    display: flex;
    flex-direction: column;
  `,
  checkImg: styled.img`
    margin-right: 10px
  `
}

const CountCheck = styled(CustomText)`
  margin-bottom: 8px;
`

const CheckBtn = styled(CustomButton)`
  display: flex;
  align-items: center;
`

export default CheckInBlock;