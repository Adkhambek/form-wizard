import React from 'react';

function Step2() {
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
    </>
  );
}

export default Step2;
