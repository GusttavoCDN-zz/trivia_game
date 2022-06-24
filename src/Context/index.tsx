import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import db from '../../db.json';
import { IQuiz } from '../../pages/new_quiz';

const INITIAL_TIME = 5;
export interface IQuestion {
  image?: string;
  title: string;
  description?: string;
  answer: number;
  alternatives: string[];
}
interface IContext {
  question: IQuestion;
  questionIndex: number;
  quizes: IQuiz[];
  totalQuestions: number;
  assertions: number;
  time: number;
  isTimerOn: boolean;
  setAssertions: Dispatch<SetStateAction<number>>;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  setIsTimerOn: Dispatch<SetStateAction<boolean>>;
  setTime: Dispatch<SetStateAction<number>>;
  setQuizes: Dispatch<SetStateAction<IQuiz[]>>;
}

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
