import { AnyAction } from 'redux';
import { UserData } from '../../utils/firebase/FirebaseUtils';
import {
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  signUpFailure,
} from './UserActions';

export type UserState = {
  readonly currentUser: UserData | null;
  readonly error: Error | null;
  readonly isLoading: boolean;
};

const INIT_STATE: UserState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userReducer = (state = INIT_STATE, action: AnyAction): UserState => {
  const { payload } = action;

  if (signInSuccess.match(action)) {
    return {
      ...state,
      currentUser: payload,
      isLoading: false,
    };
  } else if (signOutSuccess.match(action)) {
    return {
      ...state,
      currentUser: null,
      isLoading: false,
    };
  } else if (
    signInFailure.match(action) ||
    signOutFailure.match(action) ||
    signUpFailure.match(action)
  ) {
    return {
      ...state,
      error: payload,
      isLoading: false,
    };
  }

  return state;
};

export default userReducer;
