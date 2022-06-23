import React, { useEffect, useState } from 'react';
import { getUser } from '../../helpers/storage';

export default function Header() {
  const [user, setUser] = useState('');

  useEffect(() => {
    setUser(getUser());
  }, []);

  return (
    <header>
      <h2>{user}</h2>
    </header>
  );
}
