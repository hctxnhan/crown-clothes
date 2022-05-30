import { all, call, put, takeLatest } from 'typed-redux-saga/macro';
import { USER_ACTION_TYPES } from './UserTypes';
import { User } from 'firebase/auth';
import { AdditionalData } from '../../utils/firebase/FirebaseUtils';
import {
  signInSuccess,
  signInFailure,
  signUpSuccess,
  signUpFailure,
  signOutSuccess,
  signOutFailure,
  EmailSignInStart,
  SignUpStart,
  SignUpSuccess,
} from './UserActions';

import {
  getCurrentUser,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthWithEmailAndPassword,
  createAuthUserWithEmailAndPassword,
  signOutAuth,
} from '../../utils/firebase/FirebaseUtils';

function* getSnapshotFromUserAuth(user: User, additionalData?: AdditionalData) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      user,
      additionalData
    );
    if (userSnapshot) {
      yield* put(
        signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
      );
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* signInWithEmail({ payload: { email, password } }: EmailSignInStart) {
  console.log('signInWithEmail', email, password);
  try {
    const userCredential = yield* call(
      signInAuthWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const user = userCredential.user;
      yield* call(getSnapshotFromUserAuth, user);
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* isUserAuthenticated() {
  try {
    const user = yield* call(getCurrentUser);
    if (!user) return;

    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

function* signInAfterSignUp({
  payload: { user, additionalData },
}: SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalData);
}

function* signUp({ payload: { email, password, displayName } }: SignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
    if (userCredential) {
      const user = userCredential.user;
      yield* put(signUpSuccess(user, { displayName }));
    }
  } catch (error) {
    yield* put(signUpFailure(error as Error));
  }
}

function* signOut() {
  try {
    yield* call(signOutAuth);
    yield* put(signOutSuccess());
  } catch (error) {
    console.log('error signing out', error);
    yield* put(signOutFailure(error as Error));
  }
}

function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, signInWithEmail);
}

function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_START, signUp);
}

function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_UP_SUCCESS, signInAfterSignUp);
}

function* onSignOut() {
  yield* takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOut),
  ]);
}
