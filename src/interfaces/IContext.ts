import { Dispatch, SetStateAction } from 'react';
import IQuestion from './IQuestion';
import IQuiz from './IQuiz';

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

export default IContext;
