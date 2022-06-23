import React, {
  createContext, Dispatch, SetStateAction, useMemo, useState,
} from 'react';
import db from '../../db.json';

interface IQuestion {
  image: string;
  title: string;
  description: string;
  answer: number;
  alternatives: string[];
}

interface IContext {
  questions: IQuestion[];
  questionIndex: number;
  setQuestionIndex: Dispatch<SetStateAction<number>>;
  isTimerOn: boolean;
  setIsTimerOn: Dispatch<SetStateAction<boolean>>;
}

const defaultValue = {} as IContext;
export const QuizContext = createContext(defaultValue);

interface IQuizProviderProps {
  children: React.ReactNode;
}

export default function QuizProvider({ children }: IQuizProviderProps) {
  // const [questions, setQuestions] = useState(db.questions);
  const { questions } = db;
  const [questionIndex, setQuestionIndex] = useState(0);
  const [isTimerOn, setIsTimerOn] = useState(true);

  const quiz = useMemo(
    () => ({
      questions,
      questionIndex,
      isTimerOn,
      setQuestionIndex,
      setIsTimerOn,
    }),
    [questions, isTimerOn],
  );

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
}
