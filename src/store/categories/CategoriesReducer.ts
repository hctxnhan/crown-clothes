import { Category } from './CategoriesTypes';
import {
  fetchCategoriesStart,
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './CategoriesActions';
import { AnyAction } from 'redux';

export type CategoriesState = {
  readonly categories: Category[];
  readonly isLoading: boolean;
  readonly error: Error | null;
};

const INIT_STATE: CategoriesState = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = INIT_STATE, action = {} as AnyAction) => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    };
  } else if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    };
  } else if (fetchCategoriesFailure.match(action)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    };
  }
  return state;
};

export default categoriesReducer;
