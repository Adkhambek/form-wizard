import React, { PureComponent } from 'react';

class Summary extends PureComponent {
  render() {
    return (
      <div className="step" id="step6">
        <h3>Summary of your input:</h3>
        <ul id="summary">
          <li>
            <b>Firstname:</b> Adham
          </li>
          <li>
            <b>Lastname:</b> Muzaffarov
          </li>
          <li>
            <b>Firstname:</b> Adham
          </li>
          <li>
            <b>Firstname:</b> Adham
          </li>
        </ul>
        <button type="submit" id="submitForm">
          Submit
        </button>
      </div>
    );
  }
}

export default Summary;
