import { SignInPageContainer } from './SignIn.Style';
import SignInForm from '../../components/sign-in-form/SignInForm';
import SignUpForm from '../../components/sign-up-form/SignUpForm';
function SignIn() {
  return (
    <SignInPageContainer>
      <SignInForm />
      <SignUpForm />
    </SignInPageContainer>
  );
}

export default SignIn;
