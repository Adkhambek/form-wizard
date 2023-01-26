import React from 'react';
import { useAppSelector } from '../store/hooks';

function Step6() {
  const user = useAppSelector((state) => state.user);

  return (
    <>
      <h3>Summary of your input:</h3>
      <ul id="summary">
        <li>
          <b>Username:</b> {user.login.username}
        </li>
        <li>
          <b>Firstname:</b> {user.personalInfo.firstName}
        </li>
        <li>
          <b>Lastname:</b> {user.personalInfo.lastName}
        </li>
        <li>
          <b>Email:</b> {user.personalInfo.email}
        </li>
        <li>
          <b>Credit card number:</b> {user.creditCard}
        </li>
        <li>
          <b>Subscription type:</b> {user.subscription}
        </li>
      </ul>
      <button type="button" onClick={() => window.location.reload()}>
        Confirm
      </button>
    </>
  );
}

export default Step6;
