import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';
import {
  InputFields,
  FormContainer,
  FormHeading,
  FormSubHeading,
} from '../form/Form.Style';
import { SignInOptionsContainer } from './SignInForm.Style.js';

import { useDispatch } from 'react-redux';
import {
  googleSignInStart,
  emailSignInStart,
} from '../../store/user/UserActions';

import { MouseEvent } from 'react';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('email: ', email);
    dispatch(emailSignInStart(email, password));
    resetInputs();
  };

  const signInWithGoogle = async (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    dispatch(googleSignInStart());
  };

  return (
    <FormContainer>
      <FormHeading>I already have an account</FormHeading>
      <FormSubHeading>Sign in with my email and password</FormSubHeading>
      <InputFields>
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          type='text'
          name='email'
          value={email}
          label='Email'
          required
        />
        <FormInput
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          name='password'
          value={password}
          label='Password'
          required
        />
        <SignInOptionsContainer>
          <Button onClick={handleSubmit} buttonType={BUTTON_TYPES.INVERTED}>
            Sign In
          </Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES.GOOGLE}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </SignInOptionsContainer>
      </InputFields>
    </FormContainer>
  );
}

export default SignInForm;
