import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';

function Step3() {
  const dispatch = useAppDispatch();

  return (
    <>
      <label htmlFor="firstName">
        First Name:
        <input type="text" id="firstName" name="firstName" required />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input type="text" id="lastName" name="lastName" required />
      </label>
      <label htmlFor="middleName">
        Middle Name:
        <input type="text" id="middleName" name="middleName" />
      </label>
      <label htmlFor="birthdate">
        Birthdate:
        <input type="date" id="birthdate" name="birthdate" />
      </label>
      <label htmlFor="email">
        Email:
        <input type="email" id="email" name="email" required />
      </label>
      <label htmlFor="gender">
        Gender:
        <select id="gender" name="gender" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label htmlFor="over18">
        <input type="checkbox" id="over18" name="over18" required />I am over 18
      </label>
      <button type="button" onClick={() => dispatch(increment())}>
        Next
      </button>
    </>
  );
}

export default Step3;
