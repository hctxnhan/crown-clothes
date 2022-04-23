import './SignIn.scss';
import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/FirebaseUtils';
function SignIn(props) {
  const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    if (response) {
      const usersDocRef = await createUserDocumentFromAuth(response);
    }
  };
  return (
    <div className='sign-up'>
      <p>Sign in page</p>
      <button onClick={logGoogleUser}>Sign in with Google</button>
    </div>
  );
}

export default SignIn;
