import IQuiz from '../interfaces/IQuiz';

const quizzes: IQuiz[] = [
  {
    title: 'Naruto Quiz',
    questions: [
      {
        title: 'Qual é o uchiha mais forte?',
        alternatives: ['Itachi', 'Sasuke', 'Madara', 'Obito'],
        answer: 0,
      },
      {
        title: 'Qual o lema do Kakashi?',
        alternatives: [
          'Um ninja sempre cumpre as regras',
          'Um ninja abandona sempre seus amigos',
          'Aquels que quebram as regras são lixo, mas aqueles que abandonam seu amigos são piores que lixo',
        ],
        answer: 2,
      },
      {
        title: 'Com quantos anos o Naruto se tornou Hokage?',
        alternatives: ['25', '20', '19', '18'],
        answer: 1,
      },
      {
        title: 'De qual time Neji, Rock Lee e Tenten fazem parte',
        alternatives: ['time 7', 'time 8', 'time 9', 'time 11'],
        answer: 3,
      },
    ],
  },
  {
    title: 'One Piece Quiz',
    questions: [
      {
        title: 'Qual o nome do capitão do One Piece?',
        alternatives: ['Monaka', 'Nami', 'Usopp', 'Shanks'],
        answer: 1,
      },
      {
        title: 'Quem é o younkou mais forte?',
        alternatives: ['Lufffy', 'Shanks', 'Buggy', 'Barba Negra'],
        answer: 2,
      },
    ],
  },
];

export default quizzes;
