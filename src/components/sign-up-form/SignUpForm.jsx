import { useState } from 'react';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';
import './SignUpForm.scss';
import {
  InputFields,
  FormContainer,
  FormHeading,
  FormSubHeading,
} from '../form/Form.Style';

import { useDispatch } from 'react-redux';
import { signUpStart } from '../../store/user/UserActions';

function SignUpForm(props) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const dispatch = useDispatch();

  const resetInputs = () => {
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setDisplayName('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert('passwords do not match');
      return;
    }

    try {
      dispatch(signUpStart(email, password, displayName));
      resetInputs();
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        alert('Cannot create user, email already in use');
      } else {
        console.log('user creation encountered an error', error);
      }
    }
  };

  return (
    <FormContainer>
      <FormHeading>I do not have an account</FormHeading>
      <FormSubHeading>Sign up with your email and password</FormSubHeading>
      <InputFields>
        <FormInput
          onChange={(e) => setDisplayName(e.target.value)}
          type='text'
          name='displayName'
          value={displayName}
          label='Display Name'
          required
        />
        <FormInput
          onChange={(e) => setEmail(e.target.value)}
          type='email'
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
        <FormInput
          onChange={(e) => setConfirmPassword(e.target.value)}
          type='password'
          name='comfirmPassword'
          value={confirmPassword}
          label='Confirm Password'
          required
        />
        <Button buttonType={BUTTON_TYPES.INVERTED} onClick={handleSubmit}>
          SIGN UP
        </Button>
      </InputFields>
    </FormContainer>
  );
}

export default SignUpForm;
