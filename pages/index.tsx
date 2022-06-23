import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Widget from '../src/components/Widget';
import Container from '../src/components/Container';
import Button from '../src/components/Button';
import { saveUSerOnStorage } from '../src/helpers/storage';

function LoginPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    saveUSerOnStorage(name);
    router.push(`/quiz?name=${name}`);
  };

  return (
    <Container>
      <Widget>
        <Widget.Header>Trivia</Widget.Header>
        <Widget.Content>
          <p>
            Teste seus conhecimentos com diversos quizzes personalizados e diverta-se
            criando o seu proprio Quiz!
          </p>
          <Widget.Form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Digite seu nome para jogar"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <Button type="submit">Jogar</Button>
          </Widget.Form>
        </Widget.Content>
      </Widget>
    </Container>
  );
}

export default LoginPage;
