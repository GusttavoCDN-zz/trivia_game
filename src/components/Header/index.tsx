import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getUser } from '../../helpers/storage';
import userIMG from '../../assets/user.jpg';

const HeaderStyled = styled.header`
  display: flex;
  width: 100%;
  padding: 0.5rem 2rem;

  div {
    display: flex;
    align-items: center;
  }

  img {
    width: 50px;
    height: 50px;
  }
`;

export default function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <HeaderStyled>
      <div>
        <img src={userIMG.src} alt="User" />
        <h2>{user}</h2>
      </div>
    </HeaderStyled>
  );
}
