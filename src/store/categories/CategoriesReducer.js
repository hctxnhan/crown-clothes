import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';

const INIT_STATE = {
  categories: [],
};

const categoriesReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
