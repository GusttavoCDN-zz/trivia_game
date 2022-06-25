import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import Button from '../src/components/Button';
import Container from '../src/components/Container';
import Widget from '../src/components/Widget';
import { QuizContext } from '../src/Context';
import IQuestion from '../src/interfaces/IQuestion';
import IQuiz from '../src/interfaces/IQuiz';

const styles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

const INITIAL_ALTERNATIVES = {
  alternative1: '',
  alternative2: '',
  alternative3: '',
  alternative4: '',
};

function FormQuizPage() {
  const { quizzes, setQuizzes } = useContext(QuizContext);
  const [quiz, setQuiz] = useState<IQuiz>({ title: '', questions: [] });
  const [title, setTitle] = useState('');
  const [answer, setAnswer] = useState('');
  const [alternatives, setAlternatives] = useState(INITIAL_ALTERNATIVES);
  const [questionIndex, setQuestionIndex] = useState(1);

  const router = useRouter();

  const handleChangeAlternatives = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setAlternatives({ ...alternatives, [name]: value });
  };

  const saveQuestion = () => {
    const question: IQuestion = {
      title,
      answer: Number(answer) - 1,
      alternatives: Object.values(alternatives),
    };

    setQuiz({ ...quiz, questions: [...quiz.questions, question] });
    setTitle('');
    setAnswer('');
    setAlternatives(INITIAL_ALTERNATIVES);
    setQuestionIndex(questionIndex + 1);
    global.alert('Questão Salva com sucesso!');
  };

  const renderAlternatives = () => Object.keys(alternatives).map((alternative, index) => (
    <input
      key={index}
      type="text"
      placeholder={`Digite a alternativa ${index + 1}`}
      name={alternative}
      value={alternatives[alternative as keyof typeof alternatives]}
      onChange={handleChangeAlternatives}
    />
  ));

  const renderForm = () => (
    <>
      <input
        type="text"
        placeholder="Digite o nome do seu QUIZ"
        value={quiz.title}
        onChange={(event) => setQuiz({ ...quiz, title: event.target.value })}
      />

      <input
        type="text"
        value={title}
        placeholder="Digite o enunciado da questão"
        onChange={({ target }) => setTitle(target.value)}
      />
      {renderAlternatives()}
      <input
        type="number"
        value={answer}
        placeholder="Digite o número da resposta correta"
        onChange={({ target }) => setAnswer(target.value)}
      />
      <Button type="button" onClick={saveQuestion}>
        {`Salvar Questão ${questionIndex}`}
      </Button>
    </>
  );
  const saveQuiz = () => {
    setQuizzes([...quizzes, quiz]);
    global.alert('Quiz Salvo com sucesso!');
    router.push('/');
  };

  const renderSaveQuizButton = () => (
    <Button type="button" onClick={saveQuiz}>
      Save Quiz
    </Button>
  );

  return (
    <div style={styles}>
      <Container>
        <Widget>
          <Widget.Header>Novo Quiz</Widget.Header>
          <Widget.Content>
            <Widget.Form>
              {questionIndex <= 2 ? renderForm() : renderSaveQuizButton()}
            </Widget.Form>
          </Widget.Content>
        </Widget>
      </Container>
    </div>
  );
}

export default FormQuizPage;
