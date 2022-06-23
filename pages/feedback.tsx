import React, { useContext } from 'react';
import Container from '../src/components/Container';
import Widget from '../src/components/Widget';
import { QuizContext } from '../src/Context';

function feedback() {
  const { assertions, totalQuestions } = useContext(QuizContext);
  return (
    <Container>
      <Widget>
        <Widget.Header>Feedback</Widget.Header>
        <Widget.Content>
          <p>
            Você acertou
            {' '}
            {assertions}
            {' '}
            de
            {' '}
            {totalQuestions}
            {' '}
            questões.
          </p>
        </Widget.Content>
      </Widget>
    </Container>
  );
}

export default feedback;
