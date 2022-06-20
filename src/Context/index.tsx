import {
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
}

const defaultValue = {} as IContext;
export const QuizContext = createContext(defaultValue);

export default function QuizProvider({ children }) {
  // const [questions, setQuestions] = useState(db.questions);
  const { questions } = db;
  const [questionIndex, setQuestionIndex] = useState(0);

  const quiz = useMemo(
    () => ({
      questions,
      questionIndex,
      setQuestionIndex,
    }),
    [questions],
  );

  return <QuizContext.Provider value={quiz}>{children}</QuizContext.Provider>;
}
