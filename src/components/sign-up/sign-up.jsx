import React, { useState } from 'react';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firestore/firestore';
import FormInput from '../form-input/form-input';

import Button from '../button/button';

import './sign-up.scss';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = (props) => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumentFromAuth(user, { displayName });
      resetFormfields();
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        alert('Email already in use');
      }
      console.error(err);
    }
  };

  return (
    <div className='sign-up-container'>
      <h2 className='sign-up-heading'>Create Account</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          className='form-input'
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <FormInput
          className='form-input'
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          className='form-input'
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <span className='span'>
          <i className='a-icon a-icon-alert'>i</i> Passwords must be at lease 6
          characters.
        </span>
        <FormInput
          className='form-input'
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <Button type='submit'>Sign Up</Button>
        <div className='policy'>
          By creating an account, you agree to the fake{' '}
          <a href='#'>Conditions of Use</a> and
          <a href='#'> Privacy Notice.</a>
        </div>
      </form>
      <div className='is-existing'>
        <div className='already'>
          Already have an account?{' '}
          <button
            onClick={() => props.setExisting(!props.existing)}
            className='sign-in'
          >
            Sign-In &rarr;
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpForm;
