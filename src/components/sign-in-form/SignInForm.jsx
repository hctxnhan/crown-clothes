import { useState } from 'react';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInAuthWithEmailAndPassword,
} from '../../utils/firebase/FirebaseUtils';
import FormInput from '../form-input/FormInput';
import Button from '../button/Button';
import { BUTTON_TYPES } from '../button/Button';
import './SignInForm.scss';

function SignInForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetInputs = () => {
    setEmail('');
    setPassword('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    resetInputs();
    try {
      await signInAuthWithEmailAndPassword(email, password);
    } catch (error) {
      switch (error.code) {
        case 'auth/user-not-found':
          alert('User not found');
          break;
        case 'auth/wrong-password':
          alert('Wrong password');
          break;
        case 'auth/invalid-email':
          alert('Invalid email');
          break;
        default:
          alert(error.message);
          break;
      }
    }
  };

  const signInWithGoogle = async (e) => {
    console.log('signing in with google');
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className='sign-in-form'>
      <h2 className='form-title'>I already have an account</h2>
      <p className='form-subtitle'>Sign in with my email and password</p>
      <form className='form form--sign-in' onSubmit={handleSubmit}>
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
        <div className='sign-in-options'>
          <Button type='submit' buttonType={BUTTON_TYPES.INVERTED}>
            Sign In
          </Button>
          <Button
            type='button'
            buttonType={BUTTON_TYPES.GOOGLE}
            onClick={signInWithGoogle}
          >
            Sign In with Google
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
