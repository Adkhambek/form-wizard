import React from 'react';

function Step6() {
  return (
    <>
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
      <button type="button" onClick={() => window.location.reload()}>
        Confirm
      </button>
    </>
  );
}

export default Step6;
