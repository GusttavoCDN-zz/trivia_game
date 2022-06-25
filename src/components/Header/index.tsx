import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { AiOutlineUser } from 'react-icons/ai';
import { getUser } from '../../helpers/storage';
import logo from '../../assets/trivia.png';

const HeaderStyled = styled.header`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  margin-bottom: 3rem;
  background-color: #0a0a0a;
  color: white;

  div{
    display: flex;
    align-items: center;
  }

  .user__icon {
    width: 50px;
    height: 50px;
  }

  .logo {
    width: 250px;
    height: 100px;

    @media screen and (max-width: 600px) {
      width: 125px;
      height: 50px;
    }
  }
`;

export default function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <HeaderStyled>
      <div className="container__user">
        <AiOutlineUser className="user__icon" />
        <h2>{user}</h2>
      </div>

      <div>
        <img src={logo.src} alt="Logo" className="logo" />
      </div>

      <div>
        <h2>Score: 4909</h2>
      </div>
    </HeaderStyled>
  );
}
