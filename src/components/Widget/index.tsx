import styled from 'styled-components';

const Widget = styled.section`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
`;

Widget.Content = styled.div`
  padding: 2rem;
`;

Widget.Header = styled.div`
  border: 1px solid black;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  padding: 1rem;
`;

Widget.Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input,
  button {
    padding: 0.5rem;
    margin: 0.5rem 0;
  }
`;

export default Widget;
