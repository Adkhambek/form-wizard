import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeCreditCard } from '../store/userSlice';

function Step4() {
  const [creditCard, setCreditCard] = useState('');
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(storeCreditCard(creditCard));
    dispatch(increment());
  }

  return (
    <>
      <Cleave
        type="text"
        id="creditCard"
        name="creditCard"
        value={creditCard}
        placeholder="Enter your credit card number"
        options={{ creditCard: true }}
        onChange={(e) => setCreditCard(e.target.value)}
      />
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </>
  );
}

export default Step4;
