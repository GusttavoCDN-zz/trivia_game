import styled from 'styled-components';
import Widget from '../src/components/Widget';

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export default function Home() {
  return (
    <LoginContainer>
      <Widget>
        <Widget.Header>Trivia</Widget.Header>
        <Widget.Content>
          <p>
            Teste seus conhecimentos com diversos quizzes personalizados e diverta-se
            criando o seu proprio Quiz!
          </p>
          <Widget.form>
            <input type="text" placeholder="Digite seu nome para jogar" />
            <button type="button">Jogar</button>
          </Widget.form>
        </Widget.Content>
      </Widget>
    </LoginContainer>
  );
}
