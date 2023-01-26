import React from 'react';

function Step1() {
  return (
    <>
      <label htmlFor="login">
        Login:
        <input type="text" id="login" name="login" />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" name="password" />
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input type="password" id="confirmPassword" name="confirmPassword" />
      </label>
    </>
  );
}

export default Step1;
