import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';

function Step5() {
  const dispatch = useAppDispatch();

  return (
    <>
      <label htmlFor="login">
        Login:
        <input type="text" id="login" name="login" value="Adham" disabled />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value="muzaffarov.adah@gmail.com"
          disabled
        />
      </label>

      <label htmlFor="personalData" className="checkbox-label">
        <input type="checkbox" name="consentCookie" required />I give my consent
        to the processing of my personal data
      </label>

      <label htmlFor="cookie" className="checkbox-label">
        <input type="checkbox" name="consentCookie" required />I accept the
        site&apos;s cookie policy
      </label>
      <button type="button" onClick={() => dispatch(increment())}>
        Next
      </button>
    </>
  );
}

export default Step5;
