import React, { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { CustomText } from '../../../shared/CustomText/ui/CustomText';
import flashIcon from '../config/flashIcon.svg'

const MAX_ENERGY = 90;
const DURATION_MS = 9 * 60 * 60 * 1000; // 9 часов в мс
const ENERGY_INTERVAL_MS = DURATION_MS / MAX_ENERGY;

const NPCountBlock = () => {
  const [startTime, setStartTime] = useState(() => {
    const saved = localStorage.getItem('energy_start');
    return saved ? new Date(saved) : new Date();
  });

  const [energy, setEnergy] = useState(() => {
    const saved = localStorage.getItem('energy_total');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [timeLeft, setTimeLeft] = useState(DURATION_MS);
  const [progress, setProgress] = useState(0);

  // Функция обновления состояния каждую секунду
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const elapsed = now - new Date(startTime);
      const remaining = Math.max(DURATION_MS - elapsed, 0);

      setTimeLeft(remaining);

      // Обновляем прогресс [0..1]
      const percent = Math.min(elapsed / DURATION_MS, 1);
      setProgress(percent);

      // Если всё собрано — останавливаем таймер
      if (elapsed >= DURATION_MS) {
        clearInterval(interval);
      }
      const collected = Math.floor(Math.min(elapsed / ENERGY_INTERVAL_MS, MAX_ENERGY));

      setEnergy(collected);
    }, 1000);

    return () => clearInterval(interval);
  }, [startTime]);

  // Форматирование времени
  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours}h ${minutes}m`;
  };

  // Интерполяция цвета от #B77FFF3D к #B77FFF
  const interpolateColor = progress => {
    const startColor = [183, 127, 255, 0.24]; // rgba для #B77FFF3D
    const endColor = [183, 127, 255, 1]; // rgba для #B77FFF

    const interpolated = startColor.map((start, i) =>
      start + (endColor[i] - start) * progress
    );

    return `rgba(${interpolated[0]}, ${interpolated[1]}, ${interpolated[2]}, ${interpolated[3]})`;
  };

  // Обработка клика — сброс
  const handleClick = () => {
    const now = new Date();
    const elapsed = now - new Date(startTime);
    const collected = Math.floor(Math.min(elapsed / ENERGY_INTERVAL_MS, MAX_ENERGY));
    localStorage.setItem('energy_total', energy.toString());
    setEnergy(0)

    setStartTime(now);
    localStorage.setItem('energy_start', now.toISOString());

    setProgress(0);
    setTimeLeft(DURATION_MS);
  };

  return (
    <Styled.container onClick={handleClick}>
      <Styled.content>
        <Styled.energyImg src={flashIcon} />
        <CustomText fz={16} fw={500}>Собрать {energy} NP</CustomText>
      </Styled.content>
      <div
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              height: '100%',
              width: `100%`,
              borderRadius: '24px',
              background: '#FFFFFF12',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                height: '100%',
                width: `${progress * 100}%`,
                backgroundColor: interpolateColor(progress),
                transition: 'width 1s linear, background-color 1s linear',
              }}
            />
          </div>

      {timeLeft > 0 && (
        <>
          <Timer fz={12} color='#898989'>{formatTime(timeLeft)}</Timer>
        </>
      )}

      {timeLeft <= 0 && (
        <></>
      )}
    </Styled.container>
  );
};

const Styled = {
  container: styled.div`
    cursor: pointer;
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #FFFFFF12;
    border-radius: 24px;
    padding: 13px 0;
    align-items: center;
  `,
  content: styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
  `,
  energyImg: styled.img`
    margin-right: 8px;
  `
}

const Timer = styled(CustomText)`
  position: absolute;
  right: 18px;
`

export default NPCountBlock;
