import { combineReducers } from 'redux';
import userReducer from './user/UserReducer';
import categoriesReducer from './categories/CategoriesReducer';
import cartReducer from './cart/CartReducer';

const rootReducer = combineReducers({
  user: userReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});

export default rootReducer;
