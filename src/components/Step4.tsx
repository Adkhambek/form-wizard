import React from 'react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';

function Step4() {
  const dispatch = useAppDispatch();

  return (
    <>
      <label htmlFor="creditCard">
        Credit Card Number:
        <input type="text" id="creditCard" name="creditCard" required />
      </label>
      <button type="button" onClick={() => dispatch(increment())}>
        Next
      </button>
    </>
  );
}

export default Step4;
