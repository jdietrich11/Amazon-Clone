import React, { useState } from 'react';

import { signInAuthUserWithEmailAndPassword } from '../../utils/firestore/firestore';

import FormInput from '../form-input/form-input';
import Button from '../button/button';

import './sign-in.scss';
import { useDispatch } from 'react-redux';

import { setCurrentUser } from '../../store/user/user.action';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const dispatch = useDispatch();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormfields = () => {
    setFormFields(defaultFormFields);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(
        email,
        password
      );

      dispatch(setCurrentUser(user));

      resetFormfields();
    } catch (err) {
      switch (err.code) {
        case 'auth/wrong-password':
          alert('wrong password');
          break;
        case 'auth/user-not-found':
          alert('No user associated with this email');
          break;
        default:
          console.error(err);
      }
    }
  };

  return (
    <div className='sign-in-container'>
      <h2 className='sign-in-heading'>Sign-In</h2>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />
        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
        </div>
        <div className='policy'>
          By continuing, you agree to the fake <a href='#'>Conditions of Use</a>{' '}
          and
          <a href='#'> Privacy Notice.</a>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
