import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';

const INIT_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = INIT_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
