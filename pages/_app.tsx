import Head from 'next/head';
import { createGlobalStyle } from 'styled-components';
import React from 'react';
import QuizProvider from '../src/Context';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background: #F5F3F3;
  }
`;

interface IApp {
  Component: React.ComponentType<any>;
  pageProps: any;
}

export default function App({ Component, pageProps }: IApp) {
  return (
    <>
      <Head>
        <title>Trivia</title>
      </Head>
      <GlobalStyle />

      <QuizProvider>
        <Component {...pageProps} />
      </QuizProvider>
    </>
  );
}
