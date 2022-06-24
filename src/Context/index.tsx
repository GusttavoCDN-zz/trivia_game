import React, { createContext, useMemo, useState } from 'react';
import IContext from '../interfaces/IContext';
import IQuiz from '../interfaces/IQuiz';
import INITIAL_QUIZZES from '../data';

const INITIAL_TIME = 5;

const defaultValue = {} as IContext;
export const QuizContext = createContext(defaultValue);

interface IQuizProviderProps {
  children: React.ReactNode;
}

export default function QuizProvider({ children }: IQuizProviderProps) {
  const [quizes, setQuizes] = useState<IQuiz[]>(INITIAL_QUIZZES);
  const [quizIndex, setQuizIndex] = useState(0);
  const [assertions, setAssertions] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME);
  const [isTimerOn, setIsTimerOn] = useState(true);

  const quiz = quizes[quizIndex];

  const context = useMemo(
    () => ({
      quiz,
      quizes,
      assertions,
      time,
      isTimerOn,
      setAssertions,
      setIsTimerOn,
      setTime,
      setQuizes,
    }),
    [quiz, isTimerOn, quizIndex, time, assertions, quizes],
  );

  return <QuizContext.Provider value={context}>{children}</QuizContext.Provider>;
}
