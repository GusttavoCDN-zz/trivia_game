import React, { createContext, useMemo, useState } from 'react';
import db from '../../db.json';
import IContext from '../interfaces/IContext';
import IQuiz from '../interfaces/IQuiz';

const INITIAL_TIME = 5;

const defaultValue = {} as IContext;
export const QuizContext = createContext(defaultValue);

interface IQuizProviderProps {
  children: React.ReactNode;
}

export default function QuizProvider({ children }: IQuizProviderProps) {
  const { questions } = db;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [quizes, setQuizes] = useState<IQuiz[]>([]);
  const [assertions, setAssertions] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME);
  const [isTimerOn, setIsTimerOn] = useState(true);

  const currentQuestion = questions[questionIndex];

  const quiz = useMemo(
    () => ({
      question: currentQuestion,
      quizes,
      questionIndex,
      totalQuestions: questions.length,
      assertions,
      time,
      isTimerOn,
      setAssertions,
      setQuestionIndex,
      setIsTimerOn,
      setTime,
      setQuizes,
    }),
    [questions, isTimerOn, questionIndex, time, assertions, quizes],
  );

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
}
