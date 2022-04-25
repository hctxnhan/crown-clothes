import './SignIn.scss';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
function SignIn(props) {
  return (
    <div className='sign-in'>
      <SignInForm />
      <SignUpForm />
    </div>
  );
}

export default SignIn;
