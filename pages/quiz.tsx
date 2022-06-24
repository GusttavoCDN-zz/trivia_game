import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import Container from '../src/components/Container';
import QuestionWidget from '../src/components/QuestionWidget';
import { QuizContext } from '../src/Context';
import Header from '../src/components/Header';

function QuizPage() {
  const { quiz } = useContext(QuizContext);
  const [questions, setQuestions] = useState(quiz.questions);
  const [questionIndex, setQuestionIndex] = useState(0);
  const { setIsTimerOn, setTime } = useContext(QuizContext);
  const { setAssertions, assertions } = useContext(QuizContext);

  const question = questions[questionIndex];
  const totalQuestions = questions.length;

  const [chosenAlternative, setChosenAlternative] = useState(-1);
  const [next, setNext] = useState(false);

  const router = useRouter();

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

  const calculateScore = () => {
    if (chosenAlternative !== question.answer) return;
    setAssertions(assertions + 1);
  };

  const confirmChosen = () => {
    setNext(true);
    setIsTimerOn(false);
  };

  const changeQuestion = () => {
    calculateScore();
    if (questionIndex === totalQuestions - 1) {
      router.push('/feedback');
      return;
    }
    cleanHighLight();
    setQuestionIndex(questionIndex + 1);
    setTime(5);
    setIsTimerOn(true);
    setChosenAlternative(-1);
    setNext(false);
  };

  return (
    <>
      <Header />
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
    </>
  );
}

export default QuizPage;
