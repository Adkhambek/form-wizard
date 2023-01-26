import React, { PureComponent } from 'react';

class CreditCard extends PureComponent {
  render() {
    return (
      <div className="step" id="step4">
        <label htmlFor="creditCard">
          Credit Card Number:
          <input type="text" id="creditCard" name="creditCard" required />
        </label>
        <button type="button" id="nextStep4">
          Next
        </button>
      </div>
    );
  }
}

export default CreditCard;
