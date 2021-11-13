import React from 'react';

import './App.css';

const App = () => {
  const handleFbLogin = () => {
    const FB = (window as any).FB;

    FB.login((response: any) => {
      if (response.authResponse) {
        console.log('Welcome!  Fetching your information.... ');
        FB.api('/me', (response: any) => {
          console.log('Good to see you, ' + response.name + '.');
        });
      } else {
        console.log('User cancelled login or did not fully authorize.');
      }
    });
  };

  return (
    <div className="App">
      <div
        className="login-container"
      >
        <button
          onClick={handleFbLogin}
          data-testid="fb-login-button"
        >
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}

export default App;
