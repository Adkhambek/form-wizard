import React from 'react';
import { useAppSelector, useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';

function Button() {
  const currentStep = useAppSelector((state) => state.steps.step);

  const dispatch = useAppDispatch();
  return (
    <>
      {currentStep === 6 && (
        <button type="button" onClick={() => window.location.reload()}>
          Confirm
        </button>
      )}
      {currentStep < 6 && (
        <button type="button" onClick={() => dispatch(increment())}>
          Next
        </button>
      )}
    </>
  );
}

export default Button;
