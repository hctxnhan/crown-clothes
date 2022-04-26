import { useState } from 'react';
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';
import './SignUpForm.scss';
function SignUpForm(props) {
  const [displayName, setDisplayName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );
      await createUserDocumentFromAuth(user, { displayName });
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
    <div className='sign-up-form'>
      <h2 className='form-title'>I do not have an account</h2>
      <p className='form-subtitle'>Sign up with your email and password</p>
      <form className='form form--sign-up' onSubmit={handleSubmit}>
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
        <Button buttonType={BUTTON_TYPES.INVERTED} type='submit'>
          SIGN UP
        </Button>
      </form>
    </div>
  );
}

export default SignUpForm;
