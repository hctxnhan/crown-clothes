import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
