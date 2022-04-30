import React, { useState } from 'react';

import SignInForm from '../../components/sign-in/sign-in';
import SignUpForm from '../../components/sign-up/sign-up';
import Button from '../../components/button/button';

import './auth.scss';

const AuthPage = () => {
  const [existing, setExisting] = useState(true);
  return (
    <div className='auth-container'>
      {existing ? (
        <SignInForm />
      ) : (
        <SignUpForm existing={existing} setExisting={setExisting} />
      )}
      <div className={existing ? 'change-to-sign-up' : 'hidden'}>
        <div className='change-to-sign-up-container'>
          <div className='new-to'>
            <div className='new-to-text'>New to Fake Amazon?</div>
          </div>
          <Button onClick={() => setExisting(false)} buttonType={'inverted'}>
            Create your Fake Amazon Account
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
