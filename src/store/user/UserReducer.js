import USER_ACTION_TYPES from './UserTypes';

const INIT_STATE = {
  currentUser: null,
};

const userReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case USER_ACTION_TYPES.SET_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      return state;
  }
};

export default userReducer;
