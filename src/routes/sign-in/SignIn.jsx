import './SignIn.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
function SignIn(props) {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    const usersDocRef = await createUserDocumentFromAuth(response);
  };
  return (
    <div className='sign-up'>
      <p>Sign in page</p>
      <button onClick={logGoogleUser}>Sign in with Google</button>
      <SignUpForm />
    </div>
  );
}

export default SignIn;
