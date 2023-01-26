import React, { PureComponent } from 'react';

class Agreements extends PureComponent {
  render() {
    return (
      <div className="step" id="step5">
        <label htmlFor="login">
          Login:
          <input type="text" id="login" name="login" value="Adham" disabled />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            name="email"
            value="muzaffarov.adah@gmail.com"
            disabled
          />
        </label>

        <label htmlFor="personalData" className="checkbox-label">
          <input type="checkbox" name="consentCookie" required />I give my
          consent to the processing of my personal data
        </label>

        <label htmlFor="cookie" className="checkbox-label">
          <input type="checkbox" name="consentCookie" required />I accept the
          site&apos;s cookie policy
        </label>
        <button type="button" id="nextStep5">
          Next
        </button>
      </div>
    );
  }
}

export default Agreements;