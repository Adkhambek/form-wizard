import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeLogin } from '../store/userSlice';
import { LoginInterface } from '../types';

function Step1() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<LoginInterface>();

  const password = useRef({});
  password.current = watch('password', '');

  const dispatch = useAppDispatch();

  function onSubmit(data: LoginInterface) {
    dispatch(storeLogin({ username: data.username, password: data.password }));
    dispatch(increment());
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="login">
        Login:
        <input
          type="text"
          id="username"
          {...register('username', {
            required: true,
            pattern: /^[a-z]+$/,
          })}
        />
        {errors.username && errors.username.type === 'required' && (
          <p className="error-message">The Username field is required</p>
        )}
        {errors.username && errors.username.type === 'pattern' && (
          <p className="error-message">Use only lowercase letters </p>
        )}
      </label>
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          {...register('password', {
            required: true,
            pattern: /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/g,
            minLength: 5,
          })}
        />
        {errors.password && errors.password.type === 'required' && (
          <p className="error-message">The Password field is required</p>
        )}
        {errors.password && errors.password.type === 'pattern' && (
          <p className="error-message">
            The Password must contain at least one letter and one number
          </p>
        )}
        {errors.password && errors.password.type === 'minLength' && (
          <p className="error-message">
            The Password must be longer than 5 symbols
          </p>
        )}
      </label>
      <label htmlFor="confirmPassword">
        Confirm Password:
        <input
          type="password"
          id="confirmPassword"
          {...register('confirmPassword', {
            validate: (value) =>
              value === password.current || 'The passwords do not match',
          })}
        />
        {errors.confirmPassword && (
          <p className="error-message">The passwords do not match</p>
        )}
      </label>
      <button type="submit">Next</button>
    </form>
  );
}

export default Step1;
