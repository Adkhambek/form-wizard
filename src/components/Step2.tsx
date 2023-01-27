import React, { useState } from 'react';
import { useAppDispatch } from '../store/hooks';
import { increment } from '../store/stepsSlice';
import { storeSubscription } from '../store/userSlice';
import { Subscription } from '../types';

function Step2() {
  const [subscription, setSubscription] = useState<Subscription>('free');
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(storeSubscription(subscription));
    dispatch(increment());
  }

  return (
    <form>
      <h2>Subscription:</h2>
      <div className="radio-group">
        <label htmlFor="free">
          <input
            type="radio"
            value="free"
            id="free"
            name="subscription"
            checked={subscription === 'free'}
            onChange={(e) => setSubscription(e.target.value as Subscription)}
          />
          Free
        </label>
        <label htmlFor="monthly">
          <input
            type="radio"
            id="monthly"
            name="subscription"
            value="monthly"
            checked={subscription === 'monthly'}
            onChange={(e) => setSubscription(e.target.value as Subscription)}
          />
          Monthly
        </label>

        <label htmlFor="yearly">
          <input
            type="radio"
            id="yearly"
            name="subscription"
            value="yearly"
            checked={subscription === 'yearly'}
            onChange={(e) => setSubscription(e.target.value as Subscription)}
          />
          Yearly
        </label>
      </div>
      <button type="button" onClick={handleClick}>
        Next
      </button>
    </form>
  );
}

export default Step2;
