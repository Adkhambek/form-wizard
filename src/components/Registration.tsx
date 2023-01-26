import React, { PureComponent } from 'react';

class Registration extends PureComponent {
  render() {
    return (
      <div className="step" id="step1">
        <label htmlFor="login">
          Login:
          <input type="text" id="login" name="login" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input type="password" id="confirmPassword" name="confirmPassword" />
        </label>
        <button type="button" id="nextStep1">
          Next
        </button>
      </div>
    );
  }
}

export default Registration;
