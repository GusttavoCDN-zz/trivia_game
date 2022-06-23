import React, { useContext, useState } from 'react';
import Container from '../src/components/Container';
import QuestionWidget from '../src/components/QuestionWidget';
import { QuizContext } from '../src/Context';

export default function QuizPage() {
  const { questionIndex, setQuestionIndex, totalQuestions } = useContext(QuizContext);
  const { question, setIsTimerOn, setTime } = useContext(QuizContext);

  const [chosenAlternative, setChosenAlternative] = useState(-1);
  const [next, setNext] = useState(false);

  const cleanHighLight = () => {
    const alternativesElements = document.querySelectorAll('.alternative');
    alternativesElements.forEach((alternative) => {
      alternative.parentElement.classList.remove('correct');
      alternative.parentElement.classList.remove('wrong');
    });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChosenAlternative(Number(value));
  };

  const confirmChosen = () => {
    setNext(true);
    setIsTimerOn(false);
  };

  const changeQuestion = () => {
    if (questionIndex === totalQuestions - 1) return;
    cleanHighLight();
    setQuestionIndex(questionIndex + 1);
    setTime(5);
    setIsTimerOn(true);
    setChosenAlternative(-1);
    setNext(false);
  };

  return (
    <Container>
      <QuestionWidget
        question={question}
        questionIndex={questionIndex}
        totalQuestions={totalQuestions}
        changeQuestion={changeQuestion}
        chosenAlternative={chosenAlternative}
        handleChange={handleChange}
        confirmChosen={confirmChosen}
        next={next}
        setNext={setNext}
      />
    </Container>
  );
}
