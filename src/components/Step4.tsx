import React, { useState } from 'react';
import Cleave from 'cleave.js/react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeCreditCard } from '../store/userSlice';

function Step4() {
  const [creditCard, setCreditCard] = useState('');
  const [error, setError] = useState(false);

  const dispatch = useAppDispatch();

  function handleClick() {
    if (!creditCard) {
      setError(true);
      return;
    }
    setError(false);

    dispatch(storeCreditCard(creditCard));
    dispatch(increment());
  }

  return (
    <form>
      <Cleave
        type="text"
        id="creditCard"
        name="creditCard"
        value={creditCard}
        placeholder="Enter your credit card number"
        options={{ creditCard: true }}
        onChange={(e) => setCreditCard(e.target.value)}
      />
      {error && (
        <p className="error-message">The CreditCard field is required</p>
      )}
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </form>
  );
}

export default Step4;
