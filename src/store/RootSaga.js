import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categories/CategoriesSaga';
import { userSaga } from './user/UserSaga';
export default function* rootSaga() {
  yield all([call(categoriesSaga), call(userSaga)]);
}
