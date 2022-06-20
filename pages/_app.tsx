import Head from 'next/head';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';
import QuizProvider from '../src/Context';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const { theme } = db;

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{db.title}</title>
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <QuizProvider>
          <Component {...pageProps} />
        </QuizProvider>
      </ThemeProvider>
    </>
  );
}
