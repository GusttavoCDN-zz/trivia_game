import React, { useContext, useEffect, useState } from 'react';
import { QuizContext } from '../../Context';
import Button from '../Button';
import Timer from '../Timer';
import Widget from '../Widget';

export default function QuestionWidget() {
  const { questionIndex, setQuestionIndex, totalQuestions } = useContext(QuizContext);

  const {
    question, isTimerOn, setIsTimerOn, setTime,
  } = useContext(QuizContext);

  const [chosenAlternative, setChosenAlternative] = useState(-1);
  const [next, setNext] = useState(false);
  const { alternatives, answer } = question;

  const highLightAlternatives = () => {
    for (let i = 0; i < alternatives.length; i += 1) {
      if (i === answer) {
        document
          .querySelector(`#alternative-${i}`)
          .parentElement.classList.add('correct');
      } else {
        document.querySelector(`#alternative-${i}`).parentElement.classList.add('wrong');
      }
    }
  };

  const cleanHighLight = () => {
    for (let i = 0; i < alternatives.length; i += 1) {
      document
        .querySelector(`#alternative-${i}`)
        .parentElement.classList.remove('correct');
      document.querySelector(`#alternative-${i}`).parentElement.classList.remove('wrong');
    }
  };

  useEffect(() => {
    if (isTimerOn) return;
    highLightAlternatives();
  }, [isTimerOn]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChosenAlternative(Number(value));
  };

  const confirmChosen = () => {
    setNext(true);
    setIsTimerOn(false);
  };

  const changeQuestion = () => {
    cleanHighLight();
    setQuestionIndex(questionIndex + 1);
    setTime(5);
    setIsTimerOn(true);
    setChosenAlternative(-1);
  };

  return (
    <Widget>
      <Widget.Header>
        {`Pergunta ${questionIndex + 1} de ${totalQuestions}`}
      </Widget.Header>
      <Timer />
      <Widget.Content>
        <h2>{question.title}</h2>
        <Widget.Form>
          {alternatives.map((alternative, i) => (
            <label
              htmlFor={`alternative-${i}`}
              key={i}
              className={`${chosenAlternative === i ? 'active' : ''}`}
            >
              <input
                type="radio"
                name="alternative"
                id={`alternative-${i}`}
                checked={chosenAlternative === i}
                value={i}
                onChange={handleChange}
              />
              {alternative}
            </label>
          ))}

          <Button type="button" onClick={confirmChosen}>
            Confirmar
          </Button>
          {next && (
            <Button type="button" onClick={changeQuestion}>
              Next
            </Button>
          )}
        </Widget.Form>
      </Widget.Content>
    </Widget>
  );
}
