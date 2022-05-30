import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';
import {
  createAction,
  Action,
  ActionWithPayload,
  withMatcher,
} from '../../utils/reducer/ReducerUtils';
import { Category } from './CategoriesTypes';

export type FetchCategoriesStart =
  Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;
export type FetchCategoriesSuccess = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
  Category[]
>;
export type FetchCategoriesFailure = ActionWithPayload<
  CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE,
  Error
>;

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStart =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START)
);

export const fetchCategoriesSuccess = withMatcher(
  (categories: Category[]): FetchCategoriesSuccess =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS, categories)
);

export const fetchCategoriesFailure = withMatcher(
  (error: Error): FetchCategoriesFailure =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_FAILURE, error)
);
