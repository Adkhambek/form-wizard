import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storePersonalInfo } from '../store/userSlice';
import { PersonalInfoInterface, Gender } from '../types';

function Step3() {
  const initialValue: PersonalInfoInterface = {
    firstName: '',
    lastName: '',
    middleName: '',
    birthday: '',
    email: '',
    gender: 'male',
    isAdult: false,
  };

  const [values, setValues] = useState<PersonalInfoInterface>(initialValue);

  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(storePersonalInfo(values));

    dispatch(increment());
  }

  return (
    <>
      <label htmlFor="firstName">
        First Name:
        <input
          type="text"
          id="firstName"
          value={values.firstName}
          name="firstName"
          onChange={(e) => setValues({ ...values, firstName: e.target.value })}
          required
        />
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          id="lastName"
          value={values.lastName}
          name="lastName"
          onChange={(e) => setValues({ ...values, lastName: e.target.value })}
          required
        />
      </label>
      <label htmlFor="middleName">
        Middle Name:
        <input
          type="text"
          id="middleName"
          value={values.middleName}
          name="middleName"
          onChange={(e) => setValues({ ...values, middleName: e.target.value })}
        />
      </label>
      <label htmlFor="birthdate">
        Birthdate:
        <input
          type="date"
          id="birthdate"
          value={values.birthday}
          name="birthdate"
          onChange={(e) => setValues({ ...values, birthday: e.target.value })}
        />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          value={values.email}
          name="email"
          onChange={(e) => setValues({ ...values, email: e.target.value })}
          required
        />
      </label>
      <label htmlFor="gender">
        Gender:
        <select
          id="gender"
          name="gender"
          value={values.gender}
          onChange={(e) =>
            setValues({ ...values, gender: e.target.value as Gender })
          }
          required>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </label>

      <label htmlFor="over18">
        <input
          type="checkbox"
          id="over18"
          checked={values.isAdult}
          name="over18"
          onChange={(e) => setValues({ ...values, isAdult: e.target.checked })}
          required
        />
        I am over 18
      </label>
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}

export default Step3;
