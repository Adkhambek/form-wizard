import React from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storePersonalInfo } from '../store/userSlice';
import { PersonalInfoInterface } from '../types';

function Step3() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalInfoInterface>();

  const dispatch = useAppDispatch();

  function onSubmit(data: PersonalInfoInterface) {
    dispatch(storePersonalInfo(data));
    dispatch(increment());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First Name:
        <input
          type="text"
          id="firstName"
          {...register('firstName', { required: true })}
        />
        {errors.firstName && (
          <p className="error-message">The FirstName field is required</p>
        )}
      </label>
      <label htmlFor="lastName">
        Last Name:
        <input
          type="text"
          id="lastName"
          {...register('lastName', { required: true })}
        />
        {errors.lastName && (
          <p className="error-message">The LastName field is required</p>
        )}
      </label>
      <label htmlFor="middleName">
        Middle Name:
        <input type="text" id="middleName" {...register('middleName')} />
      </label>
      <label htmlFor="birthdate">
        Birthdate:
        <input type="date" id="birthdate" {...register('birthday')} />
      </label>
      <label htmlFor="email">
        Email:
        <input
          type="email"
          id="email"
          {...register('email', {
            required: true,
            pattern: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/g,
          })}
        />
        {errors.email && errors.email.type === 'required' && (
          <p className="error-message">The Email field is required</p>
        )}
        {errors.email && errors.email.type === 'pattern' && (
          <p className="error-message">The Email is not valid</p>
        )}
      </label>
      <label htmlFor="gender">
        Gender:
        <select id="gender" {...register('gender', { required: true })}>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        {errors.gender && (
          <p className="error-message">The Gender field is required</p>
        )}
      </label>

      <label htmlFor="over18">
        <input
          type="checkbox"
          id="over18"
          {...register('isAdult', { required: true })}
        />
        I am over 18
      </label>
      {errors.isAdult && <p className="error-message">You are under 18</p>}
      <button type="submit">Next</button>
    </form>
  );
}

export default Step3;
