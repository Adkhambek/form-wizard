import React from 'react';
import Step from './Step';
import Button from './Button';

function App() {
  return (
    <>
      <h1>Form Wizard</h1>
      <div className="form-container">
        <form id="formWizard">
          <div className="step">
            <Step />
            <Button />
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
