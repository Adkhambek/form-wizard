import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeAgreements } from '../store/userSlice';
import { AgreementsInterface } from '../types';

function Step5() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AgreementsInterface>();

  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  function onSubmit(data: AgreementsInterface) {
    dispatch(storeAgreements(data));
    dispatch(increment());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          {...register('isAgreePersonalData', { required: true })}
        />
        I give my consent to the processing of my personal data
      </label>
      {errors.isAgreePersonalData && (
        <p className="error-message">You did not agree</p>
      )}

      <label htmlFor="cookie" className="checkbox-label">
        <input
          type="checkbox"
          {...register('isAgreeCookiePolicy', { required: true })}
        />
        I accept the site&apos;s cookie policy
      </label>
      {errors.isAgreeCookiePolicy && (
        <p className="error-message">You did not agree</p>
      )}
      <button type="submit">Next</button>
    </form>
  );
}

export default Step5;
