import { Dispatch, SetStateAction } from 'react';
import IQuiz from './IQuiz';

interface IContext {
  quizzes: IQuiz[];
  assertions: number;
  time: number;
  isTimerOn: boolean;
  setAssertions: Dispatch<SetStateAction<number>>;
  setIsTimerOn: Dispatch<SetStateAction<boolean>>;
  setTime: Dispatch<SetStateAction<number>>;
  setQuizzes: Dispatch<SetStateAction<IQuiz[]>>;
  setQuizIndex: Dispatch<SetStateAction<number>>;
}

export default IContext;
