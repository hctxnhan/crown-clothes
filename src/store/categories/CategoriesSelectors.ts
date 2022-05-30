import { createSelector } from 'reselect';
import { CategoriesState } from './CategoriesReducer';
import { CategoryMap } from './CategoriesTypes';
import { RootState } from '../Store';

const selectCategoriesReducer = (state: RootState): CategoriesState =>
  state.categories;

export const selectCategories = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.categories
);

export const selectCategoriesMap = createSelector(
  [selectCategories],
  (categories): CategoryMap => {
    const categoriesMap = categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMap);
    return categoriesMap;
  }
);

export const selectCategoriesIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);
