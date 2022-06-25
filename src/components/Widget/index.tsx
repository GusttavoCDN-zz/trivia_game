import styled from 'styled-components';

const Widget: any = styled.section`
  background-color: #009ddc;
  border: 2px solid #009ddc;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: column;
  max-width: 350px;
  width: 100%;
  color: white;
`;

Widget.Content = styled.div`
  background-color: #000000;
  border-radius: 5px;
  padding: 2rem;
`;

Widget.Header = styled.div`
  border: 2px solid #009ddc;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  padding: 1rem;
`;

Widget.Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  input {
    background-color: transparent;
    border: 1px solid #009ddc;
    border-radius: 3.5px;
    padding: 0.5rem;
    margin: 0.5rem 0;
  }

  label {
    background-color: rgba(37, 36, 36, 0.5);
    border: 1px solid black;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
      rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
      rgba(0, 0, 0, 0.09) 0px -3px 5px;
    border-radius: 5px;
    margin: 0.5rem 0;
    padding: 1rem;
  }

  .active {
    background-color: #009ddc;
  }

  .correct {
    background-color: #0bf30b;
  }

  .wrong {
    background-color: #54b4da;
    text-decoration: line-through;
  }
`;

export default Widget;
