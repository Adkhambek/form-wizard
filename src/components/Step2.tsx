import React from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { increment } from '../store/stepsSlice';

function Step2() {
  const dispatch = useAppDispatch();
  console.log(useAppSelector((state) => state.user));

  return (
    <>
      <h2>Subscription:</h2>
      <div className="radio-group">
        <label htmlFor="free">
          <input type="radio" value="free" checked />
          Free
        </label>
        <label htmlFor="monthly">
          <input
            type="radio"
            id="monthly"
            name="subscription"
            value="monthly"
          />
          Monthly
        </label>

        <label htmlFor="yearly">
          <input type="radio" id="yearly" name="subscription" value="yearly" />
          Yearly
        </label>
      </div>
      <button type="button" onClick={() => dispatch(increment())}>
        Next
      </button>
    </>
  );
}

export default Step2;
