import React from 'react';
import Step from './Step';

function App() {
  return (
    <>
      <h1>Form Wizard</h1>
      <div className="form-container">
        <div id="formWizard">
          <div className="step">
            <Step />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
