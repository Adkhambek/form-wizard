import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeLogin } from '../store/userSlice';

function Step1() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(storeLogin({ username, password }));
    dispatch(increment());
  }

  return (
    <>
      <label htmlFor="login">
        Login:
        <input
          type="text"
          value={username}
          id="login"
          name="login"
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          value={password}
          id="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input type="password" id="confirmPassword" name="confirmPassword" />
      </label>
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}

export default Step1;
