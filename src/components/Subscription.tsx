import React, { PureComponent } from 'react';

class Subscription extends PureComponent {
  render() {
    return (
      <div className="step" id="step2">
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
            <input
              type="radio"
              id="yearly"
              name="subscription"
              value="yearly"
            />
            Yearly
          </label>
        </div>

        <button type="button" id="nextStep2">
          Next
        </button>
      </div>
    );
  }
}

export default Subscription;
