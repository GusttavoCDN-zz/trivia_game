import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import db from '../../db.json';

const INITIAL_TIME = 5;
export interface IQuestion {
  image: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface IContext {
  question: IQuestion;
  questionIndex: number;
  totalQuestions: number;
  time: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  isTimerOn: boolean;
  setIsTimerOn: Dispatch<SetStateAction<boolean>>;
  setTime: Dispatch<SetStateAction<number>>;
}

const defaultValue = {} as IContext;
export const QuizContext = createContext(defaultValue);

interface IQuizProviderProps {
  children: React.ReactNode;
}

export default function QuizProvider({ children }: IQuizProviderProps) {
  const { questions } = db;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [time, setTime] = useState(INITIAL_TIME);
  const [isTimerOn, setIsTimerOn] = useState(true);

  const currentQuestion = questions[questionIndex];

  const quiz = useMemo(
    () => ({
      question: currentQuestion,
      questionIndex,
      totalQuestions: questions.length,
      time,
      isTimerOn,
      setQuestionIndex,
      setIsTimerOn,
      setTime,
    }),
    [questions, isTimerOn, questionIndex, time],
  );

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
}
