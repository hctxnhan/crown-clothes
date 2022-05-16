import { call, all, put, takeLatest } from 'redux-saga/effects';
import { CATEGORIES_ACTION_TYPES } from './CategoriesTypes';
import { getCategoriesAndDocuments } from '../../utils/firebase/FirebaseUtils';
import {
  fetchCategoriesSuccess,
  fetchCategoriesFailure,
} from './CategoriesActions';

export function* fetchCategoriesAsync() {
  try {
    const categoriesArray = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categoriesArray));
  } catch (error) {
    yield put(fetchCategoriesFailure(error));
  }
}

export function* fetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(fetchCategories)]);
}
