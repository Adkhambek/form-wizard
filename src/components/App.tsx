import React, { PureComponent } from 'react';
import Agreements from './Agreements';
import CreditCard from './CreditCard';
import PersonalInfo from './PersonalInfo';
import Registration from './Registration';
import Subscription from './Subscription';
import Summary from './Summary';

class App extends PureComponent {
  render() {
    return (
      <>
        <h1>Form Wizard</h1>
        <div className="form-container">
          <form id="formWizard">
            <Registration />
            <Subscription />
            <PersonalInfo />
            <CreditCard />
            <Agreements />
            <Summary />
          </form>
        </div>
      </>
    );
  }
}

export default App;
