import React, { useEffect, useContext } from 'react';
import { QuizContext } from '../../Context';

const TIME_INTERVAL = 1000;

function Timer() {
  const { time, setTime } = useContext(QuizContext);
  const { isTimerOn, setIsTimerOn } = useContext(QuizContext);

  useEffect(() => {
    if (time === 0 || !isTimerOn) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, TIME_INTERVAL);

    return () => clearInterval(interval);
  }, [time, isTimerOn]);

  useEffect(() => {
    if (time === 0) setIsTimerOn(false);
  }, [setIsTimerOn, time]);

  return <span id="timer">{time}</span>;
}

export default Timer;
