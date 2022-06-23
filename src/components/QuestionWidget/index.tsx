/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from 'react';
import { QuizContext, IQuestion } from '../../Context';
import Button from '../Button';
import Timer from '../Timer';
import Widget from '../Widget';

interface IQuestionWidgetProps {
  question: IQuestion;
  questionIndex: number;
  totalQuestions: number;
  chosenAlternative: number;
  next: boolean;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  confirmChosen: () => void;
  changeQuestion: () => void;
}

export default function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  chosenAlternative,
  next,
  handleChange,
  confirmChosen,
  changeQuestion,
}: IQuestionWidgetProps) {
  const { isTimerOn } = useContext(QuizContext);
  const { alternatives, answer } = question;

  const highLightAlternatives = () => {
    const alternativesElements = document.querySelectorAll('.alternative');
    alternativesElements.forEach((alternative) => {
      if (alternative.id.includes(answer.toString())) {
        alternative.parentElement.classList.add('correct');
      } else alternative.parentElement.classList.add('wrong');
    });
  };

  useEffect(() => {
    if (isTimerOn) return;
    highLightAlternatives();
  }, [isTimerOn]);

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
                className="alternative"
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
