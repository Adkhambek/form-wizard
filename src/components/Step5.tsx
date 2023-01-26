import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeAgreements } from '../store/userSlice';

function Step5() {
  const [isAgreePersonalData, setPersonalData] = useState(false);
  const [isAgreeCookiePolicy, setCookie] = useState(false);

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(storeAgreements({ isAgreeCookiePolicy, isAgreePersonalData }));
    dispatch(increment());
  }

  return (
    <>
      <label htmlFor="login">
        Login:
        <input
          type="text"
          id="login"
          name="login"
          value={user.login.username}
          disabled
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          name="email"
          value={user.personalInfo.email}
          disabled
        />
      </label>

      <label htmlFor="personalData" className="checkbox-label">
        <input
          type="checkbox"
          checked={isAgreePersonalData}
          onChange={(e) => setPersonalData(e.target.checked)}
          name="consentCookie"
          required
        />
        I give my consent to the processing of my personal data
      </label>

      <label htmlFor="cookie" className="checkbox-label">
        <input
          type="checkbox"
          checked={isAgreeCookiePolicy}
          onChange={(e) => setCookie(e.target.checked)}
          name="consentCookie"
          required
        />
        I accept the site&apos;s cookie policy
      </label>
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}

export default Step5;
