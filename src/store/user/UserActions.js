import { createAction } from '../../utils/reducer/ReducerUtils';
import USER_ACTION_TYPES from './UserTypes';

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_TYPES.SET_USER, user);
