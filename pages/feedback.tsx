import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Container from '../src/components/Container';
import Widget from '../src/components/Widget';
import { QuizContext } from '../src/Context';
import Button from '../src/components/Button';
import Header from '../src/components/Header';

function feedback() {
  const router = useRouter();
  const { assertions } = useContext(QuizContext);
  return (
    <>
      <Header />
      <Container>
        <Widget>
          <Widget.Header>Feedback</Widget.Header>
          <Widget.Content>
            <p>{`Você acertou ${assertions}`}</p>
            <Button onClick={() => router.push('/')}>Jogar Novamente</Button>
          </Widget.Content>
        </Widget>
      </Container>
    </>
  );
}

export default feedback;
