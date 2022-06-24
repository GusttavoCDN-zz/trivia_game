import { Dispatch, SetStateAction } from 'react';
import IQuiz from './IQuiz';

interface IContext {
  quiz: IQuiz;
  quizes: IQuiz[];
  assertions: number;
  time: number;
  isTimerOn: boolean;
  setAssertions: Dispatch<SetStateAction<number>>;
  setIsTimerOn: Dispatch<SetStateAction<boolean>>;
  setTime: Dispatch<SetStateAction<number>>;
  setQuizes: Dispatch<SetStateAction<IQuiz[]>>;
}

export default IContext;
